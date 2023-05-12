export const metadata = {
  title: 'Sit Here',
  description: 'Create a dynamic seating plan for your workplace with AI',
  icons: {
    icon: '/favicon/favicon-32x32.png',
  },
  openGraph: {
    title: 'Sit Here',
    description: 'Create a dynamic seating plan for your workplace with AI',
    url: 'https://sit-here.vercel.app/',
    siteName: 'Sit Here',
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

import Cta from '@/components/cta';
import Faqs from '@/components/faqs';
import Hero from '@/components/hero';
import Section01 from '@/components/section-01';
import Section02 from '@/components/section-02';
import Section03 from '@/components/section-03';
import Section04 from '@/components/section-04';
import Section05 from '@/components/section-05';
import Section06 from '@/components/section-06';
import Section07 from '@/components/section-07';

export default function Home() {
  return (
    <>
      <Hero />
      <Section01 />
      <Section02 />
      <Section03 />
      <Section04 />
      <Section05 />
      <Section06 />
      <Section07 />
      <Faqs />
      <Cta />
    </>
  );
}
