export default function Intro() {
  return (
    <div className='bg-gray-50 mt-28 rounded-2xl border max-w-6xl mx-auto'>
      <div className='max-w-6xl mx-auto py-6 sm:py-14 px-6 sm:px-12 grid gap-y-0 lg:gap-y-6 xl:grid-cols-2'>
        <h2
          className='text-2xl font-semibold text-gray-900 lg:text-6xl w-full xl:ml-3'
          id='intro-3'
        >
          Let&#39;s transform your idea into a solid product
        </h2>
        <div
          className='row-span-2 w-full md:text-justify lg:place-self-center xl:-ml-3'
          id='intro-1'
        >
          <p>
            Having not only a good-looking but also clear and inclusive design
            is a necessity in today&#39;s world.
          </p>
          <p>
            {' '}
            As a freelance UI & UX designer, I performed on numerous projects as
            the chief designer, which permitted me to acquire an adequate
            working speed. I specialized in inclusiveness and creating reliable
            products using modern technologies.
          </p>
          <p>
            {' '}
            As web technologies gain more and more attention, great solutions
            are coming out that developers have to catch up on. I have resolved
            to supply my customers not only with a visually satisfying but also
            a technically contemporary product.{' '}
          </p>
          <p>
            Creating things is a passion of mine and I want to use my experience
            and creativity to help you realize your vision. Let&#39;s create the
            future together!
          </p>
        </div>
        <div
          className='mt-2 mb-3 xl:mb-0 xl:mt-0 w-full xl:w-4/5 md:text-justify xl:ml-3'
          id='intro-2'
        >
          <p>
            I truly believe that good design is the key to success. &#34;We eat
            with our eyes&#34; not only applies to food but also to everything
            around us. Our brain decides in seconds if we like something or not,
            only based on the first glaze.
          </p>
        </div>
      </div>
    </div>
  );
}
