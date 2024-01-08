"use client";

import Link from 'next/link';
import { signOut, useSession } from "next-auth/react";
import React from 'react';

const Nav: React.FC = () => {
  const { data: session } = useSession();

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/dashboard" className="text-white text-xl font-bold">
          Countries Explorer
        </Link>
        <div className="space-x-4">
          {!session ? (
            <>
              <Link href="/login" className="text-white">
                Login
              </Link>
              <Link href="/register" className="text-white">
                Register
              </Link>
            </>
          ) : (
            <>
              <span className="text-white">{session?.user?.email}</span>
              <button
                onClick={() => {
                  signOut();
                }}
                className="p-2 px-5 -mt-1 bg-white rounded-full"
              >
                Logout
              </button>
            </>
          )}

        </div>
      </div>
    </nav>
  );
};

export default Nav;
