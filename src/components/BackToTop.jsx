import React, { useEffect, useState } from 'react'

import {  animateScroll as scroll } from 'react-scroll';

import { ChevronUpIcon } from '@heroicons/react/outline'

import MotionOnScroll from "./MotionOnScroll";

const BackToTop = () => {

    const [show, setshow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            return window.scrollY > 600 ? setshow(true) : setshow(false);
        })
    })

    const scrollToTop = () => {
        scroll.scrollToTop();
    }
  return (
      <>
          {show && (
            <MotionOnScroll delayMs={0} durationMs={450} translateY={10}>
              <button onClick={scrollToTop} className=' bg-accent w-12 h-12 hover:bg-accent-hover text-white rounded-full fixed right-24 bottom-24 flex justify-center items-center transition-all'>
                <ChevronUpIcon className=' w-6 h-6' />
              </button>
            </MotionOnScroll>
          )}
      </>
  )
}

export default BackToTop
