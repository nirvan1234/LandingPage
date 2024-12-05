import React from 'react'
import {heroimage} from '../assets'

const Hero = () => {
  return (
    <div className="bg-blue-900 text-white">
    <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-4xl font-bold mb-4">
          Get More Done with <span className="text-blue-300">whitepace</span>
        </h1>
        <p className="text-lg mb-6">
          Project management software that enables your teams to collaborate, plan, analyze, and manage everyday tasks.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg">
          Try Whitepace free →
        </button>
      </div>

      <div className="md:w-1/2">
        <img
          src={heroimage}
          alt="Hero"
          className="w-full md:relative md:translate-y-0 transform translate-y-4 md:transform-none transition-transform duration-500"
        />
      </div>
    </div>
  </div>
  )
}

export default Hero