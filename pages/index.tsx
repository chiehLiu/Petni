import type { NextPage } from 'next';

import Head from 'next/head';
import HomePage from '../components/layouts/Home';
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>PetNi</title>
        <meta name="description" content="PetNi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage/>
    </>
  );
};

export default Home;
