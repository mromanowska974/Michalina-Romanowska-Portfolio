'use server';

import { saveProject } from './projects';

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