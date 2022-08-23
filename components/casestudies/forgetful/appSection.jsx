import {
  AppWrapper,
  App,
  Heading,
  Paragraph,
  TextBlock,
} from "./styled/styledForgetful";
import Forgetfully from "./todo/forgetful/forgetfully";

const AppSection = () => {
  return (
    <>
      <App>
        <TextBlock>
          <Heading>The finishing touches</Heading>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            corporis mollitia sint blanditiis ullam dignissimos porro ratione
            error corrupti nemo tempore placeat, nobis incidunt possimus, aut
            omnis recusandae a eveniet ab non atque repellendus! Illo libero
            temporibus quod aliquam sint?
          </Paragraph>
        </TextBlock>

        <AppWrapper>
          <Forgetfully />
        </AppWrapper>
      </App>
    </>
  );
};

export default AppSection;
