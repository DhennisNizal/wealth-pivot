import React, { lazy, Suspense } from "react";
import { PageLayout } from "../components/common-styles/common-styles";
import Transition from "../components/transition";
import Header from "../components/header";
import Home from "../modules/home";
import Loader from "../components/loader";
import Featured from "../modules/featured";

const About = lazy(() => import("../modules/about"));
const Article = lazy(() => import("../modules/article"));
const Footer = lazy(() => import("../components/footer"));

const LandingPage = () => {
  return (
    <PageLayout>
      <Header />

      <div id="home">
        <Home />
      </div>

      <div id="featured">
        <Transition>
          <Featured />
        </Transition>
      </div>

      <Suspense fallback={<Loader />}>
        <div id="about">
          <Transition>
            <About />
          </Transition>
        </div>
      </Suspense>

      <Suspense fallback={<Loader />}>
        <div id="article">
          <Transition>
            <Article />
          </Transition>
        </div>
      </Suspense>

      <Suspense fallback={<Loader />}>
        <div id="footer">
          <Transition>
            <Footer />
          </Transition>
        </div>
      </Suspense>
    </PageLayout>
  );
};

export default LandingPage;
