import styled from "styled-components";
import { color, breakpoint } from "../../styles/index";

export const TextLogo = styled.a`
  cursor: pointer;
  font-size: ${(props) => props.fontSize || "1.5rem"};
  font-weight: 700;
  color: ${color.emeraldGreen};

  .wealth {
    color: ${color.white};
  }

  .pivot {
    color: ${color.gray};
  }

  ${breakpoint.mobile} {
    font-size: 1.2rem;
  }
`;
