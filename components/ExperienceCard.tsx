import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-10 flex-shrink-0 w-[512px] snap-center p-10 hover:opacity-80 opacity-50 cursor-pointer overflow-hidden  bg-black bg-opacity-80 transition-opacity duration-300 ">
      <motion.img
        className="w-32 h-32"
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        src="https://s1.ax1x.com/2022/12/30/pSpjCOH.png"
        alt="Google"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">CEO of Google</h4>
        <p className="font-bold text-2xl mt-1">PAPAFAM</p>
        <div className="flex space-x-2 my-2">
          <img
            src="https://valenguerra.github.io/valenguerra/assets/93915ce532e34058fd6c8ace8d2ca077.png"
            alt="Javascript"
            className="w-7 h-7"
          />
          <img
            src="https://valenguerra.github.io/valenguerra/assets/93915ce532e34058fd6c8ace8d2ca077.png"
            alt="Javascript"
            className="w-7 h-7"
          />
          <img
            src="https://valenguerra.github.io/valenguerra/assets/93915ce532e34058fd6c8ace8d2ca077.png"
            alt="Javascript"
            className="w-7 h-7"
          />
        </div>
        <p className="uppercase py-5 text-gray-300">
          Started work... - Ended...
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary</li>
          <li>Summary</li>
          <li>Summary</li>
          <li>Summary</li>
          <li>Summary</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
