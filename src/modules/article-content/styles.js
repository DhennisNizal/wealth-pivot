import styled from "styled-components";
import { breakpoint, color } from "../../styles";


export const Container = styled.section`
  width: 100%;
  padding: 4rem 8rem 1rem 8rem;
  margin-bottom: 8rem;

  ${breakpoint.mobile} {
    padding: 1.5rem;
  }

  ${breakpoint.tablet} {
    padding: 4rem;
  }
`;

export const Content = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: white;
  text-align: center;

  .thumbnail {
    display: block;
    object-fit: cover;
    height: 60vh;
    width: 100%;
    border-radius: 1rem;
  }

  .duration {
    display: inline-block;
    font-weight: 500;
    margin: 1rem auto 4rem auto;
    border: 3px solid ${color.emeraldGreen};
    padding: 1rem 2rem;
    border-radius: 1rem;
  }

  .title {
    margin: 0;
    font-size: 3.5rem;
    color: ${color.emeraldGreen};

    ${breakpoint.mobile} {
      font-size: 2rem;
    }
  }

  .description {
    margin: 0 0 3rem 0;
    font-size: 1.5rem;
    font-weight: 500;

    ${breakpoint.mobile} {
      font-size: 1.3rem;
    }
  }

  .article-content {
    font-size: 1.2rem;
    line-height: 2rem;
  }
`;