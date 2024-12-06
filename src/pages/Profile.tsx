import React from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, MapPin, FileText, Bell, Settings } from 'lucide-react';

function Profile() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Profile Sidebar */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <div className="w-32 h-32 mx-auto mb-4 relative">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop"
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
              <button className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700">
                <Settings className="w-4 h-4" />
              </button>
            </div>
            <h2 className="text-xl font-semibold mb-2">Srinivas Chowdary</h2>
            <p className="text-gray-600 mb-4">Senior Developer</p>
            <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
              Edit Profile
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="text-gray-400" />
                <span>srinivas.qiscet.edu.in</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-gray-400" />
                <span>+91 8978363226</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-gray-400" />
                <span>Ongole,Andhra Pradesh,INDIA.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-4">Resume</h3>
            <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center">
              <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 mb-4">Drag and drop your resume here or</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                Upload Resume
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-4">Job Preferences</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Desired Role
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-md"
                  value="Frontend Developer"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Location
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-md"
                  value="Remote"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Expected Salary
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-md"
                  value="120,000/- - 150,000/-"
                />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Job Alerts</h3>
              <Bell className="text-gray-400" />
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium">Frontend Developer Jobs</h4>
                  <p className="text-sm text-gray-600">Daily alerts for new positions</p>
                </div>
                <button className="text-blue-600 hover:text-blue-700">Edit</button>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium">Remote Tech Jobs</h4>
                  <p className="text-sm text-gray-600">Weekly digest of opportunities</p>
                </div>
                <button className="text-blue-600 hover:text-blue-700">Edit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Profile;