import React, { memo, useCallback, useMemo } from "react";
import SectionTitle from "../../components/section-title";
import ArticleCard from "../../components/article-card";
import { articles } from "./data";
import { useNavigate } from "react-router-dom";
import * as S from "./styles";

const MemoArticleCard = memo(ArticleCard);

const Article = () => {
  const navigate = useNavigate();

  const handleViewAll = useCallback(() => {
    navigate("/article-page");
  }, [navigate]);

  const previewArticles = useMemo(() => {
    return articles.slice(0, 4);
  }, []);

  return (
    <S.Container>
      <SectionTitle
        title="Articles"
        subtitle="Articles that inform and inspire"
      />

      <S.ContentWrapper>
        {previewArticles.map((item) => (
          <MemoArticleCard key={item.id} item={item} />
        ))}
      </S.ContentWrapper>

      <S.ViewAllButton type="primary" onClick={handleViewAll}>
        View all
      </S.ViewAllButton>
    </S.Container>
  );
};

export default Article;
