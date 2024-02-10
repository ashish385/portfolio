import React from "react";

const Project = ({ item }) => {
  return (
    <div key={item.id} className="flex flex-col group items-center text-center">
      <div className="mb-8 relative">
        <img
          src={item.image}
          alt=""
          className="rounded-2xl aspect-square w-full h-full"
        />
        <div className="hidden  absolute top-0 right-0 bottom-0 left-0 w-full h-full bg-black bg-opacity-50 rounded-2xl group-hover:flex items-center justify-center transition-all duration-1000 ease-in-out">
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className=" px-6 py-3 bg-white rounded-lg hover:underline text-black text-2xl italic font-semibold"
          >
            View{" "}
          </a>
        </div>
      </div>
      <p className=" capitalize text-accent text-sm mb-3">{item.category} </p>
      <h3 className="text-2xl font-semibold capitalize mb-3">{item.name} </h3>
    </div>
  );
};

export default Project;
