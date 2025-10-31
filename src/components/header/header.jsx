import React, { useState } from "react";
import Logo from "../logo";
import * as S from "./styles";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen((prev) => !prev);
  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      <S.HeaderWrapper>
        <Logo />
        <S.NavContainer>
          <S.Navlinks>
            <S.NavItem>Home</S.NavItem>
            <S.NavItem>Featured</S.NavItem>
            <S.NavItem>About</S.NavItem>
            <S.NavItem>Articles</S.NavItem>
            <S.NavItem>Contact</S.NavItem>
          </S.Navlinks>
        </S.NavContainer>
        <S.JoinUsButton>Join us</S.JoinUsButton>
        <S.Hamburger onClick={toggleSidebar} />
      </S.HeaderWrapper>

      {/* Overlay */}
      <S.Overlay $isOpen={isOpen} onClick={closeSidebar} />

      {/* Sidebar */}
      <S.Sidebar $isOpen={isOpen}>
        <S.Navlinks>
          <S.NavItem onClick={closeSidebar}>Home</S.NavItem>
          <S.NavItem onClick={closeSidebar}>Featured</S.NavItem>
          <S.NavItem onClick={closeSidebar}>About</S.NavItem>
          <S.NavItem onClick={closeSidebar}>Articles</S.NavItem>
        </S.Navlinks>
        <S.SidebarButton onClick={closeSidebar}>Join us</S.SidebarButton>
      </S.Sidebar>
    </>
  );
};

export default Header;
