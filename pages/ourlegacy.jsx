import Head from "next/head";
import Hero from "../components/casestudies/ourlegacy/hero";
import { Main } from "../components/casestudies/ourlegacy/styled/styledOurlegacy";
import Text from "../components/casestudies/ourlegacy/text";
import VideoMockup from "../components/casestudies/ourlegacy/videoMockup";
import { ImageGrid } from "../components/casestudies/ourlegacy/imageGrid";
import { MobileImageGrid } from "../components/casestudies/ourlegacy/mobileImageGrid";
import { MoreWork } from "../components/casestudies/shared/moreWork";
import Arrow from "../components/casestudies/shared/arrow";

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
        <Arrow />
        <Hero />
        <Text />

        <ImageGrid />
        <MobileImageGrid />

        <VideoMockup />
        <MoreWork filterOutID={1} />
      </Main>
    </>
  );
};

ourlegacy.displayName = "ourlegacy";
export default ourlegacy;
