import Link from "next/link";
import Image from "next/image";
import threePhones from "../public/Assets/Images/trip3iphones.png";
import banner from "../public/Assets/Images/tripcloset-banner.png";
import wireframe from "../public/Assets/Images/tripwireframe.png";
import stylesheet from "../public/Assets/Images/tripstylesheet.png";
import CaseLinks from "./Components/Cases/caseLinks";
import { motion } from "framer-motion";

const TripCloset = () => {
  return (
    <>
      <motion.main
        layoutId="page"
        className="w-full h-full overflow-hidden bg-white flex flex-col gap-6 items-center justify-center pl-6 pr-6 "
      >
        <Link href="/">
          <button className="self-end fixed top-4 mix-blend-difference  z-10 text-white ">
            back home
          </button>
        </Link>
        <section className="w-full h-full mt-24 flex flex-col lg:flex-row">
          <div className=" text-7xl md:text-8xl leading-[80%] font-medium tracking-tighter self-start ">
            <p className=" text-base tracking-normal mb-2 font-light text-gray-400 ">
              2021
            </p>
            <h1>Trip</h1>
            <h1>Closet</h1>
          </div>
          <div className="self-center overflow-hidden relative w-[800px] h-[800px]  ">
            <Image
              blur="true"
              className=" object-cover rounded-3xl w-full h-full "
              layout="fill"
              src={threePhones}
            />
          </div>
        </section>

        <div className="flex gap-8 text-base md:text-2xl mb-12 self-start">
          <div>
            <h4 className="text-gray-500">Role</h4>
            <h4>Product Designer</h4>
          </div>

          <div>
            <h4 className="text-gray-500">Work</h4>
            <h4>Concept app</h4>
          </div>
        </div>

        <Information
          headline="Concept"
          text="       Trip closet is an ai generated clothing rental for digital nomads.
            We generate what clothes you need on your trip by answering a few
            questions. We look at your destination, the weather and what
            activities you want to do. Travel without a bag and rent apparel
            that was made to last."
        />

        <div className="relative w-full h-[50vh] overflow-hidden">
          <Image
            className=" object-cover rounded-3xl w-full h-full "
            src={banner}
            layout="fill"
          />
        </div>

        <Information
          headline="Problem"
          text=" We know there is a big problem with the environmental impact of
            textile. How can we solve this problem? And how can we make it
            accessible and smooth for those who need clothing for a limited
            amount of time?"
        />

        <section className="flex flex-col lg:flex-row w-full justify-between">
          <div className="flex flex-col gap-2 self-start font-bold text-5xl lg:text-7xl tracking-tight ">
            <h4 className="text-gray-500 text-2xl tracking-normal font-light">
              Process
            </h4>
            <h2>Emphasize</h2>
            <h2>Ideate</h2>
            <h2>Prototype</h2>
            <h2>Test</h2>
            <h2>Iterate</h2>
          </div>

          <div className=" max-w-lg mt-12 lg:mt-0 ">
            <h4 className="text-gray-500 font-light text-2xl">Methods</h4>
            <ul className="list-disc">
              <li className=" text-lg md:text-xl pb-4">
                I started out with user research and conducted interviews with
                people about their shopping habits and got a better
                understanding of my target audience. I then organized the data,
                developed key findings and built personas.
              </li>
              <li className=" text-lg md:text-xl pb-4">
                During this part of the project I worked with crazy 8's and
                other problem solving techniques to come up with many different
                ideas.
              </li>
              <li className=" text-lg md:text-xl pb-4">
                I started with lo-fidelity wireframes to prototype my ideas and
                test them, then moved on to high-fidelity wireframes to test
                more in depth.
              </li>
              <li className=" text-lg md:text-xl pb-4">
                10+ user tests with Maze and got valuable feedback and
                suggestions
              </li>
              <li className="text-lg md:text-xl pb-4">
                iterating … iterating … iterating …
              </li>
            </ul>
          </div>
        </section>

        <div className="relative w-full h-[60vh] ">
          <Image
            blur="true"
            className=" object-cover rounded-3xl w-full h-full "
            layout="fill"
            src={wireframe}
          />
        </div>
        <div className="relative max-w-full max-h-[60vh] overflow-hidden ">
          <Image
            blur="true"
            className=" object-cover rounded-3xl w-full h-full "
            layout="responsive"
            src={stylesheet}
          />
        </div>
        <div className="h-screen  flex items-center justify-center">
          <video autoPlay loop muted>
            <source src="/Assets/Videos/trip.mp4" type="video/mp4" />
          </video>
        </div>

        <Information
          headline="What did I learn?"
          text="I learned so much from this project and I had really fun. In the
            beginning I had no idea what the outcome would be but if you trust
            the process It usually turns out pretty cool. If you like this idea
            — let's make it!"
        />

        <section className="bg-body flex flex-col items-center justify-center h-screen w-screen pb-24">
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
        </section>
      </motion.main>
    </>
  );
};

export default TripCloset;

const Information = ({ headline, text }) => {
  return (
    <div className="flex flex-col mb-12 mt-12 gap-2 self-start">
      <h4 className="text-gray-500 text-2xl">{headline}</h4>
      <p className="max-w-[780px] mb-12 text-2xl md:text-3xl font-medium  ">
        {text}
      </p>
    </div>
  );
};
