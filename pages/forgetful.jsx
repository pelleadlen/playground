import Link from "next/link";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import {
  Container,
  Heading,
  Hero,
  Flex,
  Paragraph,
  ParagraphSpan,
  Text,
  SectionTwo,
  SplashSection,
  SplashFlex,
} from "../styles/styledForgetful";
import Image from "next/image";
import { ImageContainer } from "../styles/styledForgetful";
import { RevealUp } from "../components/hooks/animation";
import { MoreWork, LearnTitle } from "../styles/styledCaseStudies";
import CaseLinks from "../components/cases/caseLinks";
import Head from "next/head";
const forgetful = () => {
  return (
    <>
      <Head>
        <title>Forgetful</title>
        <meta
          name="description"
          content="Should designers code? A casestudy about micro interactions by designer Pelle Adlén"
        />
      </Head>
      <Container>
        <Link scroll={false} href="/#work" as="/">
          <a>
            <IoArrowBackCircleSharp className="w-9 h-9 fixed top-4 right-4 cursor-pointer md:top-6 md:right-6 z-50 mix-blend-difference text-white" />
          </a>
        </Link>

        <Hero>
          <RevealUp cascade={true}>
            <Flex>
              <Heading
                initial={{ opacity: 0, y: 24, rotate: 2 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                Should designers code?
              </Heading>

              <Paragraph>
                That's a question that keeps popping up, and I don't necessarily
                know the answer. But if you want to, just do it. Because I sure
                want to.
                <br></br>
                <br></br>
                As a designer, you often need to hand off your work to the
                developers. When it comes to the micro interactions like buttons
                and animations, this can be tricky.
                <br></br>
                <br></br>
                Figma's smart animate prototypes help you create fantastic
                animations and transitions for your projects, but when you hand
                the file off to a developer, it's sometimes difficult to
                translate those smooth transitions into life. So I thought I
                would try if I could make it myself.
              </Paragraph>
            </Flex>
          </RevealUp>
        </Hero>
        <ImageContainer>
          <Image
            className=" object-cover aspect-auto rounded-3xl"
            width="1920px"
            height="1080px"
            layout="responsive"
            alt="code snippet jsx"
            src="/Assets/Images/forgetful-code.png"
          />
        </ImageContainer>
      </Container>
      <RevealUp>
        <SectionTwo>
          <Text>
            I started out with research and looked into Apples micro
            interactions as im a big fan of the IOS ecosystem. Of course, I have
            always known that they play a huge part of the system and that they
            are everywhere. But it is only now that I am properly seeing how
            much they are able to do for the overall user experience.<br></br>
            <br></br> To see if I could make this myself I knew I needed to test
            it on something. So, I thought about making a simple todo-app.
            Nothing mind-blowing, but a good chance to add those smooth
            transitions I was talking about.{" "}
            <strong>Introducing “Forgetful”,</strong> a browser based todo-list
            app.
            <br></br>
            <br></br>
            Now for the appropriate tools, I went with React.js and framer
            motion for the animations and did the first prototyping in Figma.
          </Text>
        </SectionTwo>
      </RevealUp>

      <SplashSection>
        <SplashFlex>
          <RevealUp cascade={true}>
            <Paragraph>
              <ParagraphSpan>Splash Screen</ParagraphSpan>
              <br></br>
              <br></br>
              If this was a real application we would probably need a splash
              screen for various reasons. One reason would be to load the data
              in advance. In reality todo-lists have more features than just
              adding tasks, it has reminders and dates and maybe the ability to
              collaborate. This means more data that can take some time to show.
              <br></br>
              <br></br> For this example we can apply the 'Doherty Threshold'
              from Laws of UX. Meaning that "Productivity soars when a computer
              and its users interact at a pace less than 400ms that ensures that
              neither has to wait on the other." Animation is one way to
              visually engage people while loading or processing is happening in
              the background.
            </Paragraph>

            <video
              className=" max-w-[600px] max-h-[600px] object-cover"
              muted
              playsInline
              loop
              autoPlay
            >
              <source src="/Assets/Videos/splash.mp4" type="video/mp4" />
            </video>
          </RevealUp>
        </SplashFlex>

        <SplashFlex>
          <RevealUp cascade={true}>
            <video
              className=" w-96 h-96 lg:max-w-[600px] lg:max-h-[600px] object-cover"
              muted
              playsInline
              loop
              autoPlay
            >
              <source src="/Assets/Videos/tasks.mp4" type="video/mp4" />
            </video>
            <Paragraph>
              <ParagraphSpan>Buttons</ParagraphSpan>
              <br></br>
              <br></br>
              Let's say we want a button to display some colors for the
              different tasks. Pressing the plus button should then show some of
              the options. One problem when doing this is that everything will
              show up at once.
              <br></br>
              <br></br>
              In reality, they would stagger down with a slight bounce because
              this is the way it works in real life. To tell the user that it's
              clickable I applied a bit of scale on each button. This made it in
              my opinion a bit more fluid.
            </Paragraph>
          </RevealUp>
        </SplashFlex>
        <SplashFlex>
          <RevealUp cascade={true}>
            <Paragraph>
              <ParagraphSpan>Adding tasks</ParagraphSpan>
              <br></br>
              <br></br>
              When adding tasks it needs to follow the same path as before, if
              everything is cascading down from the top it would not make any
              sense to add it from the bottom and up. So keeping things
              consistent is the key.
              <br></br>
              <br></br>
            </Paragraph>
            <video
              className=" w-96 h-96 lg:max-w-[600px] lg:max-h-[600px] object-cover"
              muted
              playsInline
              loop
              autoPlay
            >
              <source src="/Assets/Videos/adding.mp4" type="video/mp4" />
            </video>
          </RevealUp>
        </SplashFlex>
        <SplashFlex>
          <RevealUp cascade={true}>
            <video
              className=" w-96 h-96 lg:max-w-[600px] lg:max-h-[600px] object-cover"
              muted
              playsInline
              loop
              autoPlay
            >
              <source src="/Assets/Videos/crossing.mp4" type="video/mp4" />
            </video>
            <Paragraph>
              <ParagraphSpan>Crossing of tasks</ParagraphSpan>
              <br></br>
              <br></br>
              The app is color-coded and made to be easy to use. The user can
              reorder tasks easily by dragging them around the main window. For
              this I worked with the z-index, when moving an item it has a
              higher z-index and the other one will have a lower one. Making it
              seem like it's over one another.
              <br></br>
              <br></br>
              Just as I said before, consistency is key. That's why when
              removing tasks it goes up instead of down.
            </Paragraph>
          </RevealUp>
        </SplashFlex>
      </SplashSection>
      <RevealUp>
        <SectionTwo>
          <Text>
            Thank you for taking the time to read this. I hope it helped you
            learn something new about how to build better micro interactions.
            Check out the{" "}
            <a
              href="https://github.com/pelleadlen/forgetful"
              className=" underline mr-2"
            >
              source code
            </a>
            and play around with it!
          </Text>
        </SectionTwo>
      </RevealUp>
      <RevealUp cascade={true}>
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
              title="Fourtrack"
              category="Product design"
              href="/fourtrack"
            />
          </div>
        </MoreWork>
      </RevealUp>
    </>
  );
};
forgetful.displayName = "forgetful";
export default forgetful;
