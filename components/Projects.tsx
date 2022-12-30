import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[15px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-scroll snap-x snap-mandatory z-20 max-h-[60%] md:max-h-full md:overflow-y-hidden">
        {projects.map((project, i) => (
          <div
            key=""
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
              src="https://valenguerra.github.io/valenguerra/assets/4e7d8beb6c9153feba56963e1bd0a7a5.png"
              alt="projects"
              className="hover:scale-110 transition-all duration-500 w-52 rounded-lg"
            />

            <div className="space-y-10 px-0 md:px-10 max-w-5xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case study {i + 1} of {projects.length}:
                </span>{' '}
                clone
              </h4>

              <p className="text-lg text-center md:text-left">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
                cum odit nihil tempora nobis suscipit rem temporibus aperiam!
                Quos ipsa laborum sed. Quam cumque laudantium sequi quas
                doloremque architecto nihil. Voluptas consequuntur recusandae
                distinctio qui doloribus eaque, architecto ducimus eveniet nihil
                rerum cumque. Placeat reiciendis accusamus earum, voluptatem
                dolorem consequuntur amet harum excepturi delectus, illum iste
                ipsa saepe beatae libero!
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[350px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
