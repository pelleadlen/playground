import Head from "next/head";
import CaseLinks from "../components/casestudies/shared/caseLinks";
import Hero from "../components/casestudies/ourlegacy/hero";
import { Main } from "../components/casestudies/ourlegacy/styled/styledOurlegacy";
import Text from "../components/casestudies/ourlegacy/text";
import VideoMockup from "../components/casestudies/ourlegacy/videoMockup";
import Arrow from "../components/casestudies/shared/arrow";
import {
  MoreWork,
  Wrapper,
  Title,
} from "../components/casestudies/shared/styled/styledCaseLinks";
import { ourLegacyCases } from "../components/casestudies/shared/caseLinksData";
import { ImageGrid } from "../components/casestudies/ourlegacy/imageGrid";
import { MobileImageGrid } from "../components/casestudies/ourlegacy/mobileImageGrid";

const ourlegacy = () => {
  return (
    <>
      <Head>
        <title>Our legacy</title>
        <meta
          name="description"
          content="Redesign of Our legacy together with gothenburg agency "
        />
      </Head>
      <Main exit={{ opacity: 0 }}>
        <Arrow href="/" />
        <Hero />
        <Text />

        <ImageGrid />
        <MobileImageGrid />

        <VideoMockup />
        <MoreWork>
          <Wrapper>
            <Title>More work</Title>
            {ourLegacyCases.map(({ href, title, category }, i) => (
              <CaseLinks
                href={href}
                title={title}
                category={category}
                key={i}
              />
            ))}
          </Wrapper>
        </MoreWork>
      </Main>
    </>
  );
};

ourlegacy.displayName = "ourlegacy";
export default ourlegacy;
