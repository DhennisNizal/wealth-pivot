import React from "react";
import { Card } from "./styles";

const ArticleCard = ({ item }) => {
  return (
    <Card>
      <div className="article-thumbnail">
        <img src={item.thumbnail} alt={item.title} />
      </div>

      <div className="article-info">
        <h2 className="category">{item.category}</h2>
        <h1 className="title">{item.title}</h1>
        <p className="description">{item.description}</p>
        <p className="duration">{item.duration}</p>
      </div>
    </Card>
  );
};

export default ArticleCard;
