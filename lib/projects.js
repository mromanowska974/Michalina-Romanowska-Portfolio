import sql from 'better-sqlite3';
import fs from 'node:fs';

const db = sql('portfolio.db');

async function addImages(images, projectName){
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

    addImages(images, project.name);
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