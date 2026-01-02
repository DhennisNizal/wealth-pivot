import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import Logo from "../logo";
import * as S from "./styles";
import JoinModal from "../join-modal";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // sidebar
  const [isModalVisible, setModalVisible] = useState(false); // modal

  const toggleSidebar = () => setIsOpen((prev) => !prev);
  const closeSidebar = () => setIsOpen(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  const handleSubmit = (email) => {
    console.log("Email submitted:", email);
  };

  const scrollWithOffset = (el) => {
    const yOffset = -80; // negative value moves the scroll up
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <>
      <S.HeaderWrapper>
        <HashLink smooth to="#home" scroll={scrollWithOffset}>
          <Logo />
        </HashLink>
        <S.NavContainer>
          <S.Navlinks>
            <S.NavItem
              as={HashLink}
              smooth
              to="#home"
              scroll={scrollWithOffset}
            >
              Home
            </S.NavItem>
            <S.NavItem
              as={HashLink}
              smooth
              to="#featured"
              scroll={scrollWithOffset}
            >
              Featured
            </S.NavItem>
            <S.NavItem
              as={HashLink}
              smooth
              to="#about"
              scroll={scrollWithOffset}
            >
              About
            </S.NavItem>
            <S.NavItem
              as={HashLink}
              smooth
              to="#article"
              scroll={scrollWithOffset}
            >
              Articles
            </S.NavItem>
            <S.NavItem
              as={HashLink}
              smooth
              to="#footer"
              scroll={scrollWithOffset}
            >
              Contact
            </S.NavItem>
          </S.Navlinks>
        </S.NavContainer>

        {/* Join Us button */}
        <S.JoinUsButton onClick={openModal}>Join us</S.JoinUsButton>

        <S.Hamburger onClick={toggleSidebar} />
      </S.HeaderWrapper>

      {/* Overlay */}
      <S.Overlay $isOpen={isOpen} onClick={closeSidebar} />

      {/* Sidebar */}
      <S.Sidebar $isOpen={isOpen}>
        <S.Navlinks>
          <S.NavItem
            as={HashLink}
            smooth
            to="#home"
            scroll={scrollWithOffset}
            onClick={closeSidebar}
          >
            Home
          </S.NavItem>
          <S.NavItem
            as={HashLink}
            smooth
            to="#featured"
            scroll={scrollWithOffset}
            onClick={closeSidebar}
          >
            Featured
          </S.NavItem>
          <S.NavItem
            as={HashLink}
            smooth
            to="#about"
            scroll={scrollWithOffset}
            onClick={closeSidebar}
          >
            About
          </S.NavItem>
          <S.NavItem
            as={HashLink}
            smooth
            to="#article"
            scroll={scrollWithOffset}
            onClick={closeSidebar}
          >
            Articles
          </S.NavItem>
        </S.Navlinks>
        <S.SidebarButton
          onClick={() => {
            closeSidebar();
            openModal();
          }}
        >
          Join us
        </S.SidebarButton>
      </S.Sidebar>

      <JoinModal
        visible={isModalVisible}
        onClose={closeModal}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default Header;
