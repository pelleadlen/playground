import "../styles/globals.css";
import App from "next/app";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import SmoothScroll from "../components/hooks/smoothScroll";

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <>
        <Head>
          <title>Pelle Adlén</title>
          <meta
            name="description"
            content="Pelle Adlén is a digital product designer & ui developer focused on creating the best user experiences"
          />

          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1"
          />

          <link rel="icon" href="/favicon.ico" />
        </Head>
        <AnimatePresence
          exitBeforeEnter
          onExitComplete={() => {
            if (typeof window !== "undefined") {
              window.scrollTo({ top: 0 });
            }
          }}
        >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </>
    );
  }
}

export default MyApp;
