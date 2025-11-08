import styled from "styled-components";

export const Wrapper = styled.div`
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: ${(props) =>
    props.isVisible ? "translateY(0px)" : "translateY(5rem)"};
  transition: all 0.8s ease;
`;
