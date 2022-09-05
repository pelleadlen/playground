import { Hero } from "./hero";
import { Problem } from "./problem";
import { Marquee } from "./marquee";
import { Process } from "./process";
import { ImgLarge } from "./imgLarge";
import { Persona } from "./persona";
import { ImgGrid } from "./imgGrid";
import { Wireframes } from "./wireframes";
import { Prototype } from "./prototype";
import { MoreWork } from "../shared/moreWork";

export const Index = () => {
  return (
    <>
      <Hero />
      <Problem
        title="Problem"
        text="There is a big problem with the environmental impact of textile. How can we solve this problem using technology? And how can we make it accessible and smooth for those who just need clothing for a limited amount of time?"
      />
      <Marquee marquee="process process process process process process process process process process process process process process process process process process process process" />
      <Process
        titleOne="Empathize"
        markdownOne="I started out with user research and conducted interviews with people about their shopping habits and got a better understanding of my target audience. I then organized the data, developed key findings and built personas."
        titleTwo="Ideate"
        markdownTwo="During this part of the project I worked with crazy 8's and other problem solving techniques to come up with many different ideas quickly"
        titleThree="Prototype"
        markdownThree="I started with lo-fidelity wireframes to prototype my ideas and test them, then moved on to Figma for high-fidelity wireframes to test more in depth."
        titleFour="test"
        markdownFour="10+ user tests with Maze and got valuable feedback and suggestions. Especially on the onboarding part."
        titleFive="Iterate"
        markdownFive="Iterating ... After every testing I changed up the designs via the feedback I got. I came up with new solutions and saw new problems that needed to be solved."
      />
      <ImgLarge
        alt="two phones"
        src={"/Assets/Images/Trip-twophones-mockup.png"}
      />
      <Problem
        title="user persona"
        text="To better understand how to design for users who are constantly traveling and are in need of clothing, User Personas were created. Below is a brief version of Michael's persona, who is made up by combining all of my interviewees. He was used to understand a user who would care more about renting clothes instead of buying new ones for a short period of time."
      />
      <Persona />
      <ImgGrid />

      <Wireframes />

      <Problem
        title="Design system"
        text="After testing the wireframes it was time for some colors and components. Working with Design Systems can really make your design work more cohesive and organized. I made a Design System in Figma, and I ensured it would pass the contrast ratio of at least 4.5:1. For hierarchy in the typography I used shades of gray and for elevation I used overlays to make primary CTA's stand out more."
      />

      <ImgLarge
        alt="design system"
        srcMobile={"/Assets/Images/tripstylesheetmobile.png"}
        src={"/Assets/Images/tripstylesheet.png"}
      />
      <Prototype />
      <Problem
        title="What did I learn?"
        text="This project was really fun to work on. I learned a lot and especially about the importance of user testing and learning from my mistakes. As a user experience designer, I’m always looking for new tools to make my design process better. For the user testing I did a deep dive into Maze. An amazing app that makes it easy to get quick feedback from real people. And for prototyping, I used Protopie where I could implement some logic into the onboarding process which was important during the testings. If you like this idea — let's make it!"
      />
      <MoreWork filterOutID={2} />
    </>
  );
};
