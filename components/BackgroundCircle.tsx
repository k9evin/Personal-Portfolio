import { motion } from 'framer-motion';
import React from 'react';

type Props = {};

function BackgroundCircle({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 1.0],
        borderRadius: ['20%', '20%', '50%', '80%', '20%'],
      }}
      transition={{ duration: 1.7 }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
      <div className="absolute border border-[#333333] rounded-full h-[300px] w-[300px] mt-52" />
      {/* <div className="absolute border border-[#333333] rounded-full h-[500px] w-[500px] mt-52 " /> */}
      <div className="absolute border border-[#ffb01e] rounded-full opacity-20 h-[500px] w-[500px] mt-52 animate-pulse" />
      <div className="absolute border border-[#333333] rounded-full h-[700px] w-[700px] mt-52 " />
    </motion.div>
  );
}

export default BackgroundCircle;
