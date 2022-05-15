import Head from "next/head";

import Hero from "../components/Hero";
import Cards from "../components/Cards";
import About from "../components/About";
import Frames from "../components/Frames";
import Pricing from "../components/Pricing";
import Latest from "../components/Latest";


const Home = () => (
  <>
    <Head>
      <title>Портфолио фотографа</title>
    </Head>
    <Hero />
    <About />
    <Cards />
    <Frames />
    <Pricing />
    <Latest />
  </>
);

export default Home;
