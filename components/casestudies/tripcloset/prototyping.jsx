import { Container, Introduction } from "./styled/styledPrototyping";
import { RevealUp } from "../../hooks/animation";

const Prototyping = () => {
  return (
    <Container>
      <Introduction>
        <RevealUp>
          <div>
            <h3>Prototype</h3>
            <p>
              For the prototype I thought i'd give Protopie a try. The first
              steps is to answer some basic questions like where you are
              traveling to, what dates and what you are planning to do on your
              destination. Finally the AI is going to sort out what clothes and
              items you might need based on the temperature, activity and
              location.
            </p>
          </div>
        </RevealUp>
      </Introduction>
      <video className="h-screen object-cover" muted playsInline loop autoPlay>
        <source src="/Assets/Videos/trip.mp4" type="video/mp4" />
      </video>
    </Container>
  );
};

export default Prototyping;
