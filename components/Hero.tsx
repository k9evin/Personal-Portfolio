import React from 'react';
import {Cursor, useTypewriter} from 'react-simple-typewriter';
import Image from 'next/image';
import Link from 'next/link';
import {PageInfo} from '../typings';
import {urlFor} from '../sanity';
import {BackgroundParticles} from './BackgroundParticles';
import {motion} from 'framer-motion';

type Props = {
    pageInfo: PageInfo;
};

function Hero({pageInfo}: Props) {
    const [text, count] = useTypewriter({
        words: [`Hey, My name is ${pageInfo?.name}`, 'A software developer', 'Guy-who-loves-coding.tsx'],
        loop: true,
        delaySpeed: 2500,
    });

    return (
        <div
            className="h-screen relative flex flex-col space-y-8 items-center justify-center text-center overflow-hidden w-full">
            <BackgroundParticles/>

            <motion.div
                initial={{y: -150, opacity: 0, scale: 0.5}}
                whileInView={{y: 0, opacity: 1, scale: 1}}
                transition={{type: "spring", stiffness: 70, delay: 0.5}}
            >
                <Image
                    src={urlFor(pageInfo?.heroImage).url()}
                    width={180}
                    height={180}
                    className="relative rounded-full mx-auto object-cover border-2 border-amber-50 border-opacity-50 shadow-xl"
                    alt="Kevin"
                    priority
                />
            </motion.div>
            <div className="z-20">
                <h2 className="text-sm md:text-lg uppercase text-gray-300 tracking-[10px]">
                    {pageInfo?.role}
                </h2>
                <h1 className="text-5xl lg:text-6xl font-semibold py-5 hidden md:block">
                    <span className="mr-3">{text}</span>
                    <Cursor cursorColor="#F7AB0A"/>
                </h1>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold py-3 md:hidden">
                    <span className="mr-3">Hey, My name is Mingkai Pang</span>
                </h1>

                <div className="pb-3 md:pb-5">
                    <Link href="#about">
                        <button className="heroButton hover:border-white">About</button>
                    </Link>
                    <Link href="#experience">
                        <button className="heroButton">Experience</button>
                    </Link>
                    <Link href="#skills">
                        <button className="heroButton">Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className="heroButton">Projects</button>
                    </Link>
                    <Link href="#contact">
                        <button className="heroButton">Contact</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Hero;
