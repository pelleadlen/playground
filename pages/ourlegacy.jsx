import { Container, LearnTitle, MoreWork } from "../styles/styledCaseStudies";
import { Text, Wrapper } from "../styles/styledOurlegacy";
import Image from "next/image";
import Link from "next/link";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { ImageContainer, ParagraphSpan } from "../styles/styledFourtrack";
import CaseLinks from "../components/cases/caseLinks";
const ourlegacy = () => {
  return (
    <>
      <Container>
        <Link scroll={false} href="/">
          <IoArrowBackCircleSharp className="w-9 h-9 fixed top-4 right-4 cursor-pointer md:top-6 md:right-6 z-50 mix-blend-difference text-white" />
        </Link>
        <Wrapper>
          <Text title="true">Our legacy</Text>
          <Text>
            I attended a workshop together with digital agency Aino in
            Gothenburg and did a redesign on the swedish clothing brand Our
            legacy. I wanted to make a clean, minimalistic and functional design
            where the clothes would speak for them self. Inspired by the classic
            notebook I choose a blue ink color and designed the navigation as an
            archive.
          </Text>
        </Wrapper>

        <video
          className="h-screen object-cover"
          muted
          playsInline
          loop
          autoPlay
        >
          <source src="/Assets/Videos/Mobile-Promo.mp4" type="video/mp4" />
        </video>
        <div className="flex flex-col gap-4 p-4 lg:p-6">
          <ImageContainer>
            <Image
              className="
              object-cover 
              rounded-3xl "
              layout="fill"
              alt="colorscheme"
              src="/Assets/Images/Product page.png"
            />
          </ImageContainer>
          <ImageContainer>
            <Image
              className="
              object-cover 
              rounded-3xl "
              layout="fill"
              alt="colorscheme"
              src="/Assets/Images/Season.png"
            />
          </ImageContainer>
          <ImageContainer>
            <Image
              className="
              object-cover 
              rounded-3xl "
              layout="fill"
              alt="colorscheme"
              src="/Assets/Images/colors.png"
            />
          </ImageContainer>
        </div>
        <video
          className="h-screen w-full hidden md:block object-cover"
          muted
          playsInline
          loop
          autoPlay
        >
          <source
            src="/Assets/Videos/ourlegacy_case_desktop_scroll.mp4"
            type="video/mp4"
          />
        </video>
        <div className="w-full pb-12 pt-8 md:w-1/2 pl-4 md:pl-6">
          <ParagraphSpan>*Images and logo are from Our legacy.</ParagraphSpan>
        </div>

        <MoreWork>
          <div className=" w-full lg:w-1/2">
            <LearnTitle>More work</LearnTitle>
            <CaseLinks
              title="Fourtrack"
              category="Product design"
              href="/fourtrack"
            />
            <CaseLinks
              title="Trip closet"
              category="Redesign"
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

export default ourlegacy;
