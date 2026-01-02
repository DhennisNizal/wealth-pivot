import React, { useEffect, memo } from "react";
import * as S from "./styles";
import SectionTitle from "../../components/section-title";
import ArticleCard from "../../components/article-card";
import { articles } from "../article/data";

const MemoArticleCard = memo(ArticleCard);

const ArticleList = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <S.Container>
      <SectionTitle
        title="Article Page"
        subtitle="Articles that inform and inspire"
      />

      <S.ContentWrapper>
        {articles.map((item) => (
          <MemoArticleCard key={item.id} item={item} />
        ))}
      </S.ContentWrapper>
    </S.Container>
  );
};

export default ArticleList;
