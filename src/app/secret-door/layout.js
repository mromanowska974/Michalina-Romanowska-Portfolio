import React from 'react';
import AdminNavbar from '../../components/AdminNavbar/AdminNavbar.js';
import styles from './layout.module.css'; 

function AdminLayout({ children }) {
    return (
        <div className={styles.container}>
            <AdminNavbar />
            { children }
        </div>
    );
}

export default AdminLayout;