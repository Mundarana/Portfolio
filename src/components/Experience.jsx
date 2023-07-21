import React from "react";
import { useTheme } from "../components/ThemeContext";

// import your exp.code
import Css from "../assets/css.png";
import Github from "../assets/github.png";
import Html from "../assets/html.png";
import Node from "../assets/node.png";
import react from "../assets/react.png";
import JavaScript from "../assets/javascript.png";
import Tailwind from "../assets/tailwind.png";
import MERN from "../assets/MERN-logo.png";
import SQL from "../assets/pngwing.png";
import MongoDB from "../assets/mongoDB.1.png";

const Experience = () => {
  const { isDarkMode } = useTheme();

  const techs = [
    {
      id: 1,
      src: Html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: Css,
      title: "CSS",
      style: "shadow-blue-600",
    },
    {
      id: 3,
      src: react,
      title: "React",
      style: "shadow-blue-500",
    },

    {
      id: 4,
      src: Github,
      title: "Github",
      style: "shadow-gray-400",
    },

    {
      id: 5,
      src: Tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: MongoDB,
      title: "MongoBD ",
      style: "shadow-green-700 ",
    },
    {
      id: 7,
      src: JavaScript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 8,
      src: SQL,
      title: "SQL Database",
      style: "shadow-sky-300 ",
    },
    {
      id: 9,
      src: MERN,
      title: "MERN",
      style: "shadow-blue-500 ",
    },
    {
      id: 10,
      src: Node,
      title: "Node",
      style: "shadow-green-700",
    },
  ];

  return (
    <div
      name="experience"
      className={`w-full h-screen  ${
        isDarkMode
          ? "bg-gradient-to-b from-gray-800 to-black"
          : "bg-gradient-to-b from-yellow-500 to-green-500"
      } `}
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p
            className={`text-4xl font-bold inline border-b-4  ${
              isDarkMode
                ? "border-gray-500 text-white"
                : "border-green-400 text-green-900"
            }`}
          >
            Experience
          </p>
          <p className={`py-6 ${isDarkMode ? "text-white" : "text-green-700"}`}>
            These are the technologies I've worked with
          </p>
        </div>

        <div
          className={`w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8  sm:py-0 ${
            isDarkMode ? "text-white" : "text-green-700"
          }`}
        >
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
