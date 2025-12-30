import React, { lazy, Suspense } from "react";
import { PageLayout } from "../components/common-styles/common-styles";
import Transition from "../components/transition";
import Header from "../components/header";
import Home from "../modules/home";
import Loader from "../components/loader";

const Featured = lazy(() => import("../modules/featured"));
const About = lazy(() => import("../modules/about"));
const Article = lazy(() => import("../modules/article"));
const Footer = lazy(() => import("../components/footer"));

const LandingPage = () => {
  return (
    <PageLayout>
      <Header />
      <Home />

      <Suspense fallback={<Loader />}>
        <Transition>
          <Featured />
        </Transition>
      </Suspense>

      <Suspense fallback={<Loader />}>
        <Transition>
          <About />
        </Transition>
      </Suspense>

      <Suspense fallback={<Loader />}>
        <Transition>
          <Article />
        </Transition>
      </Suspense>

      <Suspense fallback={<Loader />}>
        <Transition>
          <Footer />
        </Transition>
      </Suspense>
    </PageLayout>
  );
};

export default LandingPage;
