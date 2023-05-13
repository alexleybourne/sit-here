import Illustration from '@/public/images/footer-illustration.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const link = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
  return (
    <footer className='relative'>
      {/* Bg */}
      <div className='absolute inset-0 bg-slate-800 -z-10' aria-hidden='true' />

      {/* Illustration */}
      <div
        className='absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none -z-10'
        aria-hidden='true'
      >
        <Image
          className='max-w-none'
          src={Illustration}
          alt='Footer illustration'
        />
      </div>

      <div className='max-w-6xl mx-auto px-4 sm:px-6'>
        {/* Blocks */}
        <div className='grid sm:grid-cols-12 lg:grid-cols-10 gap-8 py-8 border-t border-slate-700'>
          {/* 1st block */}
          <div className='sm:col-span-12 lg:col-span-2 lg:max-w-xs'>
            {/* Logo */}
            <Link className='block' href='/' aria-label='Home'>
              <svg
                width='80'
                viewBox='0 0 368 230'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M50 69C37.2975 69 27 58.9264 27 46.5C27 34.0736 37.2975 24 50 24C62.7025 24 73 34.0736 73 46.5C73 58.9264 62.7025 69 50 69Z'
                  fill='white'
                />
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M120 122.588L109.485 133.722L75.4639 99.0824V203H60V152.278H45.1546V203H29.6907V137.433C29.6907 137.433 0 137.433 0 107.742C0 78.0515 29.6907 78.0515 29.6907 78.0515H75.4639L120 122.588ZM28.4536 91.663V122.565C28.4536 122.565 11.8455 123.826 11.1535 107.429C10.4615 91.0323 28.4536 91.663 28.4536 91.663Z'
                  fill='white'
                />
                <path
                  d='M146.274 81.2139C146.274 79.9964 146.095 78.9043 145.737 77.9375C145.379 76.9349 144.717 76.0039 143.75 75.1445C142.783 74.2852 141.386 73.4258 139.56 72.5664C137.77 71.6712 135.407 70.7402 132.47 69.7734C129.033 68.6276 125.721 67.3385 122.534 65.9062C119.347 64.4382 116.5 62.7373 113.994 60.8037C111.487 58.8343 109.5 56.5426 108.032 53.9287C106.564 51.279 105.83 48.1995 105.83 44.6904C105.83 41.3245 106.582 38.2988 108.086 35.6133C109.59 32.8919 111.684 30.5824 114.37 28.6846C117.091 26.751 120.278 25.2829 123.93 24.2803C127.583 23.2419 131.575 22.7227 135.908 22.7227C141.637 22.7227 146.686 23.7253 151.054 25.7305C155.459 27.6999 158.896 30.5107 161.367 34.1631C163.873 37.7796 165.127 42.0586 165.127 47H146.382C146.382 45.0306 145.97 43.2939 145.146 41.79C144.358 40.2861 143.159 39.1045 141.548 38.2451C139.936 37.3857 137.913 36.9561 135.478 36.9561C133.115 36.9561 131.128 37.3141 129.516 38.0303C127.905 38.7464 126.688 39.7132 125.864 40.9307C125.04 42.1123 124.629 43.4193 124.629 44.8516C124.629 46.0332 124.951 47.1074 125.595 48.0742C126.276 49.0052 127.225 49.8825 128.442 50.7061C129.695 51.5296 131.199 52.3174 132.954 53.0693C134.744 53.8213 136.749 54.5553 138.969 55.2715C143.123 56.5964 146.811 58.0824 150.034 59.7295C153.292 61.3408 156.032 63.1849 158.252 65.2617C160.508 67.3027 162.208 69.6302 163.354 72.2441C164.536 74.8581 165.127 77.8122 165.127 81.1064C165.127 84.6156 164.446 87.7308 163.086 90.4521C161.725 93.1735 159.774 95.4831 157.231 97.3809C154.689 99.2428 151.645 100.657 148.1 101.624C144.555 102.591 140.599 103.074 136.23 103.074C132.22 103.074 128.263 102.573 124.36 101.57C120.493 100.532 116.984 98.9564 113.833 96.8438C110.682 94.6953 108.157 91.9561 106.26 88.626C104.398 85.2601 103.467 81.2676 103.467 76.6484H122.373C122.373 78.9401 122.677 80.8737 123.286 82.4492C123.895 84.0247 124.79 85.2959 125.971 86.2627C127.153 87.1937 128.603 87.874 130.322 88.3037C132.041 88.6976 134.01 88.8945 136.23 88.8945C138.629 88.8945 140.563 88.5544 142.031 87.874C143.499 87.1579 144.573 86.2269 145.254 85.0811C145.934 83.8994 146.274 82.6104 146.274 81.2139ZM194.883 23.7969V102H176.084V23.7969H194.883ZM244.404 23.7969V102H225.552V23.7969H244.404ZM267.929 23.7969V38.3525H202.563V23.7969H267.929Z'
                  fill='white'
                />
                <path
                  d='M232.849 188.498V203H191.169V188.498H232.849ZM197.883 124.797V203H179.03V124.797H197.883ZM227.478 155.842V169.86H191.169V155.842H227.478ZM233.01 124.797V139.353H191.169V124.797H233.01ZM240.583 124.797H271.359C277.375 124.797 282.603 125.692 287.043 127.482C291.483 129.273 294.903 131.923 297.302 135.432C299.737 138.941 300.954 143.273 300.954 148.43C300.954 152.906 300.256 156.647 298.859 159.655C297.463 162.663 295.511 165.152 293.005 167.121C290.534 169.055 287.652 170.648 284.357 171.901L278.181 175.393H252.346L252.238 160.837H271.359C273.758 160.837 275.746 160.407 277.321 159.548C278.897 158.688 280.078 157.471 280.866 155.896C281.69 154.284 282.102 152.368 282.102 150.148C282.102 147.893 281.69 145.959 280.866 144.348C280.043 142.736 278.825 141.501 277.214 140.642C275.638 139.782 273.687 139.353 271.359 139.353H259.436V203H240.583V124.797ZM283.391 203L266.096 168.41L286.076 168.303L303.586 202.194V203H283.391ZM366.159 188.498V203H324.479V188.498H366.159ZM331.193 124.797V203H312.341V124.797H331.193ZM360.788 155.842V169.86H324.479V155.842H360.788ZM366.32 124.797V139.353H324.479V124.797H366.32Z'
                  fill='white'
                />
                <path d='M165 125H147V203H165V125Z' fill='white' />
                <path d='M124 158H106V203H124V158Z' fill='white' />
                <path d='M147 176V158H106V176H147Z' fill='white' />
              </svg>
            </Link>
          </div>

          {/* 2nd block */}
          <div className='sm:col-span-6 md:col-span-3 lg:col-span-2'>
            <h6 className='text-sm text-slate-100 font-bold mb-3'>
              Essentials
            </h6>
            <ul className='text-sm font-[450] space-y-2'>
              <li>
                <a
                  className='text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out'
                  href={link}
                  target='_blank'
                >
                  Sit Here
                </a>
              </li>
              <li>
                <a
                  className='text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out'
                  href={link}
                  target='_blank'
                >
                  Seat analytics
                </a>
              </li>
              <li>
                <a
                  className='text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out'
                  href={link}
                  target='_blank'
                >
                  Best chairs
                </a>
              </li>
              <li>
                <a
                  className='text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out'
                  href={link}
                  target='_blank'
                >
                  Why are you reading this?
                </a>
              </li>
              <li>
                <a
                  className='text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out'
                  href={link}
                  target='_blank'
                >
                  Seriously why?
                </a>
              </li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className='sm:col-span-6 md:col-span-3 lg:col-span-2'>
            <h6 className='text-sm text-slate-100 font-bold mb-3'>Company</h6>
            <ul className='text-sm font-[450] space-y-2'>
              <li>
                <a
                  className='text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out'
                  href={link}
                  target='_blank'
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  className='text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out'
                  href={link}
                  target='_blank'
                >
                  Diversity / Inclusion
                </a>
              </li>
              <li>
                <a
                  className='text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out'
                  href={link}
                  target='_blank'
                >
                  Sustainability
                </a>
              </li>
              <li>
                <a
                  className='text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out'
                  href={link}
                  target='_blank'
                >
                  Code of conduct
                </a>
              </li>
              <li>
                <a
                  className='text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out'
                  href={link}
                  target='_blank'
                >
                  Financial statements
                </a>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className='sm:col-span-6 md:col-span-3 lg:col-span-2'>
            <h6 className='text-sm text-slate-100 font-bold mb-3'>Lifestyle</h6>
            <ul className='text-sm font-[450] space-y-2'>
              <li>
                <a
                  className='text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out'
                  href={link}
                  target='_blank'
                >
                  International products
                </a>
              </li>
              <li>
                <a
                  className='text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out'
                  href={link}
                  target='_blank'
                >
                  Currency exchange
                </a>
              </li>
              <li>
                <a
                  className='text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out'
                  href={link}
                  target='_blank'
                >
                  Lounge & Smart delay
                </a>
              </li>
            </ul>
          </div>

          {/* 5th block */}
          <div className='sm:col-span-6 md:col-span-3 lg:col-span-2'>
            <h6 className='text-sm text-slate-100 font-bold mb-3'>Company</h6>
            <ul className='text-sm font-[450] space-y-2'>
              <li>
                <a
                  className='text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out'
                  href={link}
                  target='_blank'
                >
                  Send us an email
                </a>
              </li>
              <li>
                <a
                  className='text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out'
                  href={link}
                  target='_blank'
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  className='text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out'
                  href={link}
                  target='_blank'
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  className='text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out'
                  href={link}
                  target='_blank'
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  className='text-slate-400 hover:text-blue-500 transition duration-150 ease-in-out'
                  href={link}
                  target='_blank'
                >
                  TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom area */}
        <div className='pb-4 md:pb-8'>
          <div className='text-xs text-slate-500'>
            We're no strangers to love You know the rules and so do I (do I) A
            full commitment's what I'm thinking of You wouldn't get this from
            any other guy I just wanna tell you how I'm feeling Gotta make you
            understand Never gonna give you up Never gonna let you down Never
            gonna run around and desert you Never gonna make you cry Never gonna
            say goodbye Never gonna tell a lie and hurt you.
          </div>
        </div>
      </div>
    </footer>
  );
}
