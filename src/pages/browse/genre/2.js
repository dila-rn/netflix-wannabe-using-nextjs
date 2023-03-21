import NavbarPublic from '@/components/NavbarPublic';
import Head from 'next/head';

export default function Movies() {

  return (
    <>
      <Head>
        <title>Movies - Dilflix</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavbarPublic currentPage='Movies' />
    </>
  )
}
