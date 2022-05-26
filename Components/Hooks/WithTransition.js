import { motion } from "framer-motion";
import styles from "./WithTransition.module.css";

const WithTransition = (OriginalComponent) => {
  return () => (
    <>
      <OriginalComponent />
      <motion.div
        className={styles.slideIn}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 3, ease: "easeInOut" }}
      />
      <motion.div
        className={styles.slideOut}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 3, ease: "easeInOut" }}
      />
    </>
  );
};

export default WithTransition;
