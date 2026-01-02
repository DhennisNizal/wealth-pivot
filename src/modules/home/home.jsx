import React from "react";
import { HashLink } from "react-router-hash-link";
import { SectionWrapper } from "../../components/common-styles/common-styles";
import HomeGIF from "../../components/gif/home-gif/home-gif";
import { Button } from "antd";

import * as S from "./styles";

const Home = () => {
  const scrollWithOffset = (el) => {
    const yOffset = -80; // 5rem above the element
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <SectionWrapper>
      <S.Container>
        <S.LeftContent>
          <div className="text-wrapper">
            <h2>FINANCIAL CLARITY FOR THE MODERN AGE</h2>
            <h1>Master Your Money.</h1>
            <h1>
              <span>Achieve</span> Financial Freedom.
            </h1>
            <h2>
              Practical insights, expert analyses, and actionable tips for
              master saving, investing, and long-term wealth building.
            </h2>
          </div>

          <div className="button-wrapper">
            <HashLink smooth to="#article" scroll={scrollWithOffset}>
              <Button className="button-1">Explore Latest Articles</Button>
            </HashLink>

            <HashLink smooth to="#about" scroll={scrollWithOffset}>
              <Button className="button-2">What We Cover</Button>
            </HashLink>
          </div>
        </S.LeftContent>
        <S.RightContent>
          <HomeGIF />
        </S.RightContent>
      </S.Container>
    </SectionWrapper>
  );
};

export default Home;
