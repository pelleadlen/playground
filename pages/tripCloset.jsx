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
  ImageContainer,
  ProcessInformation,
  Process,
  ProcessText,
  LearnSection,
  LearnTitle,
  LearnParagraph,
  TextWrapper,
  MoreWork,
  TopContainer,
} from "../styles/styledCaseStudies";

import Image from "next/image";
import { RevealUp, transition } from "../components/hooks/animation";
import { tripClosetData } from "../components/cases/content";
import Accordion from "../components/cases/accordion";
import {
  AccordionWrap,
  Paragraph,
  Quote,
  QuoteLarge,
  Title,
} from "../styles/styledTripCloset";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import Link from "next/link";
import Marquee from "../components/work/marquee";
import CaseLinks from "../components/cases/caseLinks";
import Head from "next/head";

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
        <Link scroll={false} href="/#work" as="/">
          <a>
            <IoArrowBackCircleSharp className="w-9 h-9 fixed top-4 right-4 cursor-pointer md:top-6 md:right-6 z-50 mix-blend-difference text-white" />
          </a>
        </Link>

        <TopContainer>
          <Hero>
            <Heading
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
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
        </TopContainer>

        <AccordionSection>
          <AccordionWrap>
            <RevealUp>
              <Title>Concept</Title>
              <Paragraph>
                Trip closet is an AI generated clothing rental for digital
                nomads. We generate what clothes you need on your trip by
                answering a few questions. We look at your destination, the
                weather and what activities you want to do. Travel without a bag
                and rent apparel that was made to last.
              </Paragraph>
            </RevealUp>
          </AccordionWrap>

          {tripClosetData.map(({ title, content }, i) => (
            <Accordion key={i} title={title} content={content} />
          ))}
        </AccordionSection>
        <ImageContainer>
          <Image
            className="object-cover"
            layout="fill"
            alt="three iphones floating"
            src="/Assets/Images/trip3iphones.png"
          />
        </ImageContainer>

        <Process>
          <Marquee marqueeText="Process Process Process Process Process Process Process Process Process Process Process Process Process Process Process Process Process Process Process Process Process" />

          <ProcessText>
            <RevealUp>
              <ProcessInformation
                method="Empathize"
                methodInformation="I started out with user research and conducted interviews with people about their shopping habits and got a better understanding of my target audience. I then organized the data, developed key findings and built personas."
              />
              <ProcessInformation
                method="Ideate"
                methodInformation="During this part of the project I worked with crazy 8's and other problem solving techniques to come up with many different ideas"
              />
              <ProcessInformation
                method="Prototype"
                methodInformation="I started with lo-fidelity wireframes to prototype my ideas and test them, then moved on to high-fidelity wireframes to test more in depth."
              />
              <ProcessInformation
                method="Test"
                methodInformation="10+ user tests with Maze and got valuable feedback and suggestions. Especially on the onboarding part."
              />
              <ProcessInformation
                method="Iterate"
                methodInformation="iterating … iterating … iterating …"
              />
            </RevealUp>
          </ProcessText>
        </Process>
        <Quote>
          <RevealUp cascade={true}>
            <QuoteLarge>
              ”Increased circularity means less material. The goal is not to
              recycle but to reuse.”
              <span>
                Quote from interview with Emma Ingo @ textile startup vividye
              </span>
            </QuoteLarge>
          </RevealUp>
        </Quote>
        <div className="flex justify-center w-full h-screen p-6">
          <div className="grid grid-cols-1 max-w-[1440px] lg:grid-cols-12 grid-flow-row lg:grid-rows-2 gap-6 w-full h-full ">
            <div className=" bg-indigo-500 col-span-6 rounded-3xl" />
            <div className=" bg-green-500 col-span-6 rounded-3xl" />
            <div className=" bg-orange-500 row-start-2 col-span-6 rounded-3xl" />
            <div className="col-span-6 grid grid-cols-1 grid-rows-2 gap-6 rounded-3xl">
              <div className="bg-indigo-500 rounded-3xl w-full h-full" />
              <div className="bg-indigo-500 rounded-3xl w-full h-full" />
            </div>
          </div>
        </div>

        {/* <ImageContainer>
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

        <LearnSection>
          <RevealUp>
            <TextWrapper>
              <LearnTitle>What did I learn?</LearnTitle>
              <LearnParagraph>
                This project was really fun to work on. I learned a lot and
                especially about the importance of user testing and learning
                from my mistakes. As a user experience designer, I’m always
                looking for new tools to make my design process better. For the
                user testing I did a deep dive into Maze. An amazing app that
                makes it easy to get quick feedback from real people. And for
                prototyping, I used Protopie where I could implement some logic
                into the onboarding process which was important during the
                testings. If you like this idea — let's make it!
              </LearnParagraph>
            </TextWrapper>
          </RevealUp>
        </LearnSection>

        <MoreWork>
          <div className=" w-full lg:w-1/2">
            <LearnTitle>More work</LearnTitle>
            <CaseLinks
              title="Fourtrack"
              category="Product design"
              href="/fourtrack"
            />
            <CaseLinks
              title="Our Legacy"
              category="Redesign"
              href="/ourlegacy"
            />
            <CaseLinks
              title="Forgetful"
              category="Micro interactions"
              href="/forgetful"
            />
          </div>
        </MoreWork> */}
      </Container>
    </>
  );
};

TripCloset.displayName = "TripCloset";
export default TripCloset;
