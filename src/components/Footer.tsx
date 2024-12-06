import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">JobPortal</h3>
            <p className="text-sm">
              Connecting talent with opportunities worldwide through innovative technology.
            </p>
          </div>
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">For Job Seekers</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Browse Jobs</a></li>
              <li><a href="#" className="hover:text-white">Create Profile</a></li>
              <li><a href="#" className="hover:text-white">Job Alerts</a></li>
              <li><a href="#" className="hover:text-white">Career Resources</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">For Employers</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Post a Job</a></li>
              <li><a href="#" className="hover:text-white">Browse Candidates</a></li>
              <li><a href="#" className="hover:text-white">Recruitment Solutions</a></li>
              <li><a href="#" className="hover:text-white">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-white">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-white">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} JobPortal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;