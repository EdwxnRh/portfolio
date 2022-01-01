import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import FeatherIcon from 'feather-icons-react';
import Link from 'next/link';

const projects = [
  {
    name: 'Simple Ticket',
    description:
      ' Simple ticket is a easy to use and cost-effective software solution for event organizer.',
    href: 'simple-ticket',
    featured: true,
  },
  {
    name: 'Termina x CAI',
    description:
      'The cyberpunk AI who analyzes your Spotify - Uncommon Hacks 2021 Winner.',
    href: 'termina-x-cai',
  },
  {
    name: 'Trimdu',
    description:
      'The German startup that tries to revolutionize your hairsalon appointment.',
    href: 'trimdu',
  },
  {
    name: 'Me',
    description:
      'A mobile app to share your auto-biography and life experience with others.',
    href: 'me',
  },
];
const callsToAction = [
  { name: 'Learn more on how I work', href: 'how-i-work' },
];
const posts = [
  {
    name: 'Help Center',
    description:
      'Get all of your questions answered in our forums or contact support.',
    href: '#',
  },
  {
    name: 'Guides',
    description:
      'Learn how to maximize our platform to get the most out of it.',
    href: '#',
  },
  {
    name: 'Events',
    description:
      'See what meet-ups and other events we might be planning near you.',
    href: '#',
  },
  {
    name: 'Security',
    description: 'Understand how we take your privacy seriously.',
    href: '#',
  },
];
const recentPosts = [
  { id: 1, name: 'Boost your conversion rate', href: '#' },
  {
    id: 2,
    name: 'How to use search engine optimization to drive traffic to your site',
    href: '#',
  },
  { id: 3, name: 'Improve your customer experience', href: '#' },
];

const extra = [
  {
    name: 'Instagram',
    description: 'See more of my work or leave me a message.',
    href: 'https://instagram.com/edwinrheindt',
  },
  {
    name: 'Resume',
    description: 'Download my resume.',
    href: '#',
  },
  {
    name: 'Legal',
    description: 'My imprint and privacy policies.',
    href: 'legal',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {
  return (
    <Popover className='relative bg-white z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <div className='flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10'>
          <div className='flex justify-start lg:w-0 lg:flex-1'>
            <Link href='/'>
              <a key='title'>
                <h1 className='font-medium text-gray-500 hover:text-gray-900'>
                  Edwin Rheindt
                </h1>
              </a>
            </Link>
          </div>
          <div className='-mr-2 -my-2 md:hidden'>
            <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none'>
              <span className='sr-only'>Open menu</span>
              <FeatherIcon icon='bar-chart-2' />
            </Popover.Button>
          </div>
          <Popover.Group as='nav' className='hidden md:flex space-x-10'>
            <Popover className='relative'>
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none '
                    )}
                  >
                    <span className='flex'>
                      Projects{' '}
                      <FeatherIcon
                        icon='chevron-down'
                        size='22'
                        className='pt-1'
                      />
                    </span>
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-200'
                    enterFrom='opacity-0 translate-y-1'
                    enterTo='opacity-100 translate-y-0'
                    leave='transition ease-in duration-150'
                    leaveFrom='opacity-100 translate-y-0'
                    leaveTo='opacity-0 translate-y-1'
                  >
                    <Popover.Panel className='absolute z-10 -ml-4 mt-3 transform px-2 w-96 lg:w-screen max-w-4xl sm:px-0 lg:ml-0 lg:left-48 lg:-translate-x-1/2'>
                      <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'>
                        <div className='relative grid lg:grid-cols-2 gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
                          {projects.map((item) => (
                            <Link
                              href={`/projects/${item.href}`}
                              key={item.name}
                            >
                              <a
                                key={item.name}
                                className='flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50'
                              >
                                <div className='ml-4'>
                                  <p className='text-base font-medium text-gray-900'>
                                    {item.name}
                                    {item.featured ? (
                                      <span className='ml-2 text-xs px-2 py-0.5 font-medium text-white rounded bg-gradient-to-bl from-gray-700 via-gray-900 to-black'>
                                        Featured
                                      </span>
                                    ) : (
                                      ''
                                    )}
                                  </p>

                                  <p className='mt-1 text-sm text-gray-500'>
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            </Link>
                          ))}
                        </div>
                        <div className='px-5 py-5 bg-gray-50 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8'>
                          {callsToAction.map((item) => (
                            <div key={item.name} className='flow-root'>
                              <Link
                                key={item.name}
                                href={`/projects/${item.href}`}
                              >
                                <a
                                  key={item.name}
                                  href={item.href}
                                  className='-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100'
                                >
                                  <span className='ml-3'>{item.name}</span>
                                  <FeatherIcon
                                    className='ml-2 pt-px'
                                    icon='arrow-right'
                                    size='18'
                                  ></FeatherIcon>
                                </a>
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>

            <Popover className='relative'>
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none '
                    )}
                  >
                    <span className='flex'>
                      Posts{' '}
                      <FeatherIcon
                        icon='chevron-down'
                        size='22'
                        className='pt-1'
                      />
                    </span>
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-200'
                    enterFrom='opacity-0 translate-y-1'
                    enterTo='opacity-100 translate-y-0'
                    leave='transition ease-in duration-150'
                    leaveFrom='opacity-100 translate-y-0'
                    leaveTo='opacity-0 translate-y-1'
                  >
                    <Popover.Panel className='absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-96 lg:w-screen max-w-4xl sm:px-0'>
                      <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'>
                        <div className='relative grid lg:grid-cols-2 gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
                          {posts.map((item) => (
                            <Link href={`/blog/${item.href}`} key={item.name}>
                              <a
                                key={item.name}
                                className='flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50'
                              >
                                <div className='ml-4'>
                                  <p className='text-base font-medium text-gray-900'>
                                    {item.name}
                                  </p>
                                  <p className='mt-1 text-sm text-gray-500'>
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            </Link>
                          ))}
                        </div>
                        <div className='px-5 py-5 bg-gray-50 sm:px-8 sm:py-8'>
                          <div>
                            <h3 className='text-sm tracking-wide font-medium text-gray-500 uppercase'>
                              Recent Posts
                            </h3>
                            <ul role='list' className='mt-4 space-y-4'>
                              {recentPosts.map((post) => (
                                <li
                                  key={post.id}
                                  className='text-base truncate'
                                >
                                  <Link
                                    href={`/blog/${post.href}`}
                                    key={post.name}
                                  >
                                    <a
                                      className='font-medium text-gray-900 hover:text-gray-700'
                                      key={post.name}
                                    >
                                      {post.name}
                                    </a>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className='mt-5 text-sm'>
                            <Link href='/blog'>
                              <a className='font-medium text-indigo-600 hover:text-indigo-500'>
                                {' '}
                                View all posts{' '}
                                <span aria-hidden='true'>&rarr;</span>
                              </a>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
            <Popover className='relative'>
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      open ? 'text-gray-900' : 'text-gray-500',
                      'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none '
                    )}
                  >
                    <span className='flex'>
                      More{' '}
                      <FeatherIcon
                        icon='chevron-down'
                        size='22'
                        className='pt-1'
                      />
                    </span>
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter='transition ease-out duration-200'
                    enterFrom='opacity-0 translate-y-1'
                    enterTo='opacity-100 translate-y-0'
                    leave='transition ease-in duration-150'
                    leaveFrom='opacity-100 translate-y-0'
                    leaveTo='opacity-0 translate-y-1'
                  >
                    <Popover.Panel className='absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0'>
                      <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden'>
                        <div className='relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8'>
                          {extra.map((item) => {
                            if (item.name != 'Instagram') {
                              return (
                                <Link key={item.name} href={`/${item.href}`}>
                                  <a
                                    key={item.name}
                                    className='p-2 -m-3 flex items-start transition duration-150 ease-in-out rounded-lg hover:bg-gray-50'
                                  >
                                    <div className='ml-4'>
                                      <p className='text-base font-medium text-gray-900'>
                                        {item.name}
                                      </p>
                                      <p className='mt-1 text-sm text-gray-500'>
                                        {item.description}
                                      </p>
                                    </div>
                                  </a>
                                </Link>
                              );
                            } else {
                              return (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  rel='noreferrer'
                                  target={'_blank'}
                                  className='p-2 -m-3 flex items-start transition duration-150 ease-in-out rounded-lg hover:bg-gray-50'
                                >
                                  <div className='ml-4'>
                                    <p className='text-base font-medium text-gray-900'>
                                      {item.name}
                                    </p>
                                    <p className='mt-1 text-sm text-gray-500'>
                                      {item.description}
                                    </p>
                                  </div>
                                </a>
                              );
                            }
                          })}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>
          <div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0'>
            <Link href='/about'>
              <a className='whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900'>
                About
              </a>
            </Link>
            <Link href='/contact-me'>
              <a className='ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-900'>
                Contact me
              </a>
            </Link>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter='duration-200 ease-out'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='duration-100 ease-in'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        <Popover.Panel
          focus
          className='absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'
        >
          <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50'>
            <div className='pt-5 pb-6 px-5'>
              <div className='flex items-center justify-between'>
                <Link href='/projects'>
                  <a className='ml-3'>
                    <h1 className='text-lg font-medium text-gray-500 hover:text-gray-900'>
                      Projects
                    </h1>
                  </a>
                </Link>
                <div className='-mr-2 ml-auto'>
                  <Popover.Button className='bg-white rounded-md p-2 inline-flex text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none'>
                    <span className='sr-only'>Close menu</span>
                    <FeatherIcon icon='x'></FeatherIcon>
                  </Popover.Button>
                </div>
              </div>
              <div className='mt-6'>
                <nav className='grid grid-cols-2 gap-y-8'>
                  {projects.map((item) => (
                    <Link key={item.name} href={`/${item.href}`}>
                      <a
                        key={item.name}
                        className=' flex items-start transition duration-150 ease-in-out rounded-lg hover:bg-gray-50'
                      >
                        <div className='ml-4'>
                          <p className=' p-2 text-base font-medium text-gray-900'>
                            {item.name}
                          </p>
                        </div>
                      </a>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
            <div className='py-6 px-5 space-y-6'>
              <div className='grid grid-cols-2 gap-4'>
                <div className='flex items-center rounded-md hover:bg-gray-50'>
                  <Link
                    href='/blog'
                    className='text-base font-medium text-gray-900'
                  >
                    <div className='ml-4'>
                      <a className='p-2'>Blog posts</a>
                    </div>
                  </Link>
                </div>
                {extra.map((item) => {
                  if (item.name != 'Instagram') {
                    return (
                      <Link key={item.name} href={`/${item.href}`}>
                        <a
                          key={item.name}
                          className=' flex items-start transition duration-150 ease-in-out rounded-lg hover:bg-gray-50'
                        >
                          <div className='ml-4'>
                            <p className=' p-2 text-base font-medium text-gray-900'>
                              {item.name}
                            </p>
                          </div>
                        </a>
                      </Link>
                    );
                  } else {
                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        rel='noreferrer'
                        target={'_blank'}
                        className='flex items-start transition duration-150 ease-in-out rounded-lg hover:bg-gray-50'
                      >
                        <div className='ml-4'>
                          <p className='p-2 text-base font-medium text-gray-900'>
                            {item.name}
                          </p>
                        </div>
                      </a>
                    );
                  }
                })}
              </div>
              <div>
                <Link href='/contact-me'>
                  <a className='w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-bl from-gray-700 via-gray-900 to-black'>
                    Contact me
                  </a>
                </Link>
                <p className='mt-6 text-center text-base font-medium text-gray-500'>
                  Want to get to know me better?{' '}
                  <Link href='/about'>
                    <a className='text-indigo-600 hover:text-indigo-500'>
                      About me
                    </a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
