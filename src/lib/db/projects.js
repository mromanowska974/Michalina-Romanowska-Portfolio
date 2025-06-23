import sql from 'better-sqlite3';
import fs from 'node:fs';

const db = sql('portfolio.db');

function addImages(images, projectName, projectId) {
    images.forEach(image => {
        const imageData = {
            name: image.name,
            project_id: projectId,
        }

        db.prepare(`
            INSERT INTO images
                (name, project_id)
            VALUES (
                @name,
                @project_id
            )
        `).run(imageData);
    });

    if(!fs.existsSync(`public/images/${projectName}`)){
        fs.mkdirSync(`public/images/${projectName}`);
    }
    
    images.forEach(image => {
        const stream = fs.createWriteStream(`public/images/${projectName}/${image.name}`);
        image.arrayBuffer().then(buffer => {
            stream.write(Buffer.from(buffer), (error) => {
                if(error){
                    throw new Error('Saving image failed.');
                }
            });
            stream.end();
        });
    })
}

function deleteImages(projectName, projectId) {
    db.prepare('delete from images where project_id=?').run(projectId);
    fs.rmdirSync(`public/images/${projectName}`, { recursive: true });
}

export function saveProject(project, images) {
    const query = db.prepare(`
        INSERT INTO projects
            (name, technologies, descriptionPL, descriptionEN, status, app_link, repo_link)
        VALUES (
            @name,
            @technologies,
            @descriptionPL,
            @descriptionEN,
            @status,
            @app_link,
            @repo_link
        )
    `);

    const result = query.run(project);
    const projectId = result.lastInsertRowid;

    addImages(images, project.name, projectId);
}

export function getProjects() {
    return db.prepare('select * from projects').all();
}

export function getProjectImages(projectId) {
    return db.prepare('select * from images where project_id=?').all(projectId);
}

export function getProject(id) {
    return db.prepare('select * from projects where id=?').get(id);
}

export function editProject(id, project, images) {
    const existingProject = getProject(id);

    deleteImages(existingProject.name, id);
    addImages(images, project.name, id);

    db.prepare(`
        update projects
        set name = @name,
            technologies = @technologies,
            descriptionPL = @descriptionPL,
            descriptionEN = @descriptionEN,
            status = @status,
            app_link = @app_link,
            repo_link = @repo_link
        where id = @id
    `).run({
        ...project,
        id: id
    });
}

export function deleteProject(id) {
    const project = getProject(id);

    db.prepare('delete from projects where id=?').run(id);
    deleteImages(project.name, id);
}
