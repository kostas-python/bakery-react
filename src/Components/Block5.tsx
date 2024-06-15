'use client'

import React from 'react';
import LazyLoad from 'react-lazyload';


const ImageSection = () => {
  return (
    <section className="relative bg-cover bg-center bg-[url('/hhh.jpg')]">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-6xl  text-center mt-8">"​Our freshly baked bread is the hero of our breakfast menu"</h2>
        <LazyLoad>
        <img src="/g-min.jpg" alt="" className="w-full h-auto mt-8 object-contain"/>
        </LazyLoad>
      </div>
    </section>
  );
};

export default ImageSection;
