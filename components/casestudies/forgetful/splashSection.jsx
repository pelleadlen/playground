import SplashScreen from "./todo/splashScreen";
import { Grid, Heading, Paragraph, TextBlock } from "./styled/styledForgetful";
import { RevealUp } from "../../hooks/animation";

const SplashSection = () => {
  return (
    <>
      <RevealUp>
        <Grid>
          <TextBlock>
            <Heading>Splash screen</Heading>
            <Paragraph>
              To try it out I thought about making a simple todo-app. Nothing
              mind-blowing, but a good chance to add those smooth transitions I
              was talking about. Introducing the <br />
              one-of-a-kind application <strong> “Forgetful”</strong>.<br />
              <br />
              In reality todo-lists have more features than just adding tasks,
              it has reminders and dates and maybe the ability to collaborate.
              This means more data that can take some time to show. That's were
              the 'splash screen' comes in. <br /> <br />
              For this example we can apply the 'Doherty Threshold' from Laws of
              UX. Meaning that "Productivity soars when a computer and its users
              interact at a pace less than 400ms that ensures that neither has
              to wait on the other."
            </Paragraph>
          </TextBlock>
          <div>
            <SplashScreen replay="play again" />
          </div>
        </Grid>
      </RevealUp>
    </>
  );
};

export default SplashSection;
