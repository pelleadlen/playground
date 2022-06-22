import { Container } from "../styles/styledCaseStudies";
import { Text, Wrapper } from "../styles/styledOurlegacy";
import Image from "next/image";
import Link from "next/link";
import { IoArrowBackCircleSharp } from "react-icons/io5";
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
        <div className=" p-4 md:p-6 w-full h-full flex flex-col md:flex-row gap-4">
          <div className=" w-full h-screen relative object-cover">
            <Image
              className=" object-cover rounded-3xl "
              layout="fill"
              alt="splashscreen"
              src="/Assets/Images/ourlegacy-closer.png"
            />
          </div>
          <div className=" w-full h-screen relative ">
            <Image
              className="
              object-cover 
              rounded-3xl "
              layout="fill"
              alt="colorscheme"
              src="/Assets/Images/colors.png"
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default ourlegacy;
