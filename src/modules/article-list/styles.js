import styled from "styled-components";
import { breakpoint } from "../../styles";

export const Container = styled.section`
  width: 100%;
  padding: 4rem 4rem 1rem 4rem;
  margin-bottom: 8rem;

  ${breakpoint.mobile} {
    padding: 2rem;
  }
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  justify-content: center;

  ${breakpoint.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }

  ${breakpoint.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
`;
