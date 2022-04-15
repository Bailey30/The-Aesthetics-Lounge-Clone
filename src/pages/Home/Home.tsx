import React from 'react';
import Header from "../../components/header/index"
import Hero from '../../components/home/hero';
import Treatments from "../../components/home/treatments"
import Courses from "../../components/home/courses"
import DontTake from "../../components/home/dontTake"
import Testimonials from '../../components/home/testimonials';
import Services from '../../components/home/services';
import Footer from '../../components/footer';
import OpeningAnimation from "../../components/home/openingAnimation"

export default function Home() {
  return (
    <>
      <OpeningAnimation />
      <Header />
      <Hero />
      <Treatments />
      <Courses />
      <DontTake />
      <Testimonials />
      <Services />
      <Footer />
    </>
  );
}

// export default Home;
