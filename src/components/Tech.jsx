import React from "react";
import {
  android,
  apple,
  windows
} from "../assets"

const Tech = () => {
  return (
    <div className="bg-blue-900 text-white text-center py-16 px-4">

      <h1 className="text-4xl font-bold mb-4">Try Whitepace today</h1>


      <p className="text-lg mb-6">
        Get started for free. <br />
        Add your whole team as your needs grow.
      </p>


      <button className="bg-blue-500 hover:bg-blue-600 text-white text-lg font-medium py-3 px-8 rounded-lg mb-6">
        Try Taskey free →
      </button>


      <p className="text-sm mb-4">On a big team? Contact sales</p>


      <div className="flex justify-center items-center space-x-8 mt-4">
        <img
        src={apple}
          alt="Apple"
          className="h-10 w-auto"
        />
        <img
          src={windows}
          alt="Windows"
          className="h-10 w-auto"
        />
        <img
          src={android}
          alt="Android"
          className="h-10 w-auto"
        />
      </div>
    </div>
  );
};

export default Tech;