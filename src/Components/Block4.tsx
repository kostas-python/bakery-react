import React from 'react';



const BreadSection = () => {
  return (
    <section className="relative bg-cover bg-center bg-gray-900 bg-opacity-60 bg-[url('/tt-min.jpg')]">
         <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-white">
        <h2 className="text-4xl font-bold text-center mb-12">Our Bread</h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Glassic Baguette */}
          <div className="bg-black bg-opacity-50 p-6 rounded-2xl text-center w-full max-w-sm mx-auto">
            <h5 className="text-xl font-semibold uppercase mb-4">Glassic Baguette</h5>
            <p className="italic">Unbleached organic wheat flour, whole rye flour, water, sea salt, yeast</p>
          </div>
          {/* Baguette */}
          <div className="bg-black bg-opacity-50 p-6 rounded-2xl text-center w-full max-w-sm mx-auto">
            <h5 className="text-xl font-semibold uppercase mb-4">Baguette</h5>
            <p className="italic">Naturally leavened baguette made using the Five Points Levain dough. This baguette is crustier and chewier than the Classic Baguette</p>
          </div>
          {/* Pekan Raisin */}
          <div className="bg-black bg-opacity-50 p-6 rounded-2xl text-center w-full max-w-sm mx-auto">
            <h5 className="text-xl font-semibold uppercase mb-4">Pekan Raisin</h5>
            <p className="italic">Naturally leavened bread made using the French Country dough with the additions of local Georgia pecans and Thompson raisins</p>
          </div>
          {/* Everyday French */}
          <div className="bg-black bg-opacity-50 p-6 rounded-2xl text-center w-full max-w-sm mx-auto">
            <h5 className="text-xl font-semibold uppercase mb-4">Everyday French</h5>
            <p className="italic">Everyday table loaf made using the Classic Baguette dough</p>
          </div>
          {/* Multigrain */}
          <div className="bg-black bg-opacity-50 p-6 rounded-2xl text-center w-full max-w-sm mx-auto">
            <h5 className="text-xl font-semibold uppercase mb-4">Multigrain</h5>
            <p className="italic">Naturally leavened bread made using the French Country dough with the additions of millet, quinoa, rolled oats, flax seeds, and sunflower seeds</p>
          </div>
          {/* Danish Rye */}
          <div className="bg-black bg-opacity-50 p-6 rounded-2xl text-center w-full max-w-sm mx-auto">
            <h5 className="text-xl font-semibold uppercase mb-4">Danish Rye</h5>
            <p className="italic">Whole rye flour, cracked rye berries, water, natural leaven culture made with rye flour, pumpkin seeds, sunflower seeds, barley malt syrup, sea salt</p>
          </div>
          {/* Levain */}
          <div className="bg-black bg-opacity-50 p-6 rounded-2xl text-center w-full max-w-sm mx-auto">
            <h5 className="text-xl font-semibold uppercase mb-4">Levain</h5>
            <p className="italic">Unbleached organic wheat flour, whole rye flour, water, natural leaven culture, sea salt</p>
          </div>
          {/* Ciabatta */}
          <div className="bg-black bg-opacity-50 p-6 rounded-2xl text-center w-full max-w-sm mx-auto">
            <h5 className="text-xl font-semibold uppercase mb-4">Ciabatta</h5>
            <p className="italic">Unbleached organic wheat flour, whole rye flour, water, natural leaven culture, sea salt, yeast</p>
          </div>
          {/* Handmade Bread */}
          <div className="bg-black bg-opacity-50 p-6 rounded-2xl text-center w-full max-w-sm mx-auto">
            <h5 className="text-xl font-semibold uppercase mb-4">Handmade Bread</h5>
            <p className="italic">Naturally leavened bread made using the Sourdough Rye dough and studded with dried black currants</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadSection;


