import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { logo , Hum} from '../assets';


const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  return (
    <nav className={`bg-blue-900 text-white w-full flex items-center fixed`}>
      <div className="w-full mx-auto px-4 py-3  flex justify-between items-center">

      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="h-6 w-6 object-contain" />
        <span className="text-lg font-semibold">whitepace</span>
      </div>


      <div className="hidden md:flex flex-row gap-10">
        <div className="relative group">
          <button className="hover:underline">Products</button>
       
        </div>
        <div className="relative group">
          <button className="hover:underline">Solutions</button>
        </div>
        <div className="relative group">
          <button className="hover:underline">Resources</button>
        </div>
        <div className="relative group">
          <button className="hover:underline">Pricing</button>
        </div>
      </div>

      <div className="list-none hidden sm:flex items-center space-x-4">
        <button className="bg-yellow-400 text-blue-900 py-2 px-4 rounded-lg hover:bg-yellow-500">
          Login
        </button>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
          Try Whitepace free
        </button>
      </div>
      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img
            src={toggle ? close : Hum}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            {/* <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul> */}
          </div>
        </div>
    </div>
    </nav>
  )
}

export default Navbar