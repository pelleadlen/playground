import "../styles/globals.css";
import { ThemeProvider } from "styled-components";
import { AnimatePresence } from "framer-motion";
import Script from "next/script";
import * as gtag from "../lib/gtag";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { hotjar } from "react-hotjar";
import Head from "next/head";
import { theme } from "../styles/theme";
import { GlobalStyle } from "../styles/globalStyle";
import { lightTheme, darkTheme } from "../styles/theme";
import { ToggleSwitch } from "../components/casestudies/shared/toggleSwitch";

const MyApp = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState("light");

  const router = useRouter();
  const [history, setHistory] = useState("");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    hotjar.initialize(2865806, 6);
  }, []);

  useEffect(() => {
    switch (Component.displayName) {
      case "Index":
        break;
      default:
        window.scrollTo({ top: 0 });
        setHistory(Component.displayName);
    }
  }, [Component, history]);

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.on("hashChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      router.events.off("hashChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#f2f2f2" />
      </Head>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      <AnimatePresence exitBeforeEnter>
        <ToggleSwitch handleToggle={() => themeToggler()} />
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
          <GlobalStyle />
          <Component {...pageProps} key={router.route} history={history} />
        </ThemeProvider>
      </AnimatePresence>
    </>
  );
};

export default MyApp;
