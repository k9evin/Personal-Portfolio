import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../typings';
import Image from 'next/image';
import { urlFor } from '../sanity';

type Props = {
  directionBottom?: boolean;
  skill: Skill;
};

function Skill({ skill, directionBottom }: Props) {
  return (
    <motion.div
      initial={{ y: directionBottom ? 200 : -200, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex gap-3 items-center"
    >
      <Image 
        className="h-10 w-10 inline-flex"
        src={urlFor(skill?.image).url()}
        width={32}
        height={32}
        alt={skill?.title}
      />
      <span className="hidden md:block text-white text-lg">{skill?.title}</span>
    </motion.div>
  );
}

export default Skill;
