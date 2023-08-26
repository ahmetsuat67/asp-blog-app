import React from 'react';

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">LOG IN</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              E-MAIL
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-stone-900 text-white py-2 rounded-md hover:bg-stone-950 transition duration-300"
          >
            LOG IN
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
