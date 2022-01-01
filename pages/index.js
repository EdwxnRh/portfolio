import Head from 'next/head';
import Header from '../components/header';
import Hero from '../components/hero';
import Intro from '../components/intro';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Freelance UX UI Designer & Webdeveloper - Edwin Rheindt</title>
        <meta name='description' content='ss' />
      </Head>
      <Header></Header>
      <main className='max-w-7xl mx-auto px-4 sm:px-6 z-40 mb-24'>
        <Hero></Hero>
        <Intro></Intro>
      </main>
    </div>
  );
}
