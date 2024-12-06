import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, User, Bell } from 'lucide-react';

function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2">
            <Briefcase className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold">JobPortal</span>
          </Link>
          
          <div className="flex items-center gap-8">
            <Link to="/jobs" className="text-gray-600 hover:text-gray-900">Jobs</Link>
            <Link to="/freelance" className="text-gray-600 hover:text-gray-900">Freelance</Link>
            <Link to="/companies" className="text-gray-600 hover:text-gray-900">Compamies</Link>
            <Link to="/resources" className="text-gray-600 hover:text-gray-900">Resources</Link>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 text-gray-600 hover:text-gray-900">
              <Bell className="w-6 h-6" />
            </button>
            <Link to="/profile">
              <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                <User className="w-5 h-5" />
                Profile
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;