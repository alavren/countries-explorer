import Link from 'next/link';
import React from 'react';

const Nav: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-xl font-bold">
          Countries Explorer
        </Link>
        <div className="space-x-4">
          <Link href="/login" className="text-white">
            Login
          </Link>
          <Link href="/register" className="text-white">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
