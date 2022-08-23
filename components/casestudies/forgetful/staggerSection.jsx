import { RevealUp } from "../../hooks/animation";
import { Wrapper } from "./styled/styledFab";
import { Grid, Heading, Paragraph, TextBlock } from "./styled/styledForgetful";

import { FabDemo } from "./todo/forgetful/fabDemo";

const StaggerSection = () => {
  return (
    <>
      <RevealUp>
        <Grid>
          <Wrapper>
            <FabDemo isShadow />
          </Wrapper>
          <TextBlock centered>
            <Heading>Buttons</Heading>
            <Paragraph>
              Did you notice how the loading screen before was falling down, and
              when it was removed it went up? That will be our direction to
              follow from now on. <br /> <br /> So let's say we want a button to
              display some colors for the different tasks. Pressing the plus
              button should then show some of the options. One problem when
              doing this is that everything will show up at once. In reality,
              they would stagger down with a slight bounce because this is the
              way it works in real life. To tell the user that it's clickable I
              applied a bit of scale on each button. This made it in my opinion
              a bit more fluid and fun.
            </Paragraph>
          </TextBlock>
        </Grid>
      </RevealUp>
    </>
  );
};

export default StaggerSection;
