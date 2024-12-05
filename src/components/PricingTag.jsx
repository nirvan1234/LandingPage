import React from 'react'
import {yellowStrick} from '../assets'

const PricingTag = () => {
  return (
    <div className="text-center py-12 px-4">
      <h2 className="relative text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
        Choose{" "}
        <span className="relative inline-block">
          <span className="absolute -bottom-1 left-0 w-full h-2">
            <img
              src={yellowStrick}
              alt="Underline"
              className="w-full h-full"
            />
          </span>
          <span className="relative">Your{" "}</span>
          <span className="relative">Plan</span>
        </span>
      </h2>

      <p className="mt-4 text-gray-600 text-sm md:text-base lg:text-lg">
        Whether you want to get organized, keep your personal life on track, or
        boost workplace productivity, Evernote has the right plan for you.
      </p>
    </div>
  )
}

export default PricingTag;