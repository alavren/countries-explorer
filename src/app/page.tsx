import Head from 'next/head';
import Image from 'next/image';
import * as React from 'react';


export default function HomePage() {
  return (
    <main>
      <Head>
        <title>Countries Explorer</title>
      </Head>
      <section className='bg-white'>
        <div className='layout relative flex min-h-screen flex-col py-12 text-center'>
          <h1 className='mt-4 text-4xl'>Explore Countries</h1>
          <div className='w-10/12 h-3/6 flex flex-row justify-center items-center mx-auto'>
            <Image
              className='mt-5 w-3/12'
              src='/images/landing-img.png'
              objectFit='contain'
              alt='globe'
              width='400'
              height='400'
            />
          </div>
          <div className='w-8/12 mx-auto'>
            <p className='text-gray-800 mt-5 text-center'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>

            <p className='text-gray-800 mt-5 text-center'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
