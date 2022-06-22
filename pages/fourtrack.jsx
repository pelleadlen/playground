import {
  Heading,
  CaseInfo,
  FlexRow,
  Container,
  Hero,
} from "../styles/styledCaseStudies";
import {
  ImageContainer,
  Paragraph,
  ParagraphSpan,
  Top,
} from "../styles/styledFourtrack";
import Link from "next/link";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import Image from "next/image";
const fourtrack = () => {
  return (
    <>
      <Container exit={{ opacity: 0 }}>
        <Link scroll={false} href="/">
          <IoArrowBackCircleSharp className="w-9 h-9 fixed top-4 right-4 cursor-pointer md:top-6 md:right-6 z-50 mix-blend-difference text-white" />
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
            className="object-cover rounded-3xl"
            layout="fill"
            alt="mockup of chrome browser with fourtrack UI on it"
            src="/Assets/Images/fourtrack-browser.png"
          />
        </ImageContainer>

        <Paragraph>
          <ParagraphSpan>info</ParagraphSpan> Fourtrack is a browser based tape
          recorder made by me and David Neråfors. It's for those who want to
          record an idea fast. No need to connect to a DAW and set up inputs, or
          find your cables; just record straight into your browser. Share your
          recordings with friends and record on the fly.
        </Paragraph>
      </Container>
    </>
  );
};

export default fourtrack;
