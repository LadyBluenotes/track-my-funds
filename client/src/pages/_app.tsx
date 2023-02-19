import { useState } from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import Footer from "@/pages/components/layout/Footer";
import LandingNav from "@/pages/components/layout/LandingNav";
import UserNav from "@/pages/components/layout/UserNav";
import "@/styles/globals.css";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

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
        className="bg-gradient-to-b from-white to-indigo-300 overflow-auto"
      >
        { // if user is logged in, render the user nav
        // if user is not logged in, render the landing nav
        }
        {/* <LandingNav /> */}
        <UserNav />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}
