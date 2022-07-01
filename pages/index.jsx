import Work from "../components/work/work";
import About from "../components/about/about";
import Contact from "../components/contact/contact";
import Home from "../components/home";
import { Navigation } from "../components/navigation/navigation";
import { Layout } from "../styles/layout";
import Head from "next/head";
import {useEffect} from 'react'

const Index = ({history}) => {
  useEffect(() => {
    const element = document.getElementById(history)
    if (element) {
      const elementBounds = element.getBoundingClientRect()
      const yOffset = - ((window.innerHeight - elementBounds.height) / 2)
      const y = elementBounds.top + window.pageYOffset + yOffset
      window.scrollTo({top: y, behavior: 'smooth'})
    }
  }, [history])

  return (
    <>
      <Head>
        <title>Pelle Adlén — digital product designer</title>
        <meta
          name="description"
          content="Pelle Adlén is a digital product designer & UI developer from Sweden. This portfolio contains all information you need to hire a passionate tech nerd"
        />
      </Head>
      <Navigation />

      <Layout>
        <Home />
        <Work />
        <About />
        <Contact />
      </Layout>
    </>
  );
}
export default Index;
