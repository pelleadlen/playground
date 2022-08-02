import { Img, ImgSrc, Section, Introduction } from "./styled/styledWireframe";
import { RevealUp } from "../../hooks/animation";

const Wireframe = () => {
  return (
    <Section>
      <Introduction>
        <RevealUp>
          <div>
            <h3>Wireframes</h3>
            <p>
              I did lo-fidelity wireframes with pen and paper for rapid
              prototyping and showed the sketches for some friends. My idea at
              the time was to have all steps of the sign up part as input fields
              where you would type everything – similar to how typeform work.
              But after going through this process I realised that it didn't
              work at all so I changed it up and did more medium fidelity
              wireframes before going to Figma for the pixel perfect touches.
            </p>
          </div>
        </RevealUp>
      </Introduction>
      <Img marginbottom>
        <ImgSrc
          alt="handdrawn wireframes of iphones"
          layout="fill"
          src="/Assets/Images/lofiwireframes.png"
        />
      </Img>
      <Img>
        <ImgSrc
          alt="handdrawn wireframes of iphones"
          layout="fill"
          src="/Assets/Images/tripwireframe.png"
        />
      </Img>
    </Section>
  );
};

export default Wireframe;
