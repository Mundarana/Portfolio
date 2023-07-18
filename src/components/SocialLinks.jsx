import React from "react";
import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";
import { BsFillPersonLinesFill} from 'react-icons/bs';

const SocialLinks = () => {

  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30}/> 
        </>
      ),
      href: 'https://www.linkedin.com/in/mohammad-awais-rana/',
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30}/> 
        </>
      ),
      href: 'https://github.com/Mundarana',
    },
    {
      id: 3,
      child: (
        <>
          Mail <FaMailBulk size={30}/> 
        </>
      ),
      href: 'mailtp:mundarana5577@gmail.com',
    },
    {
      id: 4,
      child: (
        <>
          CV <BsFillPersonLinesFill size={30}/> 
        </>
      ),
      href: '/03,1-Copy.pdf',
      style: "rounded-br-md",
      download: true,
    },
  ]

  return (
    <div className="hidden lg:flex flex-col top-[30%] left-0 fixed">
      <ul>
        
        {links.map(({id, child, href, style, download}) => (
          <li key={id} className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px]
          rounded-md hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500">
          <a
            href={href}
            className="flex justify-between items-center w-full text-white"
            download={download}
            target="_blank"
            rel="noreferrer"
          >
            {child}
          </a>
        </li>
        ))}

      </ul>
    </div>
  );
};

export default SocialLinks;
