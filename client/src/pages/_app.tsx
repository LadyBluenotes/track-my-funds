import { AppProps } from 'next/app';
import Head from 'next/head';
import Footer from '@/pages/components/layout/Footer';
import LandingNav from '@/pages/components/layout/LandingNav';
import '@/styles/globals.css';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Track My Funds</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta charSet='utf-8' />
      </Head>
        { /* 
          if user is logged in, render <Nav />
          else render <LandingNav />
          */ }
          <LandingNav />
          <Component {...pageProps} />
          {/* <Footer /> */}
    </>
  );
}