import sql from 'better-sqlite3';

const db = sql('portfolio.db');

export function saveQuestion(question) {
    db.prepare(`
        INSERT INTO questions
            (question, answer)
        VALUES (
            @question,
            @answer
        )
    `).run(question);
}

export function getQuestions() {
    return db.prepare(`SELECT * FROM questions`).all();
}

export function getRandomQuestion() {
    return db.prepare(`SELECT * FROM questions ORDER BY RANDOM() LIMIT 1`).get();
}

export function deleteQuestion(id) {
    db.prepare(`DELETE FROM questions WHERE id = ?`).run(id);
}

export function updateQuestion(question) {
    db.prepare(`
        UPDATE questions
        SET question = @question,
            answer = @answer
        WHERE id = @id
    `).run(question);
}