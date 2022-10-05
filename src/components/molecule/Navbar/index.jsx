import React from "react";
import logo from "../../../assets/logowhite.png";
import { Logo, Nav, NavLeft, NavRight, NavList, List } from "./app";
import { BsCaretDownFill } from "react-icons/bs";
import { CustomLink } from "../../atom";

export const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLeft>
          <Logo src={logo} alt="logo" />
        </NavLeft>
        <NavRight>
          <NavList>
            <List>
              <CustomLink to="/" className="link">
                HOME
              </CustomLink>
            </List>
            <List>
              <CustomLink to="about" className="link">
                ABOUT
              </CustomLink>
            </List>
            <List>
              <CustomLink to="/classes" className="link link-icon">
                CLASSES
                <BsCaretDownFill className="icon" />
              </CustomLink>
            </List>
            <List className="link link-icon">
              OTHERS
              <BsCaretDownFill className="icon" />
            </List>
            <List>
              <CustomLink to="/contact" className="link">
                CONTACT
              </CustomLink>
            </List>
          </NavList>
        </NavRight>
      </Nav>
    </>
  );
};
