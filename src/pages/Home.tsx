import React from 'react';
import { motion } from 'framer-motion';
import { Search, Briefcase, TrendingUp, Bell } from 'lucide-react';
import JobCard from '../components/JobCard';

const featuredJobs = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    company: 'TechCorp',
    location: 'Ongole',
    salary: 'Rs.120000 - Rs.150000',
    type: 'Full-time',
    image: 'https://images.unsplash.com/photo-1549924231-f129b911e442?w=200&h=200&fit=crop'
  },
  {
    id: 2,
    title: 'AI Engineer',
    company: 'DataTech',
    location: 'Ongole',
    salary: 'Rs.140000 - Rs.180000',
    type: 'Full-time',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=200&h=200&fit=crop'
  }
];

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Find Your Dream Job Today
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Connect with top companies and opportunities worldwide
        </p>
        <div className="flex items-center justify-center max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-2">
          <Search className="text-gray-400 ml-2" />
          <input
            type="text"
            placeholder="Job title, keywords, or company"
            className="flex-1 p-2 outline-none"
          />
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
            Search
          </button>
        </div>
      </div>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <Briefcase className="w-12 h-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">AI-Powered Matching</h3>
          <p className="text-gray-600">Smart algorithms to find your perfect job match</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <TrendingUp className="w-12 h-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Real-time Analytics</h3>
          <p className="text-gray-600">Track your application performance</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <Bell className="w-12 h-12 text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Smart Job Alerts</h3>
          <p className="text-gray-600">Never miss relevant opportunities</p>
        </div>
      </div>

      {/* Featured Jobs */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8">Featured Jobs</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {featuredJobs.map(job => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Home;