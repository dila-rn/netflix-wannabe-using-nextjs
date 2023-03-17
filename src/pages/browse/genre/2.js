import NavbarPublic from '@/components/NavbarPublic'
import Head from 'next/head'
import { useEffect, useState } from 'react';

export default function Movies() {
  const [scrolled, setScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState('Movies')

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <>
      <Head>
        <title>Movies - Dilflix</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavbarPublic scroll={scrolled} currentPage={currentPage} />
    </>
  )
}
