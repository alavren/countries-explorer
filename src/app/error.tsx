'use client';

import * as React from 'react';


export default function Error() {

  return (
    <main>
      <section className='bg-white'>
        <div className='layout flex min-h-screen flex-col items-center justify-center text-center text-black'>
          <h1 className='mt-8 text-4xl md:text-6xl'>
            Oops, something went wrong!
          </h1>
          <a href='/'>Back to home</a>
        </div>
      </section>
    </main>
  );
}
