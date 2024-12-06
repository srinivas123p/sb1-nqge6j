import React from 'react';
import { MapPin, Clock, DollarSign } from 'lucide-react';

interface JobCardProps {
  job: {
    id: number;
    title: string;
    company: string;
    location: string;
    salary: string;
    type: string;
    image: string;
  };
}

function JobCard({ job }: JobCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition">
      <div className="flex items-start gap-4">
        <img
          src={job.image}
          alt={job.company}
          className="w-16 h-16 rounded-lg object-cover"
        />
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
          <p className="text-gray-600 mb-4">{job.company}</p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {job.location}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {job.type}
            </div>
            <div className="flex items-center gap-1">
              <DollarSign className="w-4 h-4" />
              {job.salary}
            </div>
          </div>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
          Apply Now
        </button>
      </div>
    </div>
  );
}

export default JobCard;