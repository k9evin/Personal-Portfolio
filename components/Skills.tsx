import React from 'react';
import { motion } from 'framer-motion';
import Skill from './Skill';
import { Skill as SkillType } from '../typings';
import Image from 'next/image';

type Props = {
  skills: SkillType[];
};

function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center "
    >
      <div className="flex absolute top-24 gap-4">
        <Image
          src="https://s1.ax1x.com/2023/01/01/pSCbDbR.png"
          width={32}
          height={32}
          alt="Skills"
          className="inline-flex h-8"
        />
        <h3 className="uppercase tracking-[15px] text-gray-400 text-2xl font-semibold">
          Skills
        </h3>
      </div>

      <div className="grid grid-cols-4 gap-x-6 gap-y-8 scale-90 md:scale-100">
        {skills?.slice(0, skills.length / 2).map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}
        {skills?.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill key={skill._id} skill={skill} directionBottom />
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
