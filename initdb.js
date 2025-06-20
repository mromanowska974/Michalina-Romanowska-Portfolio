const sql = require('better-sqlite3');
const db = sql('portfolio.db');

db.prepare(`
    CREATE TABLE IF NOT EXISTS projects (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL UNIQUE,
        technologies TEXT NOT NULL,
        descriptionPL TEXT NOT NULL UNIQUE,
        descriptionEN TEXT NOT NULL UNIQUE,
        app_link TEXT NOT NULL UNIQUE,
        repo_link TEXT NOT NULL UNIQUE,
        status TEXT NOT NULL CHECK (status IN ('completed', 'stillInProgress'))
    )
`).run();

db.prepare(`
    CREATE TABLE IF NOT EXISTS images (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        project_id INTEGER NOT NULL
    )
`).run();

db.prepare(`
    CREATE TABLE IF NOT EXISTS questions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        question TEXT NOT NULL UNIQUE,
        answer TEXT NOT NULL
    )
`).run();

db.prepare(`
        INSERT INTO questions
            (question, answer)
        VALUES (
            @question,
            @answer
        )
`).run({
    question: 'admin',
    answer: process.env.ADMIN_ANSWER
});