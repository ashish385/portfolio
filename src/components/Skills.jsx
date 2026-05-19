import React from 'react';

import { skills } from '../data'
import MotionOnScroll from './MotionOnScroll'

const Skills = () => {
  return (
      <section className='b bg-tertiary py-12'>
          <div className="container mx-auto">
              <div className='grid grid-cols-8 md:grid-flow-row'>
                  {skills.map((item, index) => (
                    <MotionOnScroll
                      key={index}
                      delayMs={item.motion?.delayMs ?? index * 70}
                      durationMs={item.motion?.durationMs ?? 550}
                      translateY={12}
                      className='flex items-center justify-center'
                    >
                      <img src={item.image} alt="" className='transition-transform duration-500 hover:scale-105' />
                    </MotionOnScroll>
                  ))}
              </div>
          </div>
    </section>
  )
}

export default Skills
