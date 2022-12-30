import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <div className="flex absolute top-24 gap-3">
        <Image
          src="https://s1.ax1x.com/2022/12/30/pSpXkGT.png"
          width={32}
          height={32}
          alt="About me"
          className="inline-flex h-8"
        />
        <h3 className=" uppercase tracking-[15px] text-gray-500 text-2xl">
          About
        </h3>
      </div>

      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        src="https://s1.ax1x.com/2022/12/30/pSpqvY8.png"
        className="-mb-20 md:mb-0 flex-shrink-0 w-24 h-24 rounded-full object-cover md:w-48 md:h-48 "
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{' '}
          <span className="underline decoration-[#F7AB0A] decoration-wavy">
            litte
          </span>{' '}
          background
        </h4>
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, alias
          aut, harum totam non sapiente doloremque eum amet voluptas magni enim
          animi a nisi, eligendi quisquam et. Obcaecati, quisquam id? A autem
          soluta laudantium qui unde asperiores voluptatem repellat ratione nam
          dolore corporis ipsum at, exercitationem ipsa eos doloremque, culpa
          rerum saepe sed ex cumque. Omnis voluptate quas ea consequatur. Nobis
          beatae sed labore similique ducimus, illum placeat assumenda quidem
          cumque dolores in consectetur necessitatibus perspiciatis tempore
          magnam ipsa.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
