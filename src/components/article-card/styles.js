import styled from "styled-components";
import { color, breakpoint } from "../../styles";

export const Card = styled.article`
  flex: 0 0 auto;
  width: auto;
  background-color: ${color.darkBlue};
  border-radius: 0.5rem;
  color: white;
  cursor: pointer;
  transition: transform 0.3s ease;

  ${breakpoint.mobile} {
    height: auto;
  }

  &:hover {
    transform: translateY(-5px);
  }

  .article-thumbnail {
    aspect-ratio: 4 / 3;
    width: 100%;
    overflow: hidden;
    border-radius: 0.5rem 0.5rem 0 0;
  }

  .article-thumbnail img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .article-info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1.2rem;

    .category {
      margin: 0;
      color: ${color.emeraldGreen};
      font-size: 1.2rem;
      font-weight: 500;

      ${breakpoint.mobile} {
        font-size: 1rem;
      }
    }

    .title {
      margin: 0;
      color: ${color.white};
      font-size: 1.6rem;
      font-weight: 600;

      ${breakpoint.mobile} {
        font-size: 1.3rem;
      }
    }

    .description {
      margin: 0;
      color: ${color.lightGray};
      line-height: 1.5rem;

      ${breakpoint.mobile} {
        font-size: 0.9rem;
      }
    }

    .duration {
      margin: 0;
      color: ${color.lightGray};
      font-size: 0.9rem;
      font-weight: 300;
    }
  }
`;
