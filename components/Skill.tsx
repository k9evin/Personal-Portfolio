import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  directionLeft?: boolean;
};

function Skill({ directionLeft }: Props) {
  return (
    <div className='flex gap-2 items-center'>
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="rounded-full h-10 w-10 inline-flex"
        src="https://cdn.worldvectorlogo.com/logos/react-2.svg"
        alt="React"
      />
      <span className="text-white text-lg">React</span>
    </div>
  );
}

export default Skill;
