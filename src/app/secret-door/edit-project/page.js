import React from 'react';
import { getProject } from '../../../lib/db/projects';
import AddOrEditProjectForm from '../../../components/AddOrEditProjectForm/addOrEditProjectForm';

async function EditProject({searchParams}) {
    const params = await searchParams;
    const projectId = params.id;

    const project = getProject(projectId);

    return (
        <AddOrEditProjectForm editedProject={project}/>
    );
}

export default EditProject;