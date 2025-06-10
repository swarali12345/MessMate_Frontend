import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// const BACKEND_URI = import.meta.env.BACKEND_URI || "http://localhost:5041";
const BACKEND_URI = import.meta.env.BACKEND_URI || "https://messmate-backend.onrender.com";
const BACKEND_API_VERSION = import.meta.env.BACKEND_API_VERSION || "/api/v1";


const Register: React.FC = () => {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    try {
      const response = await fetch(`${BACKEND_URI}${BACKEND_API_VERSION}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        navigate("/auth/login");
      } else {
        alert(data.message || "Register failed");
      }

    } catch (error) {
      console.error("Register error:", error);
      alert("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-main/10 via-accent-main/40 to-background-main px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 rounded-full bg-primary-main flex items-center justify-center mb-3 shadow-md">
            <span className="text-white text-3xl font-extrabold tracking-wide">M</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-primary-main mb-1 whitespace-nowrap">Create your account</h2>
          <p className="text-gray-500 text-sm sm:text-base">Sign up to get started with MessMate.</p>
        </div>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-text-main mb-1" htmlFor="name">Name</label>
            <input 
              className="w-full px-4 py-3 bg-background-main border border-gray-300 rounded-lg focus:border-primary-main focus:ring-2 focus:ring-primary-main/20 focus:outline-none transition-colors text-base" 
              type="text" 
              id="name" 
              name="name" 
              placeholder="Enter your full name"
              required 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-main mb-1" htmlFor="email">Email</label>
            <input 
              className="w-full px-4 py-3 bg-background-main border border-gray-300 rounded-lg focus:border-primary-main focus:ring-2 focus:ring-primary-main/20 focus:outline-none transition-colors text-base" 
              type="email" 
              id="email" 
              name="email" 
              placeholder="Enter your email"
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-main mb-1" htmlFor="password">Password</label>
            <input 
              className="w-full px-4 py-3 bg-background-main border border-gray-300 rounded-lg focus:border-primary-main focus:ring-2 focus:ring-primary-main/20 focus:outline-none transition-colors text-base" 
              type="password" 
              id="password" 
              name="password" 
              placeholder="Create a password"
              required 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="w-full py-3 px-4 bg-primary-main text-white text-lg font-semibold rounded-lg shadow hover:bg-primary-main/90 focus:outline-none focus:ring-2 focus:ring-primary-main focus:ring-offset-2 transition-none" onClick={handleRegister}>
            Register
          </button>
        </form>
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-200" />
          <span className="mx-4 text-gray-400 text-sm">or</span>
          <div className="flex-grow border-t border-gray-200" />
        </div>
        <p className="text-center text-base text-gray-600">
          Already have an account?{' '}
          <Link to="/auth/login" className="text-primary-main font-semibold hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register; 