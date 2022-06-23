import {
  Heading,
  CaseInfo,
  FlexRow,
  Container,
  Hero,
  MoreWork,
  LearnTitle,
} from "../styles/styledCaseStudies";

import {
  ImageContainer,
  Paragraph,
  ParagraphSpan,
  Top,
  Info,
  ImageRow,
  About,
  Video,
} from "../styles/styledFourtrack";
import Link from "next/link";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import Image from "next/image";
import dynamic from "next/dynamic";
import CaseLinks from "../components/cases/caseLinks";
import { RevealUp } from "../components/hooks/animation";
import Head from "next/head";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const fourtrack = () => {
  return (
    <>
      <Head>
        <title>Fourtrack</title>
        <meta
          name="description"
          content="Fourtrack is a browser based studio where you can collaborate effortlessly when making music. "
        />
      </Head>
      <Container
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Link scroll={false} href="/">
          <a>
            <IoArrowBackCircleSharp className="w-9 h-9 fixed top-4 right-4 cursor-pointer md:top-6 md:right-6 z-50 mix-blend-difference text-white" />
          </a>
        </Link>
        <Top>
          <Hero>
            <Heading
              initial={{ opacity: 0, y: 24, rotate: 2 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Fourtrack
            </Heading>
            <FlexRow>
              <CaseInfo title="Role" subtitle="Product designer" />
              <CaseInfo title="Team" subtitle="David Neråfors" />
              <CaseInfo title="Year" subtitle="2022" />
            </FlexRow>
          </Hero>
        </Top>

        <ImageContainer>
          <Image
            className="object-cover"
            layout="fill"
            alt="mockup of chrome browser with fourtrack UI on it"
            src="/Assets/Images/fourtrack-browser.png"
          />
        </ImageContainer>

        <Info>
          <RevealUp>
            <Paragraph>
              <ParagraphSpan>Info</ParagraphSpan> Fourtrack is a browser based
              tape recorder made by me and David Neråfors. It's for those who
              want to record an idea fast. No need to connect to a DAW and set
              up inputs, or find your cables; just record straight into your
              browser. Share your recordings with your friends and record on the
              fly.
            </Paragraph>
          </RevealUp>
        </Info>

        <ImageRow>
          <ImageContainer>
            <Image
              className="object-cover rounded-3xl"
              layout="fill"
              alt="closeup of fourtracks audio channels"
              src="/Assets/Images/fourtrack_channel_closeup.png"
            />
          </ImageContainer>
          <ImageContainer>
            <Image
              className="object-cover rounded-3xl"
              layout="fill"
              alt="closeup of fourtracks effects chain"
              src="/Assets/Images/fourtrack_effects_closeup.png"
            />
          </ImageContainer>
        </ImageRow>

        <About>
          <RevealUp cascade={true}>
            <Paragraph>
              <ParagraphSpan>Problem</ParagraphSpan> The idea came up when we
              where discussing the problem with recording music. It's always a
              hassle to get started and you can easily forget the idea when you
              are given to many options of a regular DAW. We wanted to make
              something easy that everybody could use.
            </Paragraph>

            <Paragraph>
              <ParagraphSpan>Solution</ParagraphSpan> A cloud based studio that
              you can use wherever you are. Simple to use interface and color
              coded visuals. Sometimes creativity needs some boundaries . You
              only got four channels, exactly like an old porta studio. We even
              include some standard effects. This doesn´t replace a whole
              studio, but the purpose is to write music like we used to and make
              it easy and more accessible.
            </Paragraph>
          </RevealUp>
        </About>

        <Video>
          <ReactPlayer
            width="100%"
            height="100%"
            controls={true}
            url="https://vimeo.com/702419377"
          />
        </Video>
        <div className="w-full pb-12 md:w-1/2 pl-4 md:pl-6">
          <ParagraphSpan>
            this project is currently under development. First version is
            planned to be released in 2023. More info soon!
          </ParagraphSpan>
        </div>

        <MoreWork>
          <div className=" w-full lg:w-1/2">
            <LearnTitle>More work</LearnTitle>

            <CaseLinks
              title="Our Legacy"
              category="Redesign"
              href="/ourlegacy"
            />
            <CaseLinks
              title="Trip Closet"
              category="Product design"
              href="/tripCloset"
            />
            <CaseLinks
              title="Forgetful"
              category="Micro interactions"
              href="/"
            />
          </div>
        </MoreWork>
      </Container>
    </>
  );
};

export default fourtrack;
