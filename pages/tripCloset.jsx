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
import { Overlay } from "../styles/styledWork";
import Image from "next/image";
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
          <Overlay
            transition={{ ease: [0.65, 0.05, 0.36, 1], duration: 0.3 }}
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opactiy: 0 }}
          />

          <StartImage
            initial={{ height: "100vh", y: 0 }}
            animate={{ height: "60vh", y: "75vh" }}
            transition={transition}
          >
            <Image
              className="object-cover"
              layout="fill"
              src="/Assets/Images/tripcloset-banner.png"
            />
          </StartImage>
        </SecondRow>

        <div className="h-screen bg-black"></div>
      </Container>
    </>
  );
};
export default TripCloset;
