import Image from "next/image";
import {
  Container,
  TopContainer,
  Hero,
  Heading,
  FlexRow,
  CaseInfo,
  ImageContainer,
} from "../components/casestudies/tripcloset/styled/styledTripCloset";
import CaseLinks from "../components/casestudies/shared/caseLinks";
import Head from "next/head";
import Arrow from "../components/casestudies/shared/arrow";
import Process from "../components/casestudies/tripcloset/process";
import AccordionContent from "../components/casestudies/tripcloset/accordionSection";
import Learned from "../components/casestudies/tripcloset/learnSection";
import Quote from "../components/casestudies/tripcloset/Quote";
import Persona from "../components/casestudies/tripcloset/persona";
import { tripCases } from "../components/casestudies/shared/caseLinksData";

import {
  MoreWork,
  Wrapper,
  Title,
} from "../components/casestudies/shared/styled/styledCaseLinks";

const TripCloset = () => {
  return (
    <>
      {/* SEO */}
      <Head>
        <title>Trip Closet</title>
        <meta
          name="description"
          content="A UX casestudy about the making of trip closet, the ai generated clothing rental app "
        />
      </Head>
      <Container exit={{ opacity: 0 }}>
        <Arrow href="#work" />
        <TopContainer>
          <Hero>
            <Heading
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Trip Closet
            </Heading>

            {/* CaseInfo */}
            <FlexRow>
              <CaseInfo title="Category" subtitle="Product design" />
              <CaseInfo title="Work" subtitle="App concept" />
              <CaseInfo title="Year" subtitle="2022" />
            </FlexRow>
          </Hero>
        </TopContainer>
        <AccordionContent />
        <ImageContainer>
          <Image
            className="object-cover"
            layout="fill"
            alt="three iphones floating"
            src="/Assets/Images/trip3iphones.png"
          />
        </ImageContainer>
        <Process />
        <Quote />
        <Persona />
        <ImageContainer>
          <Image
            alt="Wireframes and userflow charts"
            className="object-cover"
            layout="fill"
            src="/Assets/Images/tripwireframe.png"
          />
        </ImageContainer>
        <ImageContainer>
          <Image
            alt="component system"
            className="object-cover"
            layout="fill"
            src="/Assets/Images/tripstylesheet.png"
          />
        </ImageContainer>
        <video
          className="h-screen object-cover"
          muted
          playsInline
          loop
          autoPlay
        >
          <source src="/Assets/Videos/trip.mp4" type="video/mp4" />
        </video>
        <Learned />
        <MoreWork>
          <Wrapper>
            <Title>More work</Title>
            {tripCases.map(({ href, title, category }, i) => (
              <CaseLinks
                href={href}
                title={title}
                category={category}
                key={i}
              />
            ))}
          </Wrapper>
        </MoreWork>
      </Container>
    </>
  );
};

TripCloset.displayName = "TripCloset";
export default TripCloset;
