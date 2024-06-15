'use client'
import React from 'react';
import Image from 'next/image';



const features = [
    {
      name: 'WHITE BREAD',
      description: 'A classic staple in baking, white bread is a light, fluffy loaf made primarily from wheat flour. Renowned for its soft texture and mild flavor, it serves as a versatile foundation for sandwiches, toast, and countless other culinary creations.',
      imageSrc: '/ghgh.jpg',
      imageAlt: '',
    },
    {
      name: 'FARMING BREAD',
      description: 'Crafted with care and tradition, farming bread embodies the rustic essence of homemade baking. Rich in wholesome ingredients and baked to perfection, it offers a hearty flavor and satisfying texture reminiscent of simpler times and the nourishing warmth of the countryside.',
      imageSrc: '/rre.jpg',
      imageAlt: '',
    },
    {
      name: 'LOAF BREAD',
      description: 'An iconic symbol of comfort and convenience, loaf bread is a versatile staple cherished for its soft texture and mild flavor. Whether toasted for breakfast or used as the foundation for sandwiches, its uniform slices make it a timeless favorite for daily enjoyment.',
      imageSrc: '/trrt.jpg',
      imageAlt: '',
    },
    {
      name: 'SOURDOUGH',
      description: 'A beloved artisanal creation, sourdough bread is renowned for its tangy flavor and chewy texture, derived from a naturally leavened fermentation process. Each loaf is offering a delightful balance of acidity and depth that pairs perfectly with a variety of spreads and accompaniments.',
      imageSrc: '/88-min.jpg',
      imageAlt: '',
    },
  ]
  
  export default function Example2() {
    return (
      <div className="bg-cover bg-[url('/block2.jpg')] text-white">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-5xl font-bold mb-8">Our Breads</h2>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate__animated animate__zoomIn" style={{ animationDuration: '2s' }}>
            {features.map((feature) => (
              <div key={feature.name} className="bg-white text-black p-6 flex flex-col items-center">
                <div className="aspect-w-1 aspect-h-1 w-full h-48 overflow-hidden rounded-lg">
                <Image
                    src={feature.imageSrc}
                    alt={feature.imageAlt}
                    layout="fill"
                    objectFit="cover"
                    loading="lazy"
                  />
                </div>
                <h4 className="text-xl font-semibold mb-2 mt-4">{feature.name}</h4>
                <p className="mb-4">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  