import styled from "styled-components";
import { color, breakpoint } from "../../styles";

export const SectionTitleWrapper = styled.div`
  margin-bottom: 3rem;

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin: 0;
    color: ${color.emeraldGreen};

    ${breakpoint.mobile} {
      font-size: 2rem;
      text-align: center;
    }
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 400;
    color: ${color.white};
    margin: 0;

    ${breakpoint.mobile} {
      font-size: 1rem;
      text-align: center;
    }
  }
`;
