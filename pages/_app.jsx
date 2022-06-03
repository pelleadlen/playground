import "../styles/globals.css";
import { Navigation } from "../Components/Navigation/navigation";
import NavBar from "../Components/Navigation/navBar";
import { AnimatePresence } from "framer-motion";
import App from "next/app";
import Head from "next/head";

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
        {/* <Navigation>
          <NavBar />
        </Navigation> */}
        <AnimatePresence
          exitBeforeEnter
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </>
    );
  }
}

export default MyApp;
