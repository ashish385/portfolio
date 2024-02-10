import React from 'react'
import TestimonialSlide from './TestimonialSlide';

const Testimonials = () => {
  return (
    <section id="testimonials" className="section bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
                  <h2 className="section-title before:content-testimonials relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-64 before:hidden before:lg:block">
                      <p className='subtitle'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis minus numquam autem? Fuga maiores tempora, animi deserunt cumque saepe mollitia hic dolorem aut quis non veritatis at cupiditate, facilis odit.</p>
            What other pepole say
          </h2>
              </div>
              <TestimonialSlide />
      </div>
    </section>
  );
}

export default Testimonials