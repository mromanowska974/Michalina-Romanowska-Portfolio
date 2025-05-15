'use client';

import React from 'react';
import Link from 'next/link';
import styles from './AdminNavbar.module.css';

function AdminNavbar() {
    return (
        <nav className={styles.navbar}>
            <Link href={'/secret-door/add-project'}>Dodaj Projekt</Link>
            <Link href={'/secret-door/edit-projects'}>Edytuj/Usuń Projekt</Link>
            <Link href={'/secret-door/questions'}>Pytania weryfikacyjne</Link>
        </nav>
    );
}

export default AdminNavbar;