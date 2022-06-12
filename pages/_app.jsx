import "../styles/globals.css";
import App from "next/app";
import Head from "next/head";
import { ParallaxProvider } from "react-scroll-parallax";
import { AnimatePresence } from "framer-motion";

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <>
        <Head>
          <title>Pelle Adlén</title>
          <meta
            name="description"
            content="Pelle Adlén is a digital product designer focused on creating the best user experiences"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <AnimatePresence exitBeforeEnter>
          <ParallaxProvider>
            <Component {...pageProps} key={router.route} />
          </ParallaxProvider>
        </AnimatePresence>
      </>
    );
  }
}

export default MyApp;
