import CSVUploader from '@/components/dashboard/csvuploader';
import Footer from '@/components/ui/footer';
import Header from '@/components/ui/header';
import Illustration from '@/public/images/hero-illustration.svg';
import Image from 'next/image';
import Link from 'next/link';
import LogoDisney from '@/public/images/logo-disney.svg';
import LogoFacebook from '@/public/images/logo-facebook.svg';
import LogoNike from '@/public/images/logo-nike.svg';
import LogoSamsung from '@/public/images/logo-samsung.svg';

export const metadata = {
  title: 'Sit Here - Dashboard',
  description: 'Sit Here seating builder dashboard',
  icons: {
    icon: '/favicon/favicon-32x32.png',
  },
  openGraph: {
    title: 'Sit Here - Dashboard',
    description: 'Sit Here seating builder dashboard',
    url: 'https://sit-here.vercel.app/dashboard',
    siteName: 'Sit Here - Dashboard',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 628,
      },
    ],
    locale: 'en-AU',
    type: 'website',
  },
};

export default function Dashboard() {
  return (
    <>
      <Header hideButton solid title='Dashboard' />
      <div className='flex min-h-screen pt-20'>
        <div className='w-1/6 bg-gray-200 p-4'>
          <nav>
            <ul className='space-y-2'>
              <li>
                <a href='#' className='text-blue-500 hover:text-blue-600'>
                  Option 1
                </a>
              </li>
              <li>
                <a href='#' className='text-blue-500 hover:text-blue-600'>
                  Option 2
                </a>
              </li>
              <li>
                <a href='#' className='text-blue-500 hover:text-blue-600'>
                  Option 3
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className='w-5/6 bg-gray-100 p-4'>
          <h1 className='text-xl font-bold'>Main Dashboard</h1>
          {/* Add your main dashboard content here */}
          <CSVUploader />
        </div>
      </div>
    </>
  );
}
