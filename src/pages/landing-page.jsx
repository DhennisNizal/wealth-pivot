import React from "react";
import { PageLayout } from "../components/common-styles/common-styles";
import Transition from "../components/transition";
import Header from "../components/header";
import Home from "../modules/home";
import Featured from "../modules/featured";
import About from "../modules/about";

const LandingPage = () => {
  return (
    <PageLayout>
      <Header />
      <Home />

      <Transition>
        <Featured />
      </Transition>

      <Transition>
        <About />
      </Transition>
    </PageLayout>
  );
};

export default LandingPage;
