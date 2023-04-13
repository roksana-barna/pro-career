import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">404</h1>
          <p className="text-xl font-medium mt-4">Page not found</p>
        </div>
        <div className="mt-8">
          <a
            href="/"
            className="text-lg font-medium text-indigo-600 hover:text-indigo-500"
          >
            ← Go back home
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
