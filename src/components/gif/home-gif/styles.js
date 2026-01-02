import styled from "styled-components";
import { breakpoint } from "../../../styles";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  ${breakpoint.tablet} {
    width: 50%;
    height: 50%;
  }
`;
