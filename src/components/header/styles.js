import styled from "styled-components";
import { color, breakpoint } from "../../styles";
import { Button } from "antd";
import { LuMenu } from "react-icons/lu";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 4rem;
  padding: 1rem 4rem;
  background-color: ${color.transparent};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  z-index: 999;
  position: fixed;

  ${breakpoint.tablet} {
    padding: 1rem 1.5rem;
  }

  ${breakpoint.mobile} {
    padding: 1rem 1.5rem;
  }
`;

export const NavContainer = styled.nav`
  display: flex;

  ${breakpoint.tablet} {
    display: none;
  }

  ${breakpoint.mobile} {
    display: none;
  }
`;

export const Navlinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 3rem;
  margin: 2rem 0;
  padding: 0;

  ${breakpoint.tablet} {
    flex-direction: column;
    align-items: center;
    gap: 0;
  }

  ${breakpoint.mobile} {
    flex-direction: column;
    align-items: center;
    gap: 0;
  }
`;

export const NavItem = styled.li`
  width: 100%;
  text-align: center;
  color: ${color.white};
  font-size: 1.1rem;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: ${color.emeraldGreen};
  }

  ${breakpoint.tablet} {
    color: ${color.black};
    border-bottom: 1px solid gray;
    padding: 1rem 0;
  }

  ${breakpoint.mobile} {
    color: ${color.black};
    border-bottom: 1px solid gray;
    padding: 1rem 0;
    font-size: 1rem;
  }
`;

export const JoinUsButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.6rem 1.5rem;
  height: auto;
  line-height: 1;
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

  ${breakpoint.tablet} {
    display: none;
  }

  ${breakpoint.mobile} {
    display: none;
  }
`;

export const Hamburger = styled(LuMenu)`
  color: ${color.white};
  font-size: 1.8rem;
  cursor: pointer;
  display: none;

  ${breakpoint.tablet} {
    display: block;
    font-size: 2.2rem;
  }

  ${breakpoint.mobile} {
    display: block;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(4px);
  background-color: rgba(0, 0, 0, 0.2);
  transition: opacity 0.3s ease;
  z-index: 1000;
  opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
`;

export const Sidebar = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 70%;
  background-color: ${color.white};
  border-radius: 0 1rem 1rem 0;
  padding: 2rem;
  z-index: 1000;
  transform: translateX(${({ $isOpen }) => ($isOpen ? "0" : "-105%")});
  transition: transform 0.3s ease;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  ${breakpoint.tablet} {
    width: 40%;
  }
`;

export const SidebarButton = styled(JoinUsButton)`
  display: block;
  width: 100%;
`;
