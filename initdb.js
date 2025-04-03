const sql = require('better-sqlite3');
const db = sql('portfolio.db');

db.prepare(`
    CREATE TABLE IF NOT EXISTS projects (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL UNIQUE,
        technologies TEXT NOT NULL UNIQUE,
        description TEXT NOT NULL UNIQUE,
        app_link TEXT NOT NULL UNIQUE,
        repo_link TEXT NOT NULL UNIQUE
    )
`).run();

db.prepare(`
    CREATE TABLE IF NOT EXISTS questions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        question TEXT NOT NULL UNIQUE,
        answer TEXT NOT NULL UNIQUE
    )
`).run();