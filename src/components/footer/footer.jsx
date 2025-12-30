import React from "react";
import { LuMail, LuFacebook, LuInstagram, LuTwitter } from "react-icons/lu";
import Logo from "../logo";
import styled from "styled-components";
import { color, breakpoint } from "../../styles";

const Wrapper = styled.section`
  width: 100%;
  height: auto;
  padding: 2rem 8rem;
  background-color: ${color.darkBlue};

  ${breakpoint.mobile} {
    padding: 1.5rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .brandname {
    color: ${color.white};
    margin: 0;
    font-size: 2.2rem;
  }

  .tagline {
    color: ${color.white};
    margin: 1rem 0 0 0;
    font-weight: 500;
    font-size: 1.3rem;

    ${breakpoint.mobile} {
      font-size: 1.1rem;
    }
  }

  .tagline-description {
    color: ${color.lightGray};
    margin: 0.5rem 0;
    font-weight: 400;
    font-size: 1.2rem;

    ${breakpoint.mobile} {
      font-size: 1rem;
    }
  }

  .contact {
    h3 {
      color: ${color.white};
      font-size: 1.6rem;
      margin: 0.8rem 0;

      ${breakpoint.mobile} {
        font-size: 1.3rem;
      }
    }
  }

  .socials {
    display: flex;
    gap: 0.8rem;

    svg {
      color: ${color.lightGray};
      font-size: 1.5rem;
      cursor: pointer;
    }
  }

  .copyright {
    display: flex;
    align-items: center;
    justify-content: center;

    h3 {
      color: ${color.white};
      font-size: 1rem;
      font-weight: 400;
      margin: 2rem 0 0 0;
    }
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <Content>
        <div>
          <Logo $fontSize="2rem" />
          <h2 className="tagline">
            Helping you make smarter financial choices
          </h2>
          <h3 className="tagline-description">
            We share practical financial tips, money-saving strategies, and
            easy-to-understand advice to help you manage your finances with
            confidence
          </h3>
        </div>

        <div className="contact">
          <h3>Get in touch</h3>
          <div className="socials">
            <LuMail />
            <LuFacebook />
            <LuInstagram />
            <LuTwitter />
          </div>
        </div>

        <div className="copyright">
          <h3>©2025 Wealth Pivot. All rights reserved.</h3>
        </div>
      </Content>
    </Wrapper>
  );
};

export default Footer;
