import Head from 'next/head';
import Header from '../components/header';
import Hero from '../components/hero';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Freelance UX UI Designer & Webdeveloper - Edwin Rheindt</title>
        <meta name='description' content='ss' />
      </Head>
      <Header></Header>
      <main className='max-w-7xl mx-auto px-4 sm:px-6 z-40'>
        <Hero></Hero>
      </main>
    </div>
  );
}
