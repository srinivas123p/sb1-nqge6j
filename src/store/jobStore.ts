import { create } from 'zustand';
import { supabase } from '../lib/supabase';
import * as tf from '@tensorflow/tfjs';

interface JobState {
  jobs: any[];
  loading: boolean;
  fetchJobs: () => Promise<void>;
  searchJobs: (query: string) => Promise<void>;
  applyToJob: (jobId: string, userId: string, resumeUrl: string) => Promise<void>;
  getRecommendedJobs: (userId: string) => Promise<void>;
}

export const useJobStore = create<JobState>((set, get) => ({
  jobs: [],
  loading: false,
  fetchJobs: async () => {
    set({ loading: true });
    const { data, error } = await supabase
      .from('jobs')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    set({ jobs: data, loading: false });
  },
  searchJobs: async (query) => {
    set({ loading: true });
    const { data, error } = await supabase
      .from('jobs')
      .select('*')
      .textSearch('title', query);
    
    if (error) throw error;
    set({ jobs: data, loading: false });
  },
  applyToJob: async (jobId, userId, resumeUrl) => {
    const { error } = await supabase
      .from('applications')
      .insert([{ job_id: jobId, user_id: userId, resume_url: resumeUrl }]);
    
    if (error) throw error;
  },
  getRecommendedJobs: async (userId) => {
    // AI-based job matching using TensorFlow.js
    const userProfile = await supabase
      .from('profiles')
      .select('*')
      .eq('id', userId)
      .single();

    // Simple skill matching model
    const model = await tf.sequential({
      layers: [
        tf.layers.dense({ units: 64, activation: 'relu', inputShape: [10] }),
        tf.layers.dense({ units: 32, activation: 'relu' }),
        tf.layers.dense({ units: 16, activation: 'softmax' })
      ]
    });

    // Implementation details would go here
    // This is a placeholder for the actual AI matching logic
  },
}));