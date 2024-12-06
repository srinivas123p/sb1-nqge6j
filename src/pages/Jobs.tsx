import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, MapPin, Briefcase, DollarSign } from 'lucide-react';
import JobCard from '../components/JobCard';

const jobs = [
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
  },
  {
    id: 3,
    title: 'Product Designer',
    company: 'DesignHub',
    location: 'Ongole',
    salary: 'Rs.100000 - Rs.130000',
    type: 'Full-time',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=200&h=200&fit=crop'
  }
];

function Jobs() {
  const [filters, setFilters] = useState({
    location: '',
    jobType: '',
    salary: ''
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      {/* Search and Filters */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 flex items-center gap-2 bg-gray-50 rounded-lg px-4 py-2">
            <Search className="text-gray-400" />
            <input
              type="text"
              placeholder="Search jobs..."
              className="flex-1 bg-transparent outline-none"
            />
          </div>
          <div className="flex gap-4">
            <select
              className="bg-gray-50 rounded-lg px-4 py-2 outline-none"
              value={filters.location}
              onChange={(e) => setFilters({ ...filters, location: e.target.value })}
            >
              <option value="">Location</option>
              <option value="remote">Remote</option>
              <option value="onsite">On-site</option>
              <option value="hybrid">Hybrid</option>
            </select>
            <select
              className="bg-gray-50 rounded-lg px-4 py-2 outline-none"
              value={filters.jobType}
              onChange={(e) => setFilters({ ...filters, jobType: e.target.value })}
            >
              <option value="">Job Type</option>
              <option value="fulltime">Full-time</option>
              <option value="parttime">Part-time</option>
              <option value="contract">Contract</option>
            </select>
            <select
              className="bg-gray-50 rounded-lg px-4 py-2 outline-none"
              value={filters.salary}
              onChange={(e) => setFilters({ ...filters, salary: e.target.value })}
            >
              <option value="">Salary Range</option>
              <option value="10000-50000">Rs.10000 - Rs.50000</option>
              <option value="50000-100000">Rs.50000 - Rs.100000</option>
              <option value="100000+">Rs100000+</option>
            </select>
          </div>
        </div>
      </div>

      {/* Job Listings */}
      <div className="space-y-6">
        {jobs.map(job => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </motion.div>
  );
}

export default Jobs;