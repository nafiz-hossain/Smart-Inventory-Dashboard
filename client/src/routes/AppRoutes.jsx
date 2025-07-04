import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const Dashboard = () => <div className="p-8">Dashboard (protected)</div>;

export default function AppRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Suspense>
  );
} 