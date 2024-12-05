import React from "react";
import { logo } from "../assets";

const Contact = () => {
  return (
    <footer className="bg-blue-900 text-white py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
        <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="h-6 w-6 object-contain" />
          <h2 className="text-lg font-bold">whitepace</h2>
        </div>
          <p className="mt-2">
            whitepace was created for the new ways we live and work. We make a
            better workspace around the world.
          </p>
        </div>

        {/* Product Section */}
        <div>
          <h3 className="text-sm font-bold mb-2">Product</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Overview</a></li>
            <li><a href="#" className="hover:underline">Pricing</a></li>
            <li><a href="#" className="hover:underline">Customer stories</a></li>
          </ul>
        </div>

        {/* Resources Section */}
        <div>
          <h3 className="text-sm font-bold mb-2">Resources</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Guides & tutorials</a></li>
            <li><a href="#" className="hover:underline">Help center</a></li>
          </ul>
        </div>

        {/* Company Section */}
        <div>
          <h3 className="text-sm font-bold mb-2">Company</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">About us</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Media kit</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-8 border-t border-blue-800 pt-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex flex-wrap space-x-4 mb-4 md:mb-0">
            <a href="#" className="hover:underline">English</a>
            <a href="#" className="hover:underline">Terms & privacy</a>
            <a href="#" className="hover:underline">Security</a>
            <a href="#" className="hover:underline">Status</a>
          </div>
          <p>©2021 Whitepace LLC.</p>
        </div>

        <div className="flex justify-center md:justify-end space-x-4 mt-4">
          <a href="#" className="hover:text-blue-300">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="hover:text-blue-300">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-blue-300">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Contact;