import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { FaArrowRight } from "react-icons/fa";
import { useTheme } from "../components/ThemeContext";

const Home = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      name="home"
      className={`h-screen w-full pt-20 md:pt-0 ${
        isDarkMode
          ? "bg-gradient-to-b from-black via-black to-gray-800"
          : "bg-gradient-to-t from-yellow-500 to-green-500"
      }`}
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className={`text-4xl sm:text-7xl font-bold ${
            isDarkMode ? "text-white" : "text-green-900"
          }`}>I'm a Full Stack Web & App Developer</h2>
          <p className={`py-4 max-w-md ${
            isDarkMode ? "text-gray-500" : "text-green-900"
          }`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            repellat quos voluptatum nisi quas impedit, asperiores, nostrum
            itaque ratione iste fuga? Reiciendis minima magnam temporibus
            voluptates officia ducimus tempore consectetur natus aliquam
            deleniti magni doloribus laboriosam quisquam animi beatae ipsam
            corrupti expedita accusantium nisi vitae perspiciatis, commodi
            aperiam voluptatem? Deleniti modi ducimus necessitatibus? Eaque,
            porro voluptate. Iste expedita veritatis minima molestiae
            perferendis temporibus voluptatem aut assumenda unde obcaecati.{" "}
          </p>
          <div>
            <button className={`group  ${ isDarkMode ? 'text-white' : 'text-green-900'} w-fit px-6 py-3 my-2 flex items-center rounded-md ${
              isDarkMode
                ? "bg-gradient-to-r from-cyan-500 to-blue-500"
                : "bg-gradient-to-r from-yellow-500 to-green-500"
            } cursor-pointer`}>
              Portfolio
              <span className="ml-2 group-hover:rotate-90 duration-300">
                <FaArrowRight className="ml-1" />
              </span>
            </button>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="MY profile Img"
            className="rounded-2xl mb-20 mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;