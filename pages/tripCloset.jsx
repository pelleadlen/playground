import {
  Heading,
  CaseInfo,
  FlexRow,
  TopRow,
  Container,
  StartImage,
  Hero,
  SecondRow,
  AccordionSection,
} from "../styles/styledCaseStudies";
import { Overlay } from "../styles/styledWork";
import Image from "next/image";
import { transition } from "../components/hooks/animation";
import { tripClosetData } from "../components/cases/content";
import Accordion from "../components/cases/accordion";
import { AccordionWrap, Paragraph, Title } from "../styles/styledTripCloset";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import Link from "next/link";
const TripCloset = () => {
  return (
    <>
      <Container>
        <Link href="/">
          <IoArrowBackCircleSharp className="w-9 h-9 fixed top-4 right-4 cursor-pointer md:top-6 md:right-6   z-50 mix-blend-difference text-white " />
        </Link>
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
              <CaseInfo title="Work" subtitle="App concept" />
              <CaseInfo title="Year" subtitle="2022" />
            </FlexRow>
          </Hero>
        </TopRow>

        <SecondRow
          transition={transition}
          initial={{ padding: "1.5rem" }}
          animate={{ padding: "0rem" }}
        >
          <Overlay
            transition={{ ease: [0.65, 0.05, 0.36, 1], duration: 0.5 }}
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opactiy: 0 }}
          />

          <StartImage
            initial={{ height: "100vh", y: 0 }}
            animate={{ height: "75vh", y: "75vh" }}
            transition={transition}
          >
            <Image
              className="object-cover"
              layout="fill"
              src="/Assets/Images/tripcloset-banner.png"
            />
          </StartImage>
        </SecondRow>

        <AccordionSection>
          <AccordionWrap>
            <Title>Concept</Title>
            <Paragraph>
              Trip closet is an AI generated clothing rental for digital nomads.
              We generate what clothes you need on your trip by answering a few
              questions. We look at your destination, the weather and what
              activities you want to do. Travel without a bag and rent apparel
              that was made to last.
            </Paragraph>
          </AccordionWrap>
          {tripClosetData.map(({ title, content }) => (
            <Accordion title={title} content={content} />
          ))}
        </AccordionSection>
      </Container>
    </>
  );
};
export default TripCloset;
