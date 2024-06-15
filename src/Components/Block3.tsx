'use client'
import React from 'react';
import LazyLoad from 'react-lazyload';



export default function Example() {
  return (
    <>
       <div className="grid h-[800px] bg-[url('/hhh.jpg')] min-h-full grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1">
        <div
          className="lg:w-2/2 lg:pr-8 mt-36 flex flex-col text-center ml-96"
          style={{ animation: "fadeInLeft 5s ease forwards" }}
        >
          <h2 className="text-5xl font-bold text-black mb-8">
            Ingredients &amp; Method
          </h2>
          <p className="text-lg text-black">
            Flour, water, sea salt, and leavening: four simple ingredients
            that—when mixed, shaped, fermented, and baked—make one of the most
            basic foods that has nourished humans for thousands of years. Since
            such few ingredients are involved, two things set great bread apart:
            quality ingredients and time.
          </p>
        </div>
        <div className="relative flex justify-end">
          <LazyLoad>
          <img
            src="/min16.jpg"
            alt=""
            className="relative inset-0 h-full object-cover object-center"
          />
          </LazyLoad>
        </div>
      </div>
    </>
  );
}

