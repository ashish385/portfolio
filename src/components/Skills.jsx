import React from 'react';

import { skills } from '../data'

const Skills = () => {
  return (
      <section className='b bg-tertiary py-12'>
          <div className="container mx-auto">
              <div className='grid grid-cols-8 md:grid-flow-row'>
                  {skills.map((item, index) => (
                      <div key={index} className='flex items-center justify-center' >
                          <img src={item.image} alt="" />
                      </div>
                  ))}
              </div>
          </div>
    </section>
  )
}

export default Skills