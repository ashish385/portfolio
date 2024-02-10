import React from "react";
import { social } from "../data";

const Socials = () => {
  return (
    <ul className="flex space-x-6 ">
      {social.map((item, index) => (
        <li
          className="flex items-center justify-center text-accent hover:bg-accent-hover px-2 py-2 rounded-full hover:text-white transition-all duration-300 ease-linear "
          key={index}
        >
          <a href={item.href} className="text-base">
            {item.icon}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
