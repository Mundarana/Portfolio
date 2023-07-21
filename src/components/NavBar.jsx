import React, { useState} from "react";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { Link } from "react-scroll";
import { useTheme } from "../components/ThemeContext";



const NavBar = () => {
  const [nav, setNav] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme(); 
  
  

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  // funtion to dark/light mode
  const toggleLightMode = () => {
    toggleDarkMode(!isDarkMode);
  };

  return (
    <div className={`flex justify-end w-full h-20 px-4  fixed ${ isDarkMode ? 'text-white bg-black' : 'bg-green-500 text-green-900'}`}>
    <div className={`flex justify-between items-center w-full h-20 px-4 mr-12 fixed ${ isDarkMode ? 'text-white bg-black' : 'bg-green-500 text-green-900'}`}>
      <div>
        <h1 className="text-3xl font-signature ml-10 pl-6">MohammadRana</h1>
      </div>


      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className={`px-4 cursor-pointer capitalize font-medium  ${ isDarkMode ? 'text-gray-500' : 'text-green-700'} hover:scale-105 duration-200`}
          >
            <Link to={link} smooth duration={500}>
                {link}
              </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className={`cursor-pointer pr-4 z-10  ${ isDarkMode ? 'text-gray-500' : 'text-green-700'} md:hidden`}
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      

      {nav && (
        <ul className={`flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen  ${ isDarkMode ? 'bg-gradient-to-b from-black to-gray-800 text-gray-500' : 'bg-gradient-to-b from-green-500 to-yellow-500 text-green-900'}`}>
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>

    <button
        className={`cursor-pointer pr-4 z-10  ${ isDarkMode ? 'text-gray-500' : 'text-green-700'} `}
        onClick={toggleLightMode}
      >
        {isDarkMode ? <FaSun size={30} /> : <FaMoon size={30} />}
      </button>
    </div>
  );
};

export default NavBar;
