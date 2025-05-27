import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-background-main">
    <h1 className="text-4xl font-bold text-primary-main mb-4">404</h1>
    <p className="text-lg text-text-main mb-6">Page Not Found</p>
    <Link to="/" className="btn btn-primary">Go Home</Link>
  </div>
);

export default NotFound; 