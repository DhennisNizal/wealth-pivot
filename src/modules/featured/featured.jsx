import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { SectionWrapper } from "../../components/common-styles/common-styles";
import SectionTitle from "../../components/section-title";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import * as S from "./styles";
import { featuredArticles } from "../article/data";

const Featured = () => {
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (container) {
      const cardWidth = 25 * 16 + 32;
      container.scrollLeft += direction === "left" ? -cardWidth : cardWidth;
    }
  };

  return (
    <SectionWrapper>
      <S.Container>
        <SectionTitle
          title="Featured Articles"
          subtitle="Smart insights to grow wealth"
        />

        <S.CarouselContainer>
          <S.ScrollButton
            className="left"
            shape="circle"
            icon={<LeftOutlined />}
            onClick={() => scroll("left")}
          />

          <S.CardWrapper ref={scrollRef}>
            {featuredArticles.map((item) => (
              <S.Card
                key={item.id}
                onClick={() => navigate(`/articles/${item.id}`)}
              >
                <div className="article-thumbnail">
                  <img src={item.thumbnail} alt={item.title} />
                </div>

                <div className="article-info">
                  <h2 className="category">{item.category}</h2>
                  <h1 className="title">{item.title}</h1>
                  <p className="description">{item.description}</p>
                  <p className="duration">{item.duration}</p>
                </div>
              </S.Card>
            ))}
          </S.CardWrapper>

          <S.ScrollButton
            className="right"
            shape="circle"
            icon={<RightOutlined />}
            onClick={() => scroll("right")}
          />
        </S.CarouselContainer>
      </S.Container>
    </SectionWrapper>
  );
};

export default Featured;
