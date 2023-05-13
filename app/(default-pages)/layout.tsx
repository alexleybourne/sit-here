'use client';

import 'aos/dist/aos.css';

import AOS from 'aos';
import Footer from '@/components/ui/footer';
import Header from '@/components/ui/header';
import { useEffect } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });

  return (
    <>
      <Header />

      <main className='grow'>{children}</main>

      <Footer />
    </>
  );
}
