import sql from 'better-sqlite3';

const db = sql('portfolio.db');

export function saveProject(project) {
    db.prepare(`
        INSERT INTO projects
            (name, technologies, description, app_link, repo_link)
        VALUES (
            @name,
            @technologies,
            @description,
            @app_link,
            @repo_link
        )
    `).run(project);
}

export function getProjects() {
    return db.prepare('select * from projects').all();
}