import React from 'react'

import { social } from '../data';

// import Logo from '../assets/img/logo.svg'

const Footer = () => {
  return (
    <footer className=" bg-tertiary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between">
          <div className="flex space-x-6 items-center justify-center">
            {social.map((item, index) => {
              const { href, icon } = item;
              return (
                <a href={href} className=" text-accent" key={index}>
                  {icon}
                </a>
              );
            })}
          </div>

          <div>
            {/* <img src={Logo} alt="" /> */}
            <div className="text-3xl">𝒜𝓈𝒽𝒾𝓈𝒽 𝒮𝑜𝓃𝒾</div>
          </div>

          <p> &copy; 2022 Gaura Pandey </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer