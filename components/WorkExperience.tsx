import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';

type Props = {};

function WorkExperience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-center mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[15px] text-gray-500 text-2xl">
        Experience
      </h3>

      <div className="mt-10 w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scale-95 md:scale-75 scrollbar scrollbar-track-[rgb(36,36,36)] scrollbar-thumb-[#F7AB0A]/40 hover:scrollbar-thumb-[#F7AB0A]/70">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  );
}

export default WorkExperience;
