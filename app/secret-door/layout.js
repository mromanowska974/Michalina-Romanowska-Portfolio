import React from 'react';
import AdminNavbar from '../../components/AdminNavbar/AdminNavbar.js';

function AdminLayout({ children }) {
    return (
        <div>
            <AdminNavbar />
            { children }
        </div>
    );
}

export default AdminLayout;