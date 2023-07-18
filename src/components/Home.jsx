import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">I'm a Full Stack Web & App Developer</h2>
          <p className="py-4 text-gray-500 max-w-md">
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
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
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
