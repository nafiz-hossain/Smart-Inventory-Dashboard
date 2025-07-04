import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import Layout from '../components/Layout';
import { useAuth } from '../context/AuthContext';

const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const Dashboard = () => <div className="p-8">Dashboard (protected)</div>;
const Products = () => <div className="p-8">Products Table (protected)</div>;
const AddProduct = () => <div className="p-8">Add Product Form (protected)</div>;
const Analytics = () => <div className="p-8">Analytics Dashboard (protected)</div>;

// Component to protect routes
function RequireAuth() {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  return <Outlet />;
}

export default function AppRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<RequireAuth />}>
          <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/analytics" element={<Analytics />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
} 