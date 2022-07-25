import { RevealUp } from "../../hooks/animation";
import Marquee from "./marquee";
import {
  ProcessText,
  ProcessInformation,
  Processes,
} from "./styled/styledProcess";
import { ProcessData } from "./content";

const Process = () => {
  return (
    <Processes>
      <Marquee />
      <ProcessText>
        <RevealUp>
          {ProcessData.map(({ title, text }, i) => (
            <ProcessInformation
              method={title}
              methodInformation={text}
              key={i}
            />
          ))}
        </RevealUp>
      </ProcessText>
    </Processes>
  );
};

export default Process;
