import React from "react";
import { services } from "../data";
import MotionOnScroll from "./MotionOnScroll";

const Services = () => {
  return (
    <section id="services" className="section bg-tertiary">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <MotionOnScroll delayMs={0} durationMs={600} translateY={12}>
            <h2 className="section-title before:content-services relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-28 before:hidden before:lg:block">
              What I do for clients
            </h2>
            <div className="subtitle">
              My role involves a range of responsibilities to ensure the
              successful development and delivery of their websites or web
              applications.
            </div>
          </MotionOnScroll>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const { icon, name, description } = service;
            return (
              <MotionOnScroll
                key={index}
                delayMs={service.motion?.delayMs ?? index * 120}
                durationMs={service.motion?.durationMs ?? 550}
                translateY={14}
                className="bg-secondary p-6 rounded-2xl"
              >
                <div className="text-accent rounded-sm w-12 h-12 flex justify-center items-center mb-24 text-[28px]">
                  {icon}
                </div>
                <h4 className="text-xl font-medium mb-2">{name}</h4>
                <p>{description}</p>
              </MotionOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;

