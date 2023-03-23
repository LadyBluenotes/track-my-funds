import { AppProps } from "next/app";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";

import "@/styles/globals.css";
import Footer from "@/pages/components/layout/Footer";
import Nav from "@/pages/components/layout/Nav";

export default function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {

  return (
    <>
      <Head>
        <title>Track My Funds</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta charSet="utf-8" />
      </Head>
      <main
        id="main"
        className="bg-gradient-to-b from-white to-indigo-300 flex flex-col min-h-screen"
      >
        <SessionProvider session={session}>
          <Nav />
          <Component {...pageProps} />
          <Footer />
        </SessionProvider>
      </main>
    </>
  );
}
