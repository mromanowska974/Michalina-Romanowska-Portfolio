'use server';

import { redirect } from "next/dist/server/api-utils";
import { saveProject } from './projects';

function isInvalidText(text){
    return !text || text.trim() === '';
}

export async function addProject(formData) {
    const project = {
        name: formData.get('project-name'),
        technologies: formData.get('technologies'),
        description: formData.get('description'),
        app_link: formData.get('app-link'),
        repo_link: formData.get('repo-link'),
    }

    if(
        isInvalidText(project.name) ||
        isInvalidText(project.technologies) ||
        isInvalidText(project.description) ||
        isInvalidText(project.app_link) ||
        isInvalidText(project.repo_link)
    ) {
        throw new Error('Invalid Input');
    }

    saveProject(project);
    // redirect('/projects');
}