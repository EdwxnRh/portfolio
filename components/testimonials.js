import { useState } from 'react';
import FeatherIcon from 'feather-icons-react';

const testimonials = [
  {
    author: 'Paul Bennewitz',
    position: 'CEO of Trimdu',
    fb: 'Edwin is a great attentive designer, who not only has good ideas on his own but also responded well to our wishes. With him, we have created a user-friendly platform with wich we are very satisfied.',
  },
  {
    author: 'Calvin Mende',
    position: 'CTO of Trimdu',
    fb: 'Edwin is a creative designer who puts a lot of effort into his projects. He works hard and delivers fast. In the last years I had the opportunity to watch Edwin grow and improve his skill set a lot. He gets better every day and I am looking forward to do business with him again, as friend and business partner.',
  },
  {
    author: 'ad a',
    position: 'CTO of dadad',
    fb: 'llorem ips aia doihahiod ihaodp ihodaihp odihpa iphadiph apihdiphaphi phiadphi ahipdphi ahpid iphad iphadi hpadihpahipd ahdiaodhaoud haou dhaod haiudha uidha',
  },
];

export default function Testimonials() {
  const [i, setI] = useState(0);

  const increaseTesti = () => {
    if (i >= testimonials.length - 1) setI(0);
    else setI(i + 1);
  };
  const decreaseTesti = () => {
    if (i === 0) setI(testimonials.length - 1);
    else setI(i - 1);
  };

  return (
    <div className='bg-gray-50 border w-full py-16 px-6 sm:px-10 absolute left-0 text-center grid place-items-center'>
      <div className='relative max-w-xl mx-auto px-8 text-gray-500 text-base font-medium  cursor-default'>
        <div>
          <p className='mb-4'>{testimonials[i].fb}</p>
          <div>
            <p className='w-fit mx-auto'>
              {testimonials[i].author} - {testimonials[i].position}
            </p>
          </div>
        </div>
        <div className='hidden md:inline absolute -left-16 top-1/2 hover:text-gray-900'>
          <div
            className='cursor-pointer'
            onClick={() => {
              decreaseTesti();
            }}
          >
            <FeatherIcon icon='arrow-left' size='16'></FeatherIcon>
          </div>
        </div>
        <div className='grid place-items-center mt-6 md:mt-0 md:absolute -right-16 top-1/2 hover:text-gray-900'>
          <div
            className='cursor-pointer '
            onClick={() => {
              increaseTesti();
            }}
          >
            <FeatherIcon icon='arrow-right' size='16'></FeatherIcon>
          </div>
        </div>
      </div>
    </div>
  );
}
