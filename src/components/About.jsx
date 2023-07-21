import React from "react";
import { useTheme } from "../components/ThemeContext";

const About = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      name="about"
      className={`w-full h-screen ${
        isDarkMode
          ? "bg-gradient-to-b from-gray-800 to-black text-white"
          : "bg-gradient-to-b from-yellow-500 to-green-500 text-green-900"
      }`}
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className={`text-4xl font-bold inline border-b-4  ${ isDarkMode ? 'border-gray-500' : 'border-green-400'}`}>
            About
          </p>
        </div>

        <p className={`text-xl mt-20 ${isDarkMode ? "text-white" : "text-green-900"}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          laboriosam hic sint sapiente odit iusto similique voluptatibus earum.
          Expedita, quasi, fuga iusto impedit dolorum similique aspernatur
          adipisci quam temporibus deserunt voluptatum quas facere? At officiis
          tempora alias atque nostrum vero nam accusamus qui! Dolores natus
          soluta accusantium totam, beatae maiores?
        </p>

        <br />

        <p className={`text-xl mb-16 ${isDarkMode ? "text-white" : "text-green-900"}`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
          laborum, recusandae similique culpa vero quod aperiam voluptate sed,
          voluptatem accusantium explicabo velit quos eum mollitia sequi
          pariatur eaque corporis tempora libero. Quo corrupti recusandae
          provident culpa consequuntur ab, voluptatibus mollitia id. Labore quam
          eum adipisci repellat dolorum voluptate accusantium nulla inventore.
          Molestias velit voluptatibus quasi nostrum, aperiam cupiditate hic
          facilis.
        </p>
      </div>
    </div>
  );
};

export default About;
