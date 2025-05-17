'use server';

import { redirect } from 'next/navigation';
import { deleteProject } from '../db/projects';
import { deleteQuestion } from '../db/questions';
import { signIn } from '../../auth';

export async function isInvalidText(text){
    return !text || text.trim() === '';
}

export async function deleteResource(resourceId, resourceType) {
    if (resourceType === 'project') {
        deleteProject(resourceId);
        redirect(`/secret-door/edit-projects`);
    } else if (resourceType === 'question') {
        deleteQuestion(resourceId);
        redirect(`/secret-door/questions`);
    }

}

export async function validateAnswer(question, formData) {
    let redirectUrl = '/secret-door/add-project'; 

    try {     
        const response = await signIn("credentials", { 
            username: question.id,
            password: formData.get('answer'),
            redirect: false
        });

        if(!response) {
            throw new Error('Invalid answer');
        }
    } catch (error) {
        redirectUrl = '/'; 
    } finally {
        if (redirectUrl) {
            redirect(redirectUrl); 
        }
    }
}