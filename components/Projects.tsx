import React from 'react';
import {motion} from 'framer-motion';
import {Project} from '../typings';
import {urlFor} from '../sanity';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
    projects: Project[];
};

function Projects({projects}: Props) {
    return (
        <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 1.5}}
            className="h-screen relative flex overflow-hidden flex-col md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
        >
            <div className="flex absolute top-20 gap-4">
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

            <div
                className="relative w-full flex overflow-x-scroll overflow-y-scroll snap-x snap-mandatory z-20 max-h-[60%] md:max-h-full md:overflow-y-hidden scrollbar scrollbar-thumb-rounded scrollbar-thumb-gray-400/40 hover:scrollbar-thumb-gray-400/70">
                {projects.map((project, i) => (
                    <div
                        key={i}
                        className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center md:p-44 md:h-screen scale-90 md:scale-100"
                    >
                        <Link href={`${project?.linksToBuild}`} target="_blank">
                            <motion.div
                                initial={{opacity: 0}}
                                whileInView={{opacity: 1}}
                                transition={{duration: 2}}
                                viewport={{once: true}}
                            >
                                <Image
                                    src={urlFor(project?.image).url()}
                                    alt={project?.title}
                                    width={720}
                                    height={480}
                                    className="hover:scale-110 transition-all duration-500 rounded-lg w-96"
                                />
                            </motion.div>
                        </Link>

                        <div className="space-t-10 px-0 md:px-10 max-w-5xl">
                            <h4 className="text-lg md:text-2xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]">
                  {i + 1} of {projects.length}:
                </span>{' '}
                                {project?.title}
                            </h4>

                            <div className="flex items-center space-x-5 justify-center py-4">
                                {project?.technologies.map((technology) => (
                                    <Image
                                        src={urlFor(technology?.image).url()}
                                        alt={technology?.title}
                                        key={technology?._id}
                                        width={28}
                                        height={28}
                                    />
                                ))}
                            </div>

                            <p className="text-base text-center md:text-left pb-3 max-w-4xl hidden md:block">
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
