import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuthStore } from '../../store/authStore';

interface LoginFormData {
  email: string;
  password: string;
}

export default function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>();
  const signIn = useAuthStore((state) => state.signIn);

  const onSubmit = async (data: LoginFormData) => {
    try {
      await signIn(data.email, data.password);
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          {...register('email', { required: true })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
        {errors.email && <span className="text-red-500">Email is required</span>}
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          {...register('password', { required: true })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
        />
        {errors.password && <span className="text-red-500">Password is required</span>}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Sign In
      </button>
    </form>
  );
}