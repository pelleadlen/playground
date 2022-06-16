import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Overlay, OverlayText } from "../../styles/styledWork";

export const CaseCard = ({ alt, src, href }) => {
  return (
    <Link scroll={false} href={href}>
      <a>
        <motion.div
          transition={{ ease: [0.65, 0.05, 0.36, 1] }}
          initial={{ borderRadius: "1.5rem" }}
          whileHover={{ borderRadius: 0 }}
          className="relative w-full h-screen overflow-hidden"
        >
          <Overlay
            transition={{ ease: [0.65, 0.05, 0.36, 1], duration: 0.3 }}
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            <OverlayText>Hejhej</OverlayText>
          </Overlay>

          <Image className=" object-cover" layout="fill" alt={alt} src={src} />
        </motion.div>
      </a>
    </Link>
  );
};
