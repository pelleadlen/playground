import Image from "next/image";
import { RevealUp } from "../../hooks/animation";
import {
  Flex,
  Images,
  Paragraph,
  ProfilePicture,
  ProfileWrapper,
} from "./styled/styledProfile";
export const Profile = () => {
  return (
    <RevealUp>
      <ProfileWrapper id="profile">
        <Flex>
          <Paragraph>
            Hi. My name is Pelle Adlén. I’m a music loving tech enthusiast with
            a passion for slick user experiences. Currently based in
            <span>Gothenburg, Sweden,</span>
            anywhere.
            <br />
            <br /> Design with a purpose is what excites me. And like your
            favorite song somehow seems to be written with you in mind, my aim
            is always a tailor-made satisfaction for the ones experiencing the
            stuff I design. Beyond the obvious beauty and beyond expected
            function. This is my recipe and the flavor I bring to the table.
            Let’s get together and push some pixels for a reason!
          </Paragraph>

          <ProfilePicture>
            <Images
              priority={true}
              alt="Pelle Adlén in a blue shirt thinking about digital design"
              layout="fill"
              src="/Assets/Images/profilepic.png"
            />
          </ProfilePicture>
        </Flex>
      </ProfileWrapper>
    </RevealUp>
  );
};
