import React from 'react';

const Register = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Register</h2>
        <form>
          <div className="grid gap-4 grid-cols-2">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="w-full border px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium mb-1">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="w-full border px-3 py-2 rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              E-mail
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
              Password
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
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
