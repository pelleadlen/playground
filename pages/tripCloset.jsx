import Link from "next/link";
import Image from "next/image";
import threePhones from "../public/Assets/Images/trip3iphones.png";
import banner from "../public/Assets/Images/tripcloset-banner.png";
import wireframe from "../public/Assets/Images/tripwireframe.png";
import stylesheet from "../public/Assets/Images/tripstylesheet.png";
import CaseLinks from "../components/casesa/caseLinksa";
import Head from "next/head";
import {
  TripWrapper,
  Hero,
  Intro,
  Methods,
  ListWrapper,
  List,
  Process,
  Video,
  ImageWrap,
  OtherProjects,
  Information,
} from "../styles/StyledTripCloset";

const TripCloset = () => {
  return (
    <>
      <Head>
        <title>Trip Closet</title>
        <meta
          name="description"
          content="AI generated clothing rental concept"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Link href="/#work">
        <a className=" fixed snap z-10 top-4 right-6 mix-blend-difference text-white">
          back home
        </a>
      </Link>

      <TripWrapper>
        <Hero>
          <div className=" text-7xl md:text-8xl leading-[80%] font-medium tracking-tighter self-start ">
            <p className=" text-base tracking-normal mb-2 font-light text-gray-400 ">
              2021
            </p>
            <h1>Trip</h1>
            <h1>Closet</h1>
          </div>
          <div className="self-center overflow-hidden relative w-[800px] h-[800px]  ">
            <Image
              alt="three iphones"
              blur="true"
              className=" object-cover rounded-3xl w-full h-full "
              layout="fill"
              src={threePhones}
            />
          </div>
        </Hero>

        <Intro>
          <div>
            <h4 className="text-gray-500">Role</h4>
            <h4>Product Designer</h4>
          </div>
          <div>
            <h4 className="text-gray-500">Work</h4>
            <h4>Concept app</h4>
          </div>
        </Intro>

        <Information
          headline="Concept"
          text="       Trip closet is an ai generated clothing rental for digital nomads.
            We generate what clothes you need on your trip by answering a few
            questions. We look at your destination, the weather and what
            activities you want to do. Travel without a bag and rent apparel
            that was made to last."
        />

        <ImageWrap>
          <Image
            alt="isometric mockups of iphonescreens"
            className=" object-cover rounded-3xl w-full h-full "
            src={banner}
            layout="fill"
          />
        </ImageWrap>

        <Information
          headline="Problem"
          text=" We know there is a big problem with the environmental impact of
            textile. How can we solve this problem? And how can we make it
            accessible and smooth for those who need clothing for a limited
            amount of time?"
        />
        <Methods>
          <Process>
            <h4 className="text-gray-500 text-2xl tracking-normal font-light">
              Process
            </h4>
            <h2>Emphasize</h2>
            <h2>Ideate</h2>
            <h2>Prototype</h2>
            <h2>Test</h2>
            <h2>Iterate</h2>
          </Process>

          <ListWrapper>
            <h4 className="text-gray-500 font-light text-2xl">Methods</h4>
            <ul className="list-disc">
              <List>
                I started out with user research and conducted interviews with
                people about their shopping habits and got a bett e r
                understanding of my target audience. I then org a developed key
                developed key findings and built personas.
              </List>
              <List>
                During this part of the project I worked with crazy 8s a other
                other problem solving techniques to come up with many different
                ideas.
              </List>
              <List>
                I started with lo-fidelity wireframes to prototype my idea s
                more test them, then moved on to high-fidelity wireframes to
                test more in depth.
              </List>
              <List>
                10+ user tests with Maze and got valuable feedback and
                suggestions
              </List>
              <List>iterating … iterating … iterating …</List>
            </ul>
          </ListWrapper>
        </Methods>

        <ImageWrap>
          <Image
            className=" object-cover rounded-3xl w-full h-full "
            alt="wireframes"
            blur="true"
            layout="fill"
            src={wireframe}
          />
        </ImageWrap>
        <ImageWrap>
          <Image
            alt="design system"
            blur="true"
            className=" object-cover rounded-3xl w-full h-full "
            layout="fill"
            src={stylesheet}
          />
        </ImageWrap>

        <Video>
          <video autoPlay loop muted>
            <source src="/Assets/Videos/trip.mp4" type="video/mp4" />
          </video>
        </Video>

        <Information
          headline="What did I learn?"
          text="I learned so much from this project and I had really fun. In the
            beginning I had no idea what the outcome would be but if you trust
            the process It usually turns out pretty cool. If you like this idea
            — let's make it!"
        />

        <OtherProjects>
          <div className=" w-screen lg:w-1/2">
            <h1 className=" text-5xl lg:text-7xl p-8 mb-8 font-medium ">
              {" "}
              More Work
            </h1>
            <CaseLinks title="Fourtrack" category="Product design" href="/" />

            <CaseLinks
              title="Our Legacy"
              category="Website redesign"
              href="/"
            />
            <CaseLinks
              title="Forgetfully"
              category="Micro interactions"
              href="/"
            />
          </div>
        </OtherProjects>
      </TripWrapper>
    </>
  );
};

export default TripCloset;
