'use client'
import React from 'react';
import LazyLoad from 'react-lazyload';
import '/src/app/globals.css'


  
export default function Example3() {
  return (
    <section
      className="h-[800px] bg-no-repeat bg-cover bg-[url('/hhh.jpg')]"
    >
      <div className="container mx-auto h-full flex items-center">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full">
          <div
            className="lg:w-1/2 lg:pr-8"
            style={{ animation: "fadeInLeft 5s ease forwards" }}
          >
            <div className="text-center mt-20 lg:text-left">
              <h2 className="text-5xl font-bold mb-6 text-black">
                Ingredients &amp; Method
              </h2>
              <p className="mb-6 text-black">
                Flour, water, sea salt, and leavening: four simple ingredients
                that—when mixed, shaped, fermented, and baked—make one of the most
                basic foods that has nourished humans for thousands of years. Since
                such few ingredients are involved, two things set great bread apart:
                quality ingredients and time.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <div className="hidden lg:block">
              <img src="/min16.jpg" alt="Bread" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



  