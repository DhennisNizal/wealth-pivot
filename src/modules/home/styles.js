import styled from "styled-components";
import { color, breakpoint } from "../../styles";

export const Container = styled.div`
  width: 100%;
  height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem 4rem;

  ${breakpoint.mobile} {
    height: auto;
    flex-direction: column-reverse;
    margin-top: 4rem;
    padding: 1rem;
    gap: 0;
  }

  ${breakpoint.tablet} {
    height: auto;
    flex-direction: column-reverse;
    margin-top: 4rem;
    padding: 1rem;
    gap: 0;
  }
`;

export const LeftContent = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  color: white;

  ${breakpoint.mobile} {
    width: 100%;
    align-items: center;
    text-align: center;
  }

  ${breakpoint.tablet} {
    align-items: center;
    text-align: center;
    width: 100%;
  }

  .text-wrapper h1:first-of-type {
    margin: 0;
    color: ${color.white};
    font-size: 4rem;

    ${breakpoint.mobile} {
      font-size: 2rem;
    }
  }

  .text-wrapper h1:nth-of-type(2) {
    margin: 0;
    color: ${color.emeraldGreen};
    font-size: 4rem;
    margin-bottom: 3rem;

    ${breakpoint.mobile} {
      font-size: 2rem;
    }

    span {
      color: ${color.white};
    }
  }

  .text-wrapper h2:first-of-type {
    margin: 0;
    color: ${color.emeraldGreen};

    ${breakpoint.mobile} {
      font-size: 1rem;
    }
  }

  .text-wrapper h2:nth-of-type(2) {
    margin: 0;
    color: ${color.lightGray};
    font-weight: 400;

    ${breakpoint.mobile} {
      font-size: 1rem;
    }
  }

  .phrase p {
    margin: 0;
    color: ${color.gray};
    font-size: 1.2rem;

    ${breakpoint.mobile} {
      font-size: 1rem;
    }
  }

  .button-wrapper {
    display: flex;
    gap: 1rem;

    ${breakpoint.mobile} {
      flex-direction: column;
    }

    button {
      padding: 1.5rem;
      border-radius: 0.6rem;
    }
  }

  .button-1 {
    background-color: ${color.emeraldGreen};
    color: ${color.white};
    border: none;
    font-weight: 600;
    font-size: 1rem;
    transition: transform 0.2s ease;

    &:hover {
      color: ${color.white} !important;
      background-color: ${color.emeraldGreen} !important;
      transform: scale(1.05);
    }
  }

  .button-2 {
    background-color: #333333;
    border: 1px solid ${color.gray};
    color: ${color.emeraldGreen};
    font-weight: 600;
    font-size: 1rem;
    transition: transform 0.2s ease;

    &:hover {
      color: ${color.emeraldGreen} !important;
      background-color: #333333 !important;
      border: 1px solid ${color.gray} !important;
      transform: scale(1.05);
    }
  }
`;

export const RightContent = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;

  ${breakpoint.mobile} {
    width: 100%;
  }

  ${breakpoint.tablet} {
    width: 100%;
  }
`;
