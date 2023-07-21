import React from "react";
import { useTheme } from "../components/ThemeContext";

// import the Img of my Projects
import SmileBooking from "../assets/Projects/SmileBooking.png"
import my from "../assets/01.jpg";
import css from "../assets/css.png";
import github from "../assets/github.png";
import html from "../assets/html.png";
import node from "../assets/node.png";
import react from "../assets/react.png";

const Portfolio = () => {

  const { isDarkMode } = useTheme();

  const portfolios = [
    {
      id: 1,
      src: SmileBooking,
      demo: 'https://smilebooking.netlify.app/',
      code: 'https://github.com/Mundarana/Booking_App-Frontend',
    },
    {
      id: 2,
      src: css,
    },
    {
      id: 3,
      src: github,
    },
    {
      id: 4,
      src: html,
    },
    {
      id: 5,
      src: node,
    },
    {
      id: 6,
      src: react,
    },
    {
      id:7,
      src: my,
    }
  ];
  return (
    <div
      name="portfolio"
      className={`w-full  ${ isDarkMode ? 'bg-gradient-to-b from-black to-gray-800 text-white' : 'bg-gradient-to-b from-green-500 to-yellow-500 text-green-900'} md:h-screen`}
    >
      <div className="p-4 max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className={`text-4xl font-bold inline border-b-4  ${ isDarkMode ? 'border-gray-500' : 'border-green-400'}`}>
            Portfolio
          </p>
          <p className="py-6">Check Out Some Of My Works right Here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 mb-10">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
