import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/landing-page";
import ArticlePage from "../pages/article-page";
import ArticleContentPage from "../pages/article-content-page";

const AppRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/article-page" element={<ArticlePage />} />
        <Route path="/articles/:id" element={<ArticleContentPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoute;
