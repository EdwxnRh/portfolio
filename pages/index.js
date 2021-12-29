import Head from 'next/head';
import Header from '../components/header';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Freelance UX UI Designer & Webdeveloper - Edwin Rheindt</title>
        <meta name='description' content='' />
      </Head>
      <Header></Header>
      <main>
        <section className={styles.head}>
          <div className={styles.bg}></div>
          <h1 className={styles.title} id='one'>
            Design.
          </h1>
          <h1 className={styles.title} id='two'>
            Develop.
          </h1>
          <h1 className={styles.title} id='three'>
            Revise.
          </h1>
          <a className={styles.contact}>Let's work together - Contact me</a>
          <p className={styles.intro}>
            Hi, I am Edwin, a passionate designer and webdeveloper from Germany.
            I create beautiful, responsive and modern solutions for your idea.
          </p>
        </section>
      </main>
    </div>
  );
}
