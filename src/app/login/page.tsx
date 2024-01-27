import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <main className="container mx-auto py-10">
      <div className="flex items-center justify-center text-center">
        <form className="flex flex-col w-full max-w-lg p-12 rounded shadow-lg">
          <label
            htmlFor="username"
            className="self-start text-xs font-semibold"
          >
            Username or Email
          </label>
          <input
            id="username"
            type="text"
            className="flex bg-gray-100 items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ri "
          />
          <label
            htmlFor="password"
            className="self-start mt-3 text-xs font-semibold"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            className="flex bg-gray-100 items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ri "
          />

          <button className="relative my-10 rounded px-5 py-2.5 overflow-hidden group bg-indigo-500 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-indigo-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-indigo-400 transition-all ease-out duration-300">
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
            <span className="relative">Login</span>
          </button>

          <div className="flex justify-center mt-6 space-x-2 text-xs">
            <Link rel="noopener noreferrer" href="/">
              Forgot Password?
            </Link>
            <span className="">/</span>
            <Link rel="noopener noreferrer" href="/signup">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default page;
