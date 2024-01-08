"use client";

import { useQuery } from '@apollo/client';
import React, { useState } from 'react';

import { COUNTRIES_QUERY } from "@/utils/queries";

import { client } from "../../lib/ApolloClient";


const Dashboard: React.FC = () => {
  const {data, loading, error} = useQuery(COUNTRIES_QUERY, {client});
  const [selectedCountry, setSelectedCountry] = useState<any>(null);

  const onSelectCountry = (country: any) => {
    return () => setSelectedCountry(country);
  };

  const onClearCountry = () => {
    setSelectedCountry(null);
  };

  return (
    <main>
      <h1 className="text-5xl mb-5 text-center">Explore Countries</h1>
      {loading && <h4 className="text-3xl text-center">Loading countries...</h4>}
      {error && <h4 className="text-3xl text-center">Error while loading countries</h4>}

      {data &&
        <div className='flex w-[1000px]'>
          <div className="w-[400px] rounded-xl border border-gray-200 bg-white mr-3 py-4 px-2 shadow-md shadow-gray-100">
            <div className='flex max-h-[500px] w-full flex-col overflow-y-scroll'>
              {data.countries.map((country: any) => (
                <button
                  key={country.code}
                  onClick={onSelectCountry(country)}
                  className="group flex items-center gap-x-5 rounded-md px-2.5 py-2 transition-all duration-75 hover:bg-green-100"
                >
                  <div className="flex h-12 w-12 items-center rounded-lg bg-gray-200 text-black group-hover:bg-green-200">
                    <span className="tag w-full text-center text-2xl font-medium text-gray-700 group-hover:text-green-900">
                      {country.emoji}
                    </span>
                  </div>
                  <div className="flex font-light text-gray-600">
                    <p className="text-[15px]">{country.name}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
          {selectedCountry && (
            <div className='w-[550px] rounded-xl border border-gray-200 bg-white py-4 px-2 shadow-md shadow-gray-100'>
              <div className="flex items-center justify-between px-2 text-base font-medium text-gray-700">
                <div>
                  <span className="mr-2 text-[30px]">{selectedCountry.emoji}</span>
                  <span className="text-[30px] font-light text-gray-600">{selectedCountry.name}</span>
                </div>
                <div>
                  <button
                    onClick={onClearCountry}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-black"
                  >
                    <svg className="h-5 w-5" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </button>
                </div>
              </div>

              <div className="my-4">
                <div className="font-medium mb-2">Language:</div>
                <div className="text-gray-600">
                  <span>{selectedCountry.languages
                    .map((lang: any) => lang.name).join(', ')}
                  </span>
                </div>
              </div>

              <div className="my-4">
                <div className="font-medium mb-2">Continent:</div>
                <div className="text-gray-600">
                  {selectedCountry.continent.name}
                </div>
              </div>

              <div className="my-4">
                <div className="font-medium mb-2">Phone Code:</div>
                <div className="text-gray-600">
                  {selectedCountry.phone}
                </div>
              </div>

              <div className="my-4">
                <div className="font-medium mb-2">Native Name:</div>
                <div className="text-gray-600">
                  {selectedCountry.native}
                </div>
              </div>
            </div>
          )}
        </div>
      }
    </main>
  );
};

export default Dashboard;
