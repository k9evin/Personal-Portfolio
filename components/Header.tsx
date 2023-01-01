import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import { ArrowDownCircleIcon } from '@heroicons/react/24/solid';
import { Social } from '../typings';

type Props = {
  socials: Social[];
};

function Header({ socials }: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between  mx-auto z-20 xl:items-center">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        {/* Social Icons */}
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor="gray"
            bgColor="transparent"
          />
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.7 }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <button className="whitespace-nowrap md:rounded-full bg-white md:shadow transition md:border bg-opacity-0 hover:animate-pulse md:hover:animate-none text-gray-300 md:hover:bg-gray-200 md:hover:text-black py-2 px-2 space-x-2">
          <ArrowDownCircleIcon className="cursor-pointer w-8 h-8 inline-flex" />
          <p className="uppercase hidden md:inline-flex text-sm font-semibold pr-1">
            Download Resume
          </p>
        </button>
      </motion.div>
    </header>
  );
}

export default Header;
