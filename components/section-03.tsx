import Features from '@/public/images/features-03.png';
import Image from 'next/image';
import Link from 'next/link';
import QuoteAuthor from '@/public/images/jeff.jpg';

export default function Section03() {
  return (
    <section className='mt-12 md:mt-20' data-aos-id-3>
      <div className='relative max-w-7xl mx-auto'>
        {/* Bg */}
        <div
          className='absolute inset-0 rounded-tl-[100px] mb-24 md:mb-0 bg-gradient-to-b from-slate-100 pointer-events-none -z-10'
          aria-hidden='true'
        />

        <div className='max-w-6xl mx-auto px-4 sm:px-6'>
          <div className='pb-6 pt-12 md:pt-20'>
            {/* Section content */}
            <div className='relative max-w-xl mx-auto md:max-w-none text-center md:text-left flex flex-col md:flex-row items-center justify-end'>
              {/* Content */}
              <div className='w-[512px] max-w-full shrink-0 md:order-1'>
                {/* Copy */}
                <h2
                  className='h2 mb-4'
                  data-aos='fade-up'
                  data-aos-anchor='[data-aos-id-3]'
                  data-aos-delay='100'
                >
                  Seating Redefined: Harness the potential of AI to create an
                  inspiring workspace.
                </h2>
                <p
                  className='text-lg text-slate-500 mb-8'
                  data-aos='fade-up'
                  data-aos-anchor='[data-aos-id-3]'
                  data-aos-delay='200'
                >
                  Improve employee productivity and engagement while also
                  creating a safe and healthy work environment.
                </p>

                {/* Button */}
                <div
                  className='max-w-xs mx-auto sm:max-w-none mb-8'
                  data-aos='fade-up'
                  data-aos-anchor='[data-aos-id-3]'
                  data-aos-delay='300'
                >
                  <div>
                    <Link
                      className='btn-sm inline-flex items-center text-blue-50 bg-blue-500 hover:bg-blue-600 group shadow-sm'
                      href='/dashboard'
                    >
                      Get started
                      <span className='tracking-normal text-sky-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-2'>
                        <svg
                          className='fill-current'
                          width='12'
                          height='10'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path d='M1 6.002h7.586L6.293 8.295a1 1 0 1 0 1.414 1.414l4-4a1 1 0 0 0 0-1.416l-4-4a1 1 0 0 0-1.414 1.416l2.293 2.293H1a1 1 0 1 0 0 2Z' />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>

                {/* Quote */}
                <div
                  className='flex max-w-md mx-auto md:mx-0 text-left'
                  data-aos='fade-up'
                  data-aos-anchor='[data-aos-id-3]'
                  data-aos-delay='300'
                >
                  <Image
                    className='rounded-full self-start shrink-0 mr-3'
                    src={QuoteAuthor}
                    width={32}
                    height={32}
                    alt='Quote author 02'
                  />
                  <div>
                    <blockquote className='text-slate-500 m-0'>
                      “The advanced algorithms pair employees based on various
                      factors, resulting in optimized collaboration and
                      productivity. A user-friendly interface and insightful
                      analytics make it a must-try tool for workspace
                      optimization. - Jeff”
                    </blockquote>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className='w-full max-w-sm md:max-w-none md:mr-8 mt-8 md:mt-0'>
                <div className='relative -mx-8 md:mx-0'>
                  <Image
                    src={Features}
                    className='md:max-w-none'
                    width={496}
                    height={496}
                    alt='Features 03'
                    data-aos='fade-up'
                    data-aos-anchor='[data-aos-id-3]'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
