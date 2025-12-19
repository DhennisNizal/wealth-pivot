import styled from "styled-components";
import { color, breakpoint } from "../../styles";

export const Container = styled.div`
  width: 100%;
  padding: 1rem 4rem;
  margin-bottom: 8rem;

  ${breakpoint.mobile} {
    padding: 2rem 1rem;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  ${breakpoint.mobile} {
    padding: 1rem;
  }
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  ${breakpoint.mobile} {
    grid-template-columns: repeat(1, 3fr);
  }

  ${breakpoint.tablet} {
    grid-template-columns: repeat(1, 3fr);
  }

  .card-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 100%;
    min-height: 15rem;
    padding: 1.5rem;
    background-color: ${color.darkBlue};
    border-radius: 0.5rem;

    h2 {
      color: ${color.white};
      font-size: 1.5rem;
      font-weight: 400;
      text-align: center;

      ${breakpoint.mobile} {
        font-size: 1rem;
      }
    }

    svg {
      font-size: 4rem;
      color: ${color.emeraldGreen};
    }
  }
`;

export const Mission = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  color: ${color.white};
  text-align: center;
  align-items: center;

  h2 {
    font-size: 2.5rem;
    margin: 2rem 0 0 0;
    color: ${color.emeraldGreen};

    ${breakpoint.mobile} {
      font-size: 1.8rem;
    }
  }

  p {
    font-size: 1.5rem;
    line-height: 2.5rem;
    max-width: 80%;

    ${breakpoint.mobile} {
      font-size: 1rem;
      max-width: 100%;
      line-height: 2rem;
    }

    ${breakpoint.tablet} {
      max-width: 100%;
    }
  }
`;

export const JoinUs = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  color: ${color.white};
  margin: auto;

  ${breakpoint.mobile} {
    flex-direction: column;
  }
  ${breakpoint.tablet} {
    flex-direction: column;
  }

  .left {
    height: auto;

    h2 {
      margin: 0;
      font-size: 2.5rem;
      color: ${color.lightGray};

      ${breakpoint.mobile} {
        text-align: center;
        font-size: 1.8rem;
      }
      ${breakpoint.tablet} {
        text-align: center;
      }
    }
  }

  .right {
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      padding: 1.5rem 2rem;
      font-size: 1.2rem;
      font-weight: 500;
      background-color: ${color.emeraldGreen};
      color: ${color.white};
      border: none;
      transition: transform 0.2s ease;

      &:hover {
        color: ${color.white} !important;
        background-color: ${color.emeraldGreen} !important;
        transform: scale(1.03);
      }
    }
  }
`;
