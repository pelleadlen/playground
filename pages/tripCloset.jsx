import Head from "next/head";
import Link from "next/link";
import { Index } from "../components/casestudies/tripcloset";

const TripCloset = () => {
  return (
    <>
      <Head>
        <title>Trip Closet</title>
        <meta
          name="description"
          content="A UX casestudy about the making of trip closet, the ai generated clothing rental app "
        />
      </Head>

      <Index />
    </>
  );
};

TripCloset.displayName = "TripCloset";
export default TripCloset;
