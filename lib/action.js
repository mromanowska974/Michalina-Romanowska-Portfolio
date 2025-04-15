'use server';

import { redirect } from 'next/navigation';
import { deleteProject, saveProject } from './projects';
import { deleteQuestion, saveQuestion } from './questions';
import bcrypt from 'bcrypt';

function isInvalidText(text){
    return !text || text.trim() === '';
}

export async function addProject(formData) {
    const project = {
        name: formData.get('project-name'),
        technologies: formData.get('technologies'),
        descriptionPL: formData.get('descriptionPL'),
        descriptionEN: formData.get('descriptionEN'),
        app_link: formData.get('app-link'),
        repo_link: formData.get('repo-link'),
        status: formData.get('status')
    }

    const images = formData.getAll('images');

    if(
        isInvalidText(project.name) ||
        isInvalidText(project.technologies) ||
        isInvalidText(project.descriptionPL) ||
        isInvalidText(project.descriptionEN) ||
        isInvalidText(project.app_link) ||
        isInvalidText(project.repo_link) ||
        isInvalidText(project.status)
    ) {
        throw new Error('Invalid Input');
    }

    saveProject(project, images);
}

export async function addQuestion(formData) {
    const unhashedAnswer = formData.get('answer');
    const question = {
        question: formData.get('question'),
        answer: await bcrypt.hash(unhashedAnswer, 1)
    }

    if (isInvalidText(question.question) || isInvalidText(question.answer)) {
        throw new Error('Invalid Input');
    }

    saveQuestion(question);
    redirect('/secret-door/questions');
}

export async function deleteResource(resourceId, resourceType) {
    if (resourceType === 'project') {
        deleteProject(resourceId);
    } else if (resourceType === 'question') {
        deleteQuestion(resourceId);
    }

    redirect(`/secret-door/${resourceType}s`);
}