import Chair from '@/public/images/chair.png';
import EffectFade from 'swiper';
import HeroCard from '@/public/images/hero-card.png';
import Illustration from '@/public/images/hero-illustration.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className='relative'>
      {/* Bg */}
      <div
        className='absolute inset-0 rounded-bl-[100px] mb-28 md:mb-0 bg-gradient-to-tr from-blue-600 to-blue-500 pointer-events-none -z-10'
        aria-hidden='true'
      />

      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        <div className='pt-36 md:pt-40 md:pb-20'>
          {/* Hero content */}
          <div className='relative max-w-xl mx-auto md:max-w-none text-center md:text-left'>
            {/* Content */}
            <div className='md:w-[600px]'>
              {/* Copy */}
              <h1
                className='h1 text-white mb-6'
                data-aos='fade-up'
                data-aos-delay='100'
              >
                Create a dynamic seating plan for your workplace with{' '}
                <span className='relative inline-flex items-center justify-center'>
                  <svg
                    style={{ transform: 'scale(4)' }}
                    className='absolute -z-10 scale-200'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      fill='#7dd3fc57'
                      d='M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z'
                      clipRule='evenodd'
                    />
                  </svg>
                  AI
                </span>
              </h1>
              <p
                className='text-lg text-blue-200 mb-8'
                data-aos='fade-up'
                data-aos-delay='200'
              >
                Through advanced AI pairing algorithms, we pair your employees
                <br className='hidden md:block' /> and create the most optimal
                and efficient seating plan.
              </p>

              {/* Buttons */}
              <div
                className='max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-12 md:mb-0'
                data-aos='fade-up'
                data-aos-delay='300'
              >
                <div>
                  <Link
                    className='btn-sm w-full inline-flex items-center text-slate-100 bg-slate-800 hover:bg-slate-900 group shadow-sm'
                    href='/apply'
                  >
                    Try now!
                    <span className='tracking-normal text-sky-400 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-2'>
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
            </div>

            {/* Image */}
            <div className='max-w-sm mx-auto md:max-w-none md:absolute md:left-[600px] md:top-0 -mb-12 md:-mt-12 md:mb-0'>
              <div className='relative -ml-3 -mr-24 md:mx-0'>
                <Image
                  className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 mt-16 md:mt-0 pointer-events-none -z-10 max-w-none mix-blend-lighten'
                  src={Illustration}
                  priority
                  alt='Hero illustration'
                  aria-hidden='true'
                />
                <Image
                  src={Chair}
                  className='md:max-w-none absolute z-10 hovering-element'
                  height='600'
                  alt='Credit card'
                  data-aos='fade-up'
                />
                <Image
                  src={HeroCard}
                  className='md:max-w-none'
                  height='600'
                  alt='Credit card'
                  data-aos='fade-up'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
