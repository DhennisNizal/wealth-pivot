import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { articles } from "../article/data";
import * as S from "./styles";

const ArticleContent = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // convert string id → number
  const article = articles.find((item) => item.id === Number(id));

  if (!article) {
    return <h2>Article not found</h2>;
  }

  return (
    <S.Container>
      <S.Content>
        <img
          className="thumbnail"
          src={article.thumbnail}
          alt={article.title}
        />

        <h4 className="duration">{article.duration}</h4>
        <h1 className="title">{article.title}</h1>
        <h3 className="description">{article.description}</h3>

        <p className="article-content">{article.content}</p>
      </S.Content>
    </S.Container>
  );
};

export default ArticleContent;
