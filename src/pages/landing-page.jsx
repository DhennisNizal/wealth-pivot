import React from "react";
import { PageLayout } from "../components/common-styles/common-styles";
import Home from "../modules/home";
import Header from "../components/header";

const LandingPage = () => {
  return (
    <PageLayout>
      <Header />
      <Home />
    </PageLayout>
  );
};

export default LandingPage;
