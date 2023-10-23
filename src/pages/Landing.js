import React from "react";

import Portfolio from "../components/Main/Portfolio";
import AboutMe from "../components/Main/AboutMe";
import Techs from "../components/Main/Techs";
import AboutProject from "../components/Main/AboutProject";
import Promo from "../components/Main/Promo";

export default function Landing() {
  return (
    <>
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </>
  );
}
