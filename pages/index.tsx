import Head from 'next/head';
import { Inter } from '@next/font/google';
import Header from '../components/Header';
import Hero from '../components/Hero';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Mingkai Pang</title>
      </Head>

      <Header />

      {/* Hero */}
      <section id='hero'>
        <Hero />
      </section>

      {/* About */}

      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}
    </>
  );
}
