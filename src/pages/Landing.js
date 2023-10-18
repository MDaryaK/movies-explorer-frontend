import React from "react";

import Portfolio from "../components/Main/Portfolio";
import AboutMe from "../components/Main/AboutMe";
import Techs from "../components/Main/Techs";
import AboutProject from "../components/Main/AboutProject";

export default function Landing() {
  return (
    <div>
      {/*<Promo />*/}
      {/*<About />*/}
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </div>
  );
}
