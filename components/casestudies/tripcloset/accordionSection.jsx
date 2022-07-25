import {
  AccordionSection,
  AccordionWrap,
  Title,
  Paragraph,
} from "./styled/styledAccordion";
import { RevealUp } from "../../hooks/animation";
import { tripClosetData } from "./content";
import Accordion from "./accordion";

const AccordionContent = () => {
  return (
    <>
      <AccordionSection>
        <AccordionWrap>
          <RevealUp>
            <Title>Concept</Title>
            <Paragraph>
              Trip closet is an AI generated clothing rental for digital nomads.
              We generate what clothes you need on your trip by answering a few
              questions. We look at your destination, the weather and what
              activities you want to do. Travel without a bag and rent apparel
              that was made to last.
            </Paragraph>
          </RevealUp>
        </AccordionWrap>

        {tripClosetData.map(({ title, content }, i) => (
          <Accordion key={i} title={title} content={content} />
        ))}
      </AccordionSection>
    </>
  );
};

export default AccordionContent;
