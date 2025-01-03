import React from 'react'

export default function Feature() {
  return (
    <div>
      <section className='py-8 bg-neutral-100 mb-40'>
        <h2 className='text-center text-3xl font-bold md:text-5xl lg:text-left animate-fade-in-up transition-all duration-500 ease-in-out transform hover:translate-y-[-5px] hover:text-black text-red-500'>
          Anshara Shamim : Passionate health and wellness writer focused on promoting healthier living.
        </h2>

        <p className='text-center m-4 mt-4 text-sm text-black sm:text-base md-12 lg:mb-16 animate-fade-in-up delay-100'>
        Anshara Shamim is a dedicated health and wellness writer with a passion 
        for empowering readers to lead healthier lives. She combines evidence-
        based research and practical advice to offer insightful articles on 
        topics ranging from nutrition and fitness to mental well-being. Her 
        goal is to provide valuable knowledge that helps individuals make 
        informed decisions and improve their overall health. Through her 
        writing, she aims to inspire a balanced lifestyle, encouraging readers
        to prioritize self-care and wellness in their daily routines.
        </p>

        <div className='mx-auto max-w-7xl px-5'>
          <h1 className='text-3xl font-bold text-center my-8 text-red-600 animate-colorchange'> Explore our Categories</h1>

  <div className='grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 animate-fade-in-up delay-100'>
  {[
    "Hydration",
    "Boost Immunity",
    "Balanced Workout",
    "Healthy Breakfast",
    "Manage Stress",
    "improve Sleep"
  ].map((category, index) => (
    <div key={index}
    className='relative group p-6 bg-white rounded-lg shadow-lg hover:bg-sky-300 hover:text-black transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex items-center justify-center text-nuetral-600'>
      <p className='text-center text-lg font-semibold'>{category}</p>
      <div className='absolte insert-0 border-2 border-transparent group-hover:border-white rounded-lg transition duration-300 ease-in-out'></div>
    </div>
  ))}
  </div>          
        </div>
      </section>
    </div>
  );
}
