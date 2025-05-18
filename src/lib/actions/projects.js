'use server';

import { redirect } from "next/navigation";
import { saveProject, editProject } from "../db/projects";
import { isInvalidText } from "./shared";

async function prepareData(formData) {
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
        await isInvalidText(project.name) ||
        await isInvalidText(project.technologies) ||
        await isInvalidText(project.descriptionPL) ||
        await isInvalidText(project.descriptionEN) ||
        await isInvalidText(project.app_link) ||
        await isInvalidText(project.repo_link) ||
        await isInvalidText(project.status)
    ) {
        throw new Error('Invalid Input');
    }

    return {
        project,
        images
    }
}

export async function addProject(formData) {
    const { project, images } = await prepareData(formData);

    saveProject(project, images);
    redirect('/secret-door/edit-projects');
}

export async function updateProject(id, formData) {
    const { project, images } = await prepareData(formData);

    editProject(id, project, images);
    redirect('/secret-door/edit-projects');
}