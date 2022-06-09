import { Content, Footer } from "../../styles/StyledFooter";
import SocialLinks from "./SocialLinks";

import UnderLineTitle from "./UnderLineTitle";

const Contact = () => {
  return (
    <>
      <Footer>
        <Content>
          <UnderLineTitle title="Say Hello" />
          <SocialLinks
            href="mailto: abc@example.com"
            LinkName="pelleadlen@gmail.com"
          />

          <UnderLineTitle title="Follow" />
        </Content>
      </Footer>
    </>
  );
};

export default Contact;
