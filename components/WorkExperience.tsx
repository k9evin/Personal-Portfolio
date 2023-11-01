import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "../typings";
import Image from "next/image";

type Props = {
  experiences: Experience[];
};

function WorkExperience({ experiences }: Props) {
  return (
    <div className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-center mx-auto items-center">
      <div className="flex absolute top-20 gap-4">
        <Image
          src="https://s1.ax1x.com/2023/01/01/pSCbjMQ.png"
          width={32}
          height={32}
          alt="Experience"
          className="inline-flex h-8"
        />
        <h3 className="uppercase tracking-[15px] text-gray-400 text-2xl font-semibold">
          Experience
        </h3>
      </div>

      <motion.div
        initial={{ opacity: 0.5 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="mt-10 flex space-x-7 overflow-x-scroll p-10 snap-x snap-mandatory scale-95 md:scale-75 scrollbar-thin scrollbar-thumb-rounded scrollbar-track-transparent scrollbar-thumb-gray-400/40 hover:scrollbar-thumb-gray-400/80"
      >
        {experiences.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </motion.div>
    </div>
  );
}

export default WorkExperience;
