import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
// Import icons from Heroicons (or use Lucide if preferred)
import { HomeIcon, TableCellsIcon, PlusCircleIcon, ChartBarIcon, ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline';

const navItems = [
  { to: '/', label: 'Dashboard', icon: HomeIcon },
  { to: '/products', label: 'Products', icon: TableCellsIcon },
  { to: '/add-product', label: 'Add Product', icon: PlusCircleIcon },
  { to: '/analytics', label: 'Analytics', icon: ChartBarIcon },
];

export default function Sidebar() {
  const { logout } = useAuth();
  return (
    <aside className="h-screen w-64 bg-white border-r flex flex-col fixed z-10">
      <div className="p-6 text-2xl font-bold tracking-tight text-blue-700">Smart Inventory</div>
      <nav className="flex-1">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50 transition ${isActive ? 'bg-blue-100 font-semibold text-blue-700' : ''}`
            }
            end
          >
            <Icon className="w-5 h-5 mr-3" />
            {label}
          </NavLink>
        ))}
      </nav>
      <button
        onClick={logout}
        className="flex items-center px-6 py-3 text-gray-700 hover:bg-red-50 border-t border-gray-100 w-full"
      >
        <ArrowLeftOnRectangleIcon className="w-5 h-5 mr-3" />
        Logout
      </button>
    </aside>
  );
} 