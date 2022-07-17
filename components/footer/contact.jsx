import { Content, Container, Flex, LinkWrapper, Socials } from "./styledFooter";
import SocialLinks from "./socialLink";
import { TimeZone } from "./timeZone";
import UnderLineTitle from "./markTitle";

const Contact = () => {
  return (
    <>
      <Container id="contact">
        <Content>
          <Flex>
            <Socials>
              <UnderLineTitle title="Say Hello" />
              <SocialLinks
                href="mailto: pelleadlen@gmail.com?subject= 👨‍💻🍺?"
                LinkName="pelleadlen@gmail.com"
              />
            </Socials>
            <Socials>
              <UnderLineTitle title="Follow" />
              <LinkWrapper>
                <SocialLinks
                  href="https://www.linkedin.com/in/pelle-adl%C3%A9n-b76709223/"
                  LinkName="LinkedIn,"
                />
                <SocialLinks
                  href="https://www.instagram.com/pell.ux/"
                  LinkName="Instagram,"
                />
                <SocialLinks
                  href="https://github.com/pelleadlen"
                  LinkName="Github &"
                />
                <SocialLinks
                  href="https://www.polywork.com/pellux"
                  LinkName="Polywork"
                />
              </LinkWrapper>
            </Socials>
          </Flex>
          <TimeZone />
        </Content>
      </Container>
    </>
  );
};

export default Contact;
