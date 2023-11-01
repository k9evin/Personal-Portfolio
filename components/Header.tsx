import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { InboxArrowDownIcon } from "@heroicons/react/24/solid";
import { PageInfo, Social } from "../typings";
import Link from "next/link";

type Props = {
  pageInfo: PageInfo;
  socials: Social[];
};

function Header({ socials, pageInfo }: Props) {
  const resumeUrl = pageInfo?.resume;

  return (
    <header className="sticky top-0 p-5 flex items-start justify-between  mx-auto z-20 xl:items-center">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.3 }}
        className="flex flex-row items-center"
      >
        {/* Social Icons */}
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            className="hover:scale-125 transition duration-300 ease-in-out cursor-pointer "
            fgColor="#D1D5DB"
            bgColor="transparent"
          />
        ))}
      </motion.div>

      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.3 }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        <Link href={resumeUrl} target="_blank">
          <button className="whitespace-nowrap md:rounded-full bg-white md:shadow transition md:border bg-opacity-0 hover:animate-pulse md:hover:animate-none text-gray-300 md:hover:bg-gray-200 md:hover:text-black py-3 px-3 space-x-2">
            <InboxArrowDownIcon className="cursor-pointer w-6 h-6 inline-flex" />
            <p className="uppercase hidden md:inline-flex text-sm font-semibold pr-1">
              View My Resume
            </p>
          </button>
        </Link>
      </motion.div>
    </header>
  );
}

export default Header;
