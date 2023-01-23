import React from 'react';
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useFirebaseMongo from '../../Hooks/useFirebaseMongo';

const AdminPrivate = () => {
    const { firebase: { isAdmin, loading } } = useFirebaseMongo();
    const location = useLocation();

    if (loading) {
        return (
            <div className="h-screen flex items-center justify-center">
                <img src="https://assets.materialup.com/uploads/fa8430a1-4dea-49d9-a4a3-e5c6bf0b2afb/preview.gif" alt="spinner-img" />
            </div>
        )
    }
    return isAdmin ? <Outlet /> : <Navigate to="/login" state={{ from: location }}></Navigate>
}

export default AdminPrivate;