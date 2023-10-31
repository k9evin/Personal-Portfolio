import Head from 'next/head';
import {Inter} from '@next/font/google';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import WorkExperience from '../components/WorkExperience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import BackToTop from '../components/BackToTop';
import {GetStaticProps} from 'next';
import {Experience, PageInfo, Project, Skill, Social} from '../typings';
import {fetchPageInfo} from '../utils/fetchPageInfo';
import {fetchExperience} from '../utils/fetchExperiences';
import {fetchSkills} from '../utils/fetchSkills';
import {fetchProjects} from '../utils/fetchProjects';
import {fetchSocials} from '../utils/fetchSocials';
import Image from 'next/image';
import background from '../public/background.jpeg';

type Props = {
    pageInfo: PageInfo;
    experience: Experience[];
    skills: Skill[];
    projects: Project[];
    socials: Social[];
};

const inter = Inter({subsets: ['latin']});

export default function Home({
                                 pageInfo,
                                 experience,
                                 skills,
                                 projects,
                                 socials,
                             }: Props) {
    return (
        <div
            className="text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scroll-smooth scrollbar-none">
            <Head>
                <title>Mingkai Pang - Software Developer</title>
                <meta
                    name="description"
                    content="Coding for humans. Come say hi 🌳"
                    key="desc"
                />
                <meta property="og:url" content="https://mkpang.space/"/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="Mingkai Pang - Software Developer"/>
                <meta
                    property="og:description"
                    content="Hi! I'm Mingkai Pang, a software developer based in Blacksburg, student and avid open-sourcerer. I'm passionate about building software that makes a difference in people's lives."
                />
                <meta
                    property="og:image"
                    content="https://s1.ax1x.com/2023/01/03/pSiu1uF.jpg"
                />
                <meta property="og:locale" content="en_US"/>
                <meta property="og:site_name" content="Mingkai Pang"/>
            </Head>

            <div
                style={{
                    position: 'fixed',
                    height: '100vh',
                    width: '100vw',
                    overflow: 'hidden',
                }}
            >
                <Image
                    className="bg-cover bg-center"
                    alt="Background"
                    src={background}
                    fill
                    sizes="100vw"
                    style={{
                        objectFit: 'cover',
                    }}
                    priority
                />
            </div>

            <Header socials={socials} pageInfo={pageInfo}/>

            <section id="hero" className="snap-start">
                <Hero pageInfo={pageInfo}/>
            </section>

            <section id="about" className="snap-center">
                <About pageInfo={pageInfo}/>
            </section>

            <section id="experience" className="snap-center">
                <WorkExperience experiences={experience}/>
            </section>

            <section id="skills" className="snap-start">
                <Skills skills={skills}/>
            </section>

            <section id="projects" className="snap-start">
                <Projects projects={projects}/>
            </section>

            <section id="contact" className="snap-start">
                <Contact/>
            </section>

            <footer>
                <BackToTop/>
            </footer>
        </div>
    );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
    const pageInfo: PageInfo = await fetchPageInfo();
    const experience: Experience[] = await fetchExperience();
    const skills: Skill[] = await fetchSkills();
    const projects: Project[] = await fetchProjects();
    const socials: Social[] = await fetchSocials();

    return {
        props: {
            pageInfo,
            experience,
            skills,
            projects,
            socials,
        },
        revalidate: 300,
    };
};
