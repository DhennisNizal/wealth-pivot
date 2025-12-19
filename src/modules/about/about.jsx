import React from "react";
import SectionTitle from "../../components/section-title";
import { FaCircleCheck } from "react-icons/fa6";
import { GoStarFill } from "react-icons/go";
import { BsPeopleFill } from "react-icons/bs";
import { Button } from "antd";

import * as S from "./styles";

const About = () => {
  return (
    <S.Container>
      <SectionTitle title="About Us" subtitle="Our mission and commitment" />

      <S.ContentWrapper>
        <S.Cards>
          <div className="card-item">
            <FaCircleCheck />
            <h2>
              We deliver proven guidance for confident financial decisions.
            </h2>
          </div>

          <div className="card-item">
            <GoStarFill />
            <h2>We craft solutions designed to elevate your path to growth.</h2>
          </div>

          <div className="card-item">
            <BsPeopleFill />
            <h2>Trusted by thousands of readers pursuing growth worldwide</h2>
          </div>
        </S.Cards>

        <S.Mission>
          <h2>Our Mission: Unbiased Financial Education</h2>
          <p>
            We cut through the noise to deliver straightforward and unbiased
            advice. Our community is built on trust, transparency, and the
            belief that everyone deserves to feel confident about their
            financial future.
          </p>
        </S.Mission>

        <S.JoinUs>
          <div className="left">
            <h2>Join thousand of readers growing financially online</h2>
          </div>
          <div className="right">
            <Button type="primary">Join community</Button>
          </div>
        </S.JoinUs>
      </S.ContentWrapper>
    </S.Container>
  );
};

export default About;
