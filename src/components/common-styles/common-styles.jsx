import styled from "styled-components";
import { breakpoint } from "../../styles";

export const SectionWrapper = styled.section`
  height: auto;
  width: 100%;
  margin: auto;
  font-family: "Roboto", sans-serif;

  ${breakpoint.mobile} {
    padding: 0;
  }
`;

export const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
