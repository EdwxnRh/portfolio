import Head from 'next/head';
import Header from '../components/header';
import Hero from '../components/hero';
import Intro from '../components/intro';
import Divider from '../components/divider';
import FeauturedProject from '../components/feauturedProject';
import Testimonials from '../components/testimonials';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Freelance UX UI Designer & Webdeveloper - Edwin Rheindt</title>
        <meta name='description' content='ss' />
      </Head>
      <Header></Header>
      <main className='max-w-7xl mx-auto px-4 sm:px-6 z-40'>
        <Hero />
        <Intro />
        <Divider content='Explore my featured project' />
        <FeauturedProject />
        <Divider content='Some nice words from my clients' />
        <Testimonials />
      </main>
      <div className='h-screen'></div>
    </div>
  );
}
