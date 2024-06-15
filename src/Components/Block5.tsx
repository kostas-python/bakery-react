'use client'

import React from 'react';
import Image from 'next/image';



const ImageSection = () => {
  return (
    <section className="relative bg-cover bg-center" style={{ backgroundImage: "url('/hhh.jpg')" }}>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center text-black">
        <h2 className="text-6xl mt-8">"Our freshly baked bread is the hero of our breakfast menu!"</h2>
        <div className="relative w-full h-[800px] mt-8">
          <Image
            src="/g-min.jpg"
            alt=""
            layout="fill"
            objectFit="contain"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default ImageSection;

