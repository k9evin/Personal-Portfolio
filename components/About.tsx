import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";
import { Cursor, useTypewriter } from "react-simple-typewriter";

type Props = {
  pageInfo: PageInfo;
};

function About({ pageInfo }: Props) {
  // use typewriter for background information
  const [text, count] = useTypewriter({
    words: [`${pageInfo?.backgroundInformation}`],
    loop: 1,
    typeSpeed: 40,
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-center mx-auto items-center"
    >
      <div className="flex absolute top-24 gap-4">
        <Image
          src="https://s1.ax1x.com/2022/12/30/pSpXkGT.png"
          width={32}
          height={32}
          alt="About me"
          className="inline-flex h-8"
        />
        <h3 className="uppercase tracking-[15px] text-gray-400 text-2xl font-semibold">
          About
        </h3>
      </div>

      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
      >
        <Image
          src={urlFor(pageInfo?.profilePic).url()}
          alt="Profile picture"
          width={200}
          height={200}
          className="flex-shrink-0 w-24 h-24 object-cover md:w-48 md:h-48 mt-10 mb-5"
        />
      </motion.div>

      <div className="space-y-5 md:space-y-10 px-0 md:px-10">
        <h4 className="text-2xl md:text-3xl font-semibold">
          Here is a little{" "}
          <span className="underline decoration-[#F7AB0A] decoration-wavy">
            background
          </span>{" "}
        </h4>
        <p className="text-sm md:text-lg max-w-3xl">
          {text}
          <Cursor cursorColor="#F7AB0A" />
        </p>
      </div>
    </motion.div>
  );
}

export default About;
