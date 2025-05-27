import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const BACKEND_URI = import.meta.env.BACKEND_URI || "http://localhost:5041";
const BACKEND_API_VERSION = import.meta.env.BACKEND_API_VERSION || "/api/v1";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${BACKEND_URI}${BACKEND_API_VERSION}/auth/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        // Example: Save token & redirect
        localStorage.setItem("token", data.token);
        navigate("/dashboard");
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-main/10 via-accent-main/40 to-background-main px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 rounded-full bg-primary-main flex items-center justify-center mb-3 shadow-md">
            <span className="text-white text-3xl font-extrabold tracking-wide">
              M
            </span>
          </div>
          <h2 className="text-3xl font-extrabold text-primary-main mb-1">
            Sign in to MessMate
          </h2>
          <p className="text-gray-500 text-base">
            Welcome back! Please login to your account.
          </p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              className="block text-sm font-medium text-text-main mb-1"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="form-input bg-background-main border border-gray-300 focus:border-primary-main focus:ring-1 focus:ring-primary-main placeholder-gray-400 text-base py-3"
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium text-text-main mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="form-input bg-background-main border border-gray-300 focus:border-primary-main focus:ring-1 focus:ring-primary-main placeholder-gray-400 text-base py-3"
              type="password"
              id="password"
              name="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember"
                name="remember"
                type="checkbox"
                className="h-4 w-4 text-primary-main focus:ring-primary-main border-gray-300 rounded"
              />
              <label
                htmlFor="remember"
                className="ml-2 block text-sm text-gray-600"
              >
                Remember me
              </label>
            </div>
            <Link
              to="/auth/forgot-password"
              className="text-sm text-primary-main hover:underline font-medium"
            >
              Forgot password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-primary-main text-white text-lg font-semibold rounded-lg shadow hover:bg-primary-main/90 focus:outline-none focus:ring-2 focus:ring-primary-main focus:ring-offset-2 transition-none"
          >
            Sign In
          </button>
        </form>
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-200" />
          <span className="mx-4 text-gray-400 text-sm">or</span>
          <div className="flex-grow border-t border-gray-200" />
        </div>
        <p className="text-center text-base text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/auth/register"
            className="text-primary-main font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
