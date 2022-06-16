import {
  Heading,
  CaseInfo,
  FlexRow,
  TopRow,
  Container,
  StartImage,
  Hero,
  SecondRow,
} from "../styles/styledCaseStudies";
import Image from "next/image";
import { motion } from "framer-motion";
import { transition } from "../components/hooks/animation";

const TripCloset = () => {
  return (
    <>
      <Container>
        <TopRow>
          <Hero>
            <Heading
              initial={{ opacity: 0, y: 24, rotate: 2 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Trip Closet
            </Heading>
            <FlexRow>
              <CaseInfo title="Category" subtitle="Product design" />
              <CaseInfo title="Client" subtitle="Concept App" />
              <CaseInfo title="Year" subtitle="2021" />
            </FlexRow>
          </Hero>
        </TopRow>

        <SecondRow
          transition={transition}
          initial={{ padding: "1.5rem" }}
          animate={{ padding: "0rem" }}
        >
          <StartImage
            initial={{ height: "100vh", y: 0 }}
            animate={{ height: "60vh", y: "80vh" }}
            transition={transition}
          >
            <Image
              className="object-cover"
              layout="fill"
              src="/Assets/Images/tripcloset-banner.png"
            />
          </StartImage>
        </SecondRow>
      </Container>
      <motion.div
        initial={{ backgroundColor: "white" }}
        animate={{ backgroundColor: "black" }}
        transition={{ duration: 1, delay: 2 }}
        className="h-[200vh] bg-black"
      >
        {" "}
        <h1 className="text-white">heyhey</h1>
      </motion.div>
      <div className="h-screen bg-blue"></div>
    </>
  );
};
export default TripCloset;
