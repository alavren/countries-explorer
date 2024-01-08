"use client";

import Link from 'next/link';
import React from 'react';
import { signOut, useSession } from "next-auth/react";

const Nav: React.FC = () => {
  const { data: session }: any = useSession();

  console.log(session)
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-xl font-bold">
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
