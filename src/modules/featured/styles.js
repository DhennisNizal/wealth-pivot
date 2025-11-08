import styled from "styled-components";
import { color, breakpoint } from "../../styles";
import { Button } from "antd";

export const Container = styled.section`
  width: 100%;
  position: relative;
  padding: 1rem 4rem;
  margin-bottom: 8rem;

  ${breakpoint.mobile} {
    padding: 2rem 1rem;
  }
`;

export const CarouselContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const CardWrapper = styled.div`
  display: flex;
  gap: 2rem;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding-bottom: 1rem;

  scrollbar-width: thin;
  scrollbar-color: ${color.emeraldGreen} rgba(255, 255, 255, 0.15);

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.15);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${color.emeraldGreen};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${color.emeraldGreen};
  }
`;

export const Card = styled.article`
  flex: 0 0 auto;
  width: 25rem;
  background-color: #23395d;
  border-radius: 0.5rem;
  color: white;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  .article-thumbnail img {
    object-fit: cover;
    width: 100%;
    height: auto;
    border-radius: 0.5rem 0.5rem 0 0;
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
    }

    .title {
      margin: 0;
      color: ${color.white};
      font-size: 1.6rem;
      font-weight: 600;
    }

    .description {
      margin: 0;
      color: ${color.lightGray};
      line-height: 1.5rem;
    }

    .duration {
      margin: 0;
      color: ${color.gray};
      font-size: 0.9rem;
    }
  }
`;

export const ScrollButton = styled(Button)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  border: none;
  background: rgba(0, 0, 0, 0.4);
  color: white;
  border-radius: 50%;
  width: 3.5rem !important;
  height: 3.5rem !important;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 !important;
  font-size: 1.4rem;

  &:hover {
    background: ${color.emeraldGreen};
    color: white;
  }

  &.left {
    left: 1rem;
  }

  &.right {
    right: 1rem;
  }

  ${breakpoint.mobile} {
    display: none !important;
  }
`;
