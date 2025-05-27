import React from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-main/10 via-accent-main/40 to-background-main px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 rounded-full bg-primary-main flex items-center justify-center mb-3 shadow-md">
            <span className="text-white text-3xl font-extrabold tracking-wide">MM</span>
          </div>
          <h2 className="text-3xl font-extrabold text-primary-main mb-1">Forgot Password?</h2>
          <p className="text-gray-500 text-base text-center">Enter your email and we'll send you a reset link.</p>
        </div>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-text-main mb-1" htmlFor="email">Email</label>
            <input className="form-input bg-background-main border border-gray-300 focus:border-primary-main focus:ring-1 focus:ring-primary-main placeholder-gray-400 text-base py-3" type="email" id="email" name="email" placeholder="you@example.com" required />
          </div>
          <button type="submit" className="w-full py-3 px-4 bg-primary-main text-white text-lg font-semibold rounded-lg shadow hover:bg-primary-main/90 focus:outline-none focus:ring-2 focus:ring-primary-main focus:ring-offset-2 transition-none">
            Send Reset Link
          </button>
        </form>
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-200" />
          <span className="mx-4 text-gray-400 text-sm">or</span>
          <div className="flex-grow border-t border-gray-200" />
        </div>
        <p className="text-center text-base text-gray-600">
          Remembered your password?{' '}
          <Link to="/auth/login" className="text-primary-main font-semibold hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword; 