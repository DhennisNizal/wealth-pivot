import React from "react";
import { PageLayout } from "../components/common-styles/common-styles";
import Transition from "../components/transition";
import Header from "../components/header";
import Home from "../modules/home";
import Featured from "../modules/featured";
import About from "../modules/about";
import Article from "../modules/article";

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

      <Transition>
        <Article />
      </Transition>
    </PageLayout>
  );
};

export default LandingPage;
