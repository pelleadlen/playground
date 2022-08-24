import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import {
  AppWrapper,
  App,
  Heading,
  Paragraph,
  TextBlock,
} from "./styled/styledForgetful";

const AppSection = () => {
  const [lazy, setLazy] = useState(false);
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      console.log("inView");
      setLazy(true);
    } else {
      setLazy(false);
    }
  }, [inView]);

  return (
    <>
      <App>
        <TextBlock>
          <Heading>The finishing touches</Heading>
          <Paragraph>
            So let's wrap everything up, this is the app. Nothing spectacular by
            any means but give the interactions a try and imagine how it would
            look completely static.
            <br /> <br /> If you are nerdy like me and want to know what I used
            to make this it was made with React, Framer motion, styled
            components and some good ol' fashion CSS. If you come this far,
            thank you for reading and I hope you learned a little something
            about micro-interactions.
          </Paragraph>
        </TextBlock>

        <AppWrapper ref={ref}>
          {lazy ? (
            <iframe
              width="100%"
              height="100%"
              src="https://thunderous-dango-f47a88.netlify.app/"
              title="Forgetful, a todolist app created by Pelle Adlén in React"
            />
          ) : null}
        </AppWrapper>
      </App>
    </>
  );
};

export default AppSection;
