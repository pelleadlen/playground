import { CopyToClipboard } from "./copyToClipboard";
import MarkTitle from "./markTitle";
import SocialLinks from "./socialLink";
import {
  Content,
  Flex,
  Socials,
  LinkWrapper,
  Container,
} from "./styled/styledFooter";
import { TimeZone } from "./timeZone";

const links = [
  {
    href: "https://www.linkedin.com/in/pelle-adl%C3%A9n-b76709223/",
    LinkName: "LinkedIn,",
  },
  { href: "https://www.instagram.com/pell.ux/", LinkName: "Instagram," },
  { href: "https://github.com/pelleadlen", LinkName: "Github &" },
  { href: "https://www.polywork.com/pellux", LinkName: "Polywork" },
];

const Contact = () => {
  return (
    <>
      <Container id="contact">
        <Content>
          <Flex>
            <Socials>
              <MarkTitle title="Say hello" />
              <CopyToClipboard mail="pelleadlen@gmail.com" />
            </Socials>
            <Socials>
              <MarkTitle title="Follow" />
              <LinkWrapper>
                {links.map(({ href, LinkName }, index) => (
                  <SocialLinks key={index} href={href} LinkName={LinkName} />
                ))}
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
