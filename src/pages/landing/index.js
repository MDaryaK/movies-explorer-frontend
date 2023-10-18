import React from "react";

import Promo from "../../components/Main/Promo";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Student from "../../components/Main/AboutMe";
import Technologies from "../../components/Main/Techs";

import Portfolio from "../../components/Main/Portfolio";
import AboutMe from "../../components/Main/AboutMe";

export default function Landing() {
  return (
    <div>
      <Header />
      {/*<Promo />*/}
      {/*<About />*/}
      {/*<Technologies />*/}
      {/*<Student />*/}
      <AboutMe />
      <Portfolio />
      <Footer />
    </div>
  );
}
