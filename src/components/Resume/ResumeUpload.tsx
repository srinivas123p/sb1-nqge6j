import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { supabase } from '../../lib/supabase';
import { v4 as uuidv4 } from 'uuid';

export default function ResumeUpload() {
  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    const fileExt = file.name.split('.').pop();
    const fileName = `${uuidv4()}.${fileExt}`;
    const filePath = `resumes/${fileName}`;

    try {
      const { error } = await supabase.storage
        .from('resumes')
        .upload(filePath, file);

      if (error) throw error;
      
      // Update user profile with resume URL
      const { data: { publicUrl } } = supabase.storage
        .from('resumes')
        .getPublicUrl(filePath);

      // Save URL to user profile
      // Implementation details would go here
    } catch (error) {
      console.error('Error uploading resume:', error);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
    },
    maxFiles: 1
  });

  return (
    <div
      {...getRootProps()}
      className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer"
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop your resume here...</p>
      ) : (
        <p>Drag and drop your resume here, or click to select file</p>
      )}
    </div>
  );
}