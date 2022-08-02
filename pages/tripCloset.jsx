import {
  Container,
  TopContainer,
  Hero,
  Heading,
  FlexRow,
  CaseInfo,
  FixedImage,
} from "../components/casestudies/tripcloset/styled/styledTripCloset";
import CaseLinks from "../components/casestudies/shared/caseLinks";
import Head from "next/head";
import Arrow from "../components/casestudies/shared/arrow";
import Process from "../components/casestudies/tripcloset/process";
import AccordionContent from "../components/casestudies/tripcloset/accordionSection";
import Learned from "../components/casestudies/tripcloset/learnSection";
import Persona from "../components/casestudies/tripcloset/persona";
import { tripCases } from "../components/casestudies/shared/caseLinksData";

import {
  MoreWork,
  Wrapper,
  Title,
} from "../components/casestudies/shared/styled/styledCaseLinks";
import Wireframe from "../components/casestudies/tripcloset/wireframe";
import DesignSystem from "../components/casestudies/tripcloset/designSystem";
import Prototyping from "../components/casestudies/tripcloset/prototyping";

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

      {/* Page */}
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
        <FixedImage />
        <Process />
        <Persona />
        <Wireframe />
        <DesignSystem />
        <Prototyping />
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
