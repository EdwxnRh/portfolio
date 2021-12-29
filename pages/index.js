import Head from 'next/head';
import Header from '../components/header';
import { useState, useEffect } from 'react';

import styles from '../styles/Home.module.css';

export default function Home() {
  const [img, setImg] = useState('/assets/hero-title.svg');
  useEffect(() => {
    const interval = setInterval(() => {}, 2100);
    return () => clearInterval(interval);
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Freelance UX UI Designer & Webdeveloper - Edwin Rheindt</title>
        <meta name='description' content='' />
      </Head>
      <Header></Header>
      <main>
        <section className={styles.head}>
          <div
            className={styles.bg}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
          {/* <h1 className={styles.title} id='one'>
            Design.
          </h1>
          <h1 className={styles.title} id='two'>
            Develop.
          </h1>
          <h1 className={styles.title} id='three'>
            Revise.
          </h1> */}
          <div className={styles.intro}>
            <a className={styles.contact}>
              Let&#39;s work together - Contact me
            </a>
            <p className={styles.introText}>
              Hi, I am Edwin, a passionate designer and webdeveloper from
              Germany. I create beautiful, responsive and modern solutions for
              your idea.
            </p>
          </div>
        </section>
        <section className={styles.introSection}>
          <div className={styles.introBox}>
            <div className={styles.introHeader}>
              <h2 className={styles.introTitle}>
                Let&#39;s transform <br />
                your idea into a <br />
                solid product
              </h2>
              <p className={styles.introTextSt}>
                I truly believe that good design is the key to success. <br />
                "We eat with our eyes" not only applies to food but also to
                everything around us. Our brain decides inseconds if we like
                something or not, only based onthe first glaze.
              </p>
            </div>
            <p className={styles.introText}>
              Having not only a good-looking but also clear and inclusive design
              is a necessity in today&#39;s world.
              <br />
              <br /> As a freelance UI & UX designer, I performed on numerous
              projects as the chief designer, which permitted me to acquire an
              adequate working speed. I specialized in inclusiveness and
              creating reliable products using modern technologies. <br />
              <br />
              As web technologies gain more and more attention, great solutions
              are coming out that developers have to catch up on. I have
              resolved to supply my customers not only with a visually
              satisfying but also a technically contemporary product. <br />
              <br />
              Creating things is a passion of mine and I want to use my
              experience and creativity to help you realize your vision. <br />
              <br />
              Let&#39;s create the future together!
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
