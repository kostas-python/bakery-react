'use client'

import React from 'react';
import LazyLoad from 'react-lazyload';

const features = [
    {
      name: 'Durable',
      description: 'The leather cover and machined steel disc binding stand up to daily use for years to come.',
    },
    {
      name: 'Refillable',
      description: 'Buy it once and refill as often as you need. Subscribe and save on routine refills.',
    },
    {
      name: 'Thoughtfully designed',
      description:
        'The comfortable disc binding allows you to quickly rearrange pages or combine lined, graph, and blank refills.',
    },
    { name: 'Locally made', description: 'Responsibly and sustainably made real close to wherever you are, somehow.' },
  ]
  
  export default function Example() {
    return (
      <div className="bg-cover bg-[url('/hhh.jpg')]">
        <section aria-labelledby="features-heading" className="relative">
          <div className="aspect-h-2 aspect-w-3 overflow-hidden sm:aspect-w-5 lg:aspect-none lg:absolute lg:h-full lg:w-1/2 lg:pr-4 xl:pr-16">
          <LazyLoad>
            <img
              src='/block1.jpg'
              alt="Black leather journal with silver steel disc binding resting on wooden shelf with machined steel pen."
              className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
         </LazyLoad>
          </div>
  
          <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 sm:pb-32 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:pt-32">
            <div className="lg:col-start-2">
            <img src='/333.png' alt="" className="ml-56 w-28 h-50 mb-4"/>

              <p className="mt-4 text-center text-5xl font-bold tracking-tight text-gray-900">Fresh breads handcrafted daily</p>
              <p className="mt-4 text-center text-lg font-semibold text-gray-500">
              Experience the aroma and taste of our freshly baked breads, made with the finest ingredients and traditional techniques. 
              Each loaf is carefully crafted to ensure the highest quality and flavour, bringing the warmth of homemade bread to your table every day.
              </p>
            </div>
          </div>
        </section>
      </div>
    )
  }
  