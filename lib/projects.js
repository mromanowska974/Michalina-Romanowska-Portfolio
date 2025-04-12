import sql from 'better-sqlite3';

const db = sql('portfolio.db');

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
        image.project_id = projectId;
        db.prepare(`
            INSERT INTO images
                (path, project_id)
            VALUES (
                @path,
                @project_id
            )
        `).run(image);
    });
}

export function getProjects() {
    return db.prepare('select * from projects').all();
}

export function getProject(id) {
    return db.prepare('select * from projects where id=?').get(id);
}