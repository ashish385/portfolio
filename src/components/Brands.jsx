import React from 'react'

import { brands } from '../data'
import MotionOnScroll from './MotionOnScroll'

const Brands = () => {
  return (
      <section className='min-h-[146px] bg-tertiary flex items-center'>
          <div className='container mx-auto flex md:justify-between items-center flex-wrap justify-evenly'>
              {brands.map((item, index) => (
                  <MotionOnScroll
                    key={index}
                    delayMs={item.motion?.delayMs ?? index * 80}
                    durationMs={item.motion?.durationMs ?? 550}
                    translateY={10}
                    className="flex items-center justify-center"
                  >
                      <img src={item.img} alt="" className="max-h-10 md:max-h-12" />
                  </MotionOnScroll>
              ))}
          </div>
    </section>
  )
}

export default Brands
