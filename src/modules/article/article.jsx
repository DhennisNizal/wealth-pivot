import React from "react";
import SectionTitle from "../../components/section-title";
import ArticleCard from "../../components/article-card";
import { articles } from "./data";
import { useNavigate } from "react-router-dom";

import * as S from "./styles";

const Article = () => {
  const navigate = useNavigate();

  const handleViewAll = () => {
    navigate("/article-page");
  };

  return (
    <S.Container>
      <SectionTitle
        title="Articles"
        subtitle="Articles that inform and inspire"
      />

      <S.ContentWrapper>
        {articles.slice(0, 4).map((item) => (
          <ArticleCard key={item.id} item={item} />
        ))}
      </S.ContentWrapper>
      <S.ViewAllButton type="primary" onClick={handleViewAll}>
        View all
      </S.ViewAllButton>
    </S.Container>
  );
};

export default Article;
