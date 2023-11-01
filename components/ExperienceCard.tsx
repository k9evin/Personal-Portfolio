import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";
import Image from "next/image";

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-10 flex-shrink-0 w-[512px] snap-center p-10 hover:opacity-80 opacity-50 cursor-pointer overflow-hidden  bg-black bg-opacity-80 transition-opacity duration-300 ">
      <motion.img
        className="w-32 h-32"
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        src={urlFor(experience?.companyImage).url()}
        alt="Google"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{experience?.company}</h4>
        <p className="font-bold text-2xl mt-1">{experience?.jobTitle}</p>
        <div className="flex space-x-2 my-2">
          {experience?.technologies.map((technology) => (
            <Image
              key={technology._id}
              src={urlFor(technology.image).url()}
              alt={technology.title}
              width={28}
              height={28}
              className="w-7 h-7"
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">
          {new Date(experience?.dateStarted).toDateString()} -{" "}
          {experience?.isCurrentlyWorkingHere
            ? "Current"
            : new Date(experience?.dateEnded).toDateString()}
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg max-h-80 overflow-y-scroll scrollbar-thin ">
          {experience?.points.map((point, i) => <li key={i}>- {point}</li>)}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
