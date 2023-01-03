import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../typings';
import { urlFor } from '../sanity';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <div className="flex absolute top-24 gap-4">
        <Image
          src="https://s1.ax1x.com/2023/01/01/pSCbjMQ.png"
          width={32}
          height={32}
          alt="Projects"
          className="inline-flex h-8"
        />
        <h3 className="uppercase tracking-[15px] text-gray-400 text-2xl font-semibold">
          Projects
        </h3>
      </div>

      <div className="relative w-full flex overflow-x-scroll overflow-y-scroll snap-x snap-mandatory z-20 max-h-[60%] md:max-h-full md:overflow-y-hidden scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-400/40 hover:scrollbar-thumb-gray-400/70">
        {projects.map((project, i) => (
          <div
            key={i}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <Link href={`${project?.linksToBuild}`} target="_blank">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
              >
                <Image
                  src={urlFor(project?.image).url()}
                  alt={project?.title}
                  width={1028}
                  height={792}
                  className="hover:scale-110 transition-all duration-500 w-52 rounded-lg"
                />
              </motion.div>
            </Link>

            <div className="space-t-10 px-0 md:px-10 max-w-5xl">
              <h4 className="text-3xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]">
                  Case study {i + 1} of {projects.length}:
                </span>{' '}
                {project?.title}
              </h4>

              <div className="flex items-center space-x-5 justify-center py-4">
                {project?.technologies.map((technology) => (
                  <Image
                    src={urlFor(technology?.image).url()}
                    alt={technology?.title}
                    key={technology?._id}
                    width={32}
                    height={32}
                  />
                ))}
              </div>

              <p className="text-lg text-center md:text-left pb-3 max-w-4xl">
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-slate-50/10 left-0 h-[350px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
