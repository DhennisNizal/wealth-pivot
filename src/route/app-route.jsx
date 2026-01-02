import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/landing-page";
import ArticlePage from "../pages/article-page";
import ArticleContentPage from "../pages/article-content-page";

const AppRoute = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/article-page" element={<ArticlePage />} />
        <Route path="/articles/:id" element={<ArticleContentPage />} />
      </Routes>
    </HashRouter>
  );
};

export default AppRoute;
