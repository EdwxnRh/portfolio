import FeatherIcon from 'feather-icons-react';

import Image from 'next/image';
import Link from 'next/link';
import Divider from './divider';

export default function FeauturedProject() {
  return (
    <div className='text-center'>
      <section>
        <h1 className='sr-only'>simple ticket</h1>
        <h3 className='text-3xl md:text-6xl font-semibold'>
          Selling event tickets made easy
        </h3>
        <Link href='/projects/simple-ticket'>
          <article className='bg-gray-50 mt-16 md:mt-28 rounded-2xl border max-w-4xl mx-auto py-8 px-6 sm:px-10 text-left grid md:grid-cols-2 relative cursor-pointer md:hover:scale-105'>
            <div>
              <h1 className='text-4xl font-semibold mb-2'>simple ticket</h1>
              <p className='text-left'>
                During the pandemic many events switched from physical tickets
                to digital tickets. Simple ticket is a easy to use and
                cost-effective software solution for small event organizer in
                Lower Saxony. Let&#39;s make selling tickets easy again.
              </p>
              <div className='mt-2 text-sm'>
                <Link href='/projects/simple-ticket'>
                  <a className='font-medium hover:text-indigo-500'>
                    {' '}
                    View the project{' '}
                    <FeatherIcon
                      className='inline'
                      icon='arrow-right'
                      size='16'
                    ></FeatherIcon>
                  </a>
                </Link>
              </div>
            </div>

            <div className='absolute max-w-xl w-1/2 right-0 text-center h-72 hidden md:inline -top-2 lg:top-0'>
              <Image src={'/assets/simple-ticket-mock.svg'} layout='fill' />
            </div>
          </article>
        </Link>
        <Divider content='- The design contains -' />
        <div className='grid md:grid-cols-3 gap-y-12 gap-x-6 place-items-center'>
          <div className='text-center'>
            <h4 className='font-semibold text-xl'>Flat Dashboard</h4>
            <p className='text-lg max-w-sm'>
              A modern dashboard with color highlights and important
              information.
            </p>
          </div>
          <div className='text-center'>
            <h4 className='font-semibold text-xl'>Mobile App</h4>
            <p className='text-lg max-w-sm'>
              The mobile app is clean and allowes to quickly scan event tickets.
            </p>
          </div>
          <div className='text-center'>
            <h4 className='font-semibold text-xl'>Sales Website</h4>
            <p className='text-lg max-w-sm'>
              Custom sales website for every event and Apple Wallet integration.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
