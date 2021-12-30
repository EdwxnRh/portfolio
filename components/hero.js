import FeatherIcon from 'feather-icons-react';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      window.addEventListener('resize', handleResize);
      handleResize();

      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);
  return windowSize;
}

export default function Hero() {
  const size = useWindowSize();
  return (
    <>
      <div
        className='grid place-items-center relative md:mx-2 lg:mx-8 -z-50 overflow-hidden'
        id='hero-container'
      >
        <div className='text-center mt-24'>
          <h1
            className='text-7xl md:text-8xl lg:text-9xl font-extrabold bg-clip-text'
            id='one'
          >
            Design.
          </h1>
          <h1
            className='text-7xl md:text-8xl lg:text-9xl font-extrabold bg-clip-text'
            id='two'
          >
            Develop.
          </h1>
          <h1
            className='text-7xl md:text-8xl lg:text-9xl font-extrabold bg-clip-text'
            id='three'
          >
            Revise.
          </h1>
        </div>
        <div
          className='max-w-7xl w-full h-full absolute md:-top-11 md:right-4 lg:-top-16 lg:right-6'
          id='hero-design'
        >
          <div className='relative w-full h-full opacity-0 md:opacity-100'>
            <Image
              src={'/assets/design-drawings.svg'}
              layout='fill'
              alt='Little jokes for my designer folks!'
            />
          </div>
        </div>
        <div
          className='max-w-7xl w-full h-full absolute md:top-6 md:-right-2 lg:top-8'
          id='hero-develop'
        >
          <div className='relative w-full h-full opacity-0 md:opacity-100'>
            <Image
              src={'/assets/develop-drawings.svg'}
              layout='fill'
              alt='Little jokes for my developer folks!'
            />
          </div>
        </div>
        <div
          className='max-w-7xl w-full h-full absolute md:top-40 md:right-1 lg:top-52 lg:right-4'
          id='hero-revise'
        >
          <div className='relative w-full h-full opacity-0 md:opacity-100'>
            <Image
              src={'/assets/revise-drawings.svg'}
              layout='fill'
              alt='Little jokes for my clients!'
            />
          </div>
        </div>
      </div>
      <div className='mt-16 md:mt-24 grid place-items-center'>
        <Link href='#'>
          <a className='inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white md:text-base font-medium hover:bg-gray-50  sm:mt-0 sm:ml-3 sm:w-auto text-sm place-items-center ring-1 ring-black ring-opacity-5 cursor-pointer'>
            {size.width > 350
              ? `Let's work together - Contact me`
              : 'Contact me'}{' '}
            <FeatherIcon
              icon='arrow-right'
              size='18'
              className='ml-2'
            ></FeatherIcon>
          </a>
        </Link>
        <p className='text-lg mt-10 text-center w-full md:w-2/3'>
          Hi, I am Edwin, a passionate designer and webdeveloper from Germany. I
          create beautiful, responsive and modern solutions for your idea.
        </p>
      </div>
    </>
  );
}
