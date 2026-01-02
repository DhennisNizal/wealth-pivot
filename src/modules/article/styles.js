import styled from "styled-components";
import { breakpoint, color } from "../../styles";
import { Button } from "antd";


export const Container = styled.section`
  width: 100%;
  padding: 1rem 4rem;
  margin-bottom: 8rem;

  ${breakpoint.mobile} {
    padding: 2rem;
  }
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  justify-content: center;

  ${breakpoint.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }

  ${breakpoint.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ViewAllButton = styled(Button)`
  display: block;
  margin: 3rem auto;
  width: 6.5rem;
  height: 2.5rem;
  color: ${color.white};
  background-color: ${color.emeraldGreen};
  border: none;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    color: ${color.white} !important;
    background-color: ${color.emeraldGreen} !important;
    transform: scale(1.05);
  }
`;