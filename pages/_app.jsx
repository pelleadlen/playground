import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence
      onExitComplete={() => null}
      exitBeforeEnter={true}
      initial={false}
    >
      <Component {...pageProps} />
    </AnimatePresence>
  );
}

export default MyApp;
