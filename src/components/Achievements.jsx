import React from 'react'
import FadeIn from './motion/FadeIn';

const Achievements = () => {
    const events = [
        "google developer student clubs lead at campus 2023-24",
        "Web Master at IEEE CS (Campus)",
        "Delivered Workshops on Git, Flask, Figma (Campus & Hackathons)",
        "Design Lead at CNCF Nagpur",
        "Member at Google Developer Groups Nagpur",
        "Fellow Organizer at DevFest ‘23 & ‘24",
        "Fellow Organizer at IWD ‘23 Nagpur",
      ];
  return (
    <FadeIn>
    <section id='about' className='mx-10 md:w-178 max-w-178 space-y-10 scroll-mt-20 '>
        <h1 className="text-[var(--light_gray)] text-2xl font-semibold">achievements<span className="text-[var(--highlight)]"> & </span>volunteering<span className="text-[var(--highlight)]"> .</span></h1>

        <div className='md:pl-15 md:pr-35 bg-[var(--card_color)] border border-[var(--light_gray)] rounded-xl w-full relative grid grid-flow-col-dense grid-cols-1 px-5'>
            
            <div className="relative w-full py-10 ">
                {/* Vertical Line */}
                <div className="absolute left-0.5  top-0 h-full w-[1px] bg-[var(--highlight)]"></div>

                {events.map((event, index) => (
                <div key={index} className="relative flex items-center gap-6 mb-4 ">
                    {/* Circle Bullet */}
                    <div className="w-1.5 h-1.5 bg-[var(--highlight)] rounded-full shrink-0"></div>

                    {/* Event Text */}
                    <h3 className="text-xs font-light text-[var(--light_gray)] lowercase">{event}</h3>
                </div>
                ))}
            </div>
        </div>
    </section>
    </FadeIn>
  );
}

export default Achievements