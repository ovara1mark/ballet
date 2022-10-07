import React, { useState } from "react";
import logo from "../../../assets/logowhite.png";
import {
  Logo,
  Nav,
  NavLeft,
  NavRight,
  NavList,
  List,
  NavListTwo,
  ListChild,
  ListDrop,
} from "./app";
import { BsCaretDownFill } from "react-icons/bs";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { CustomLink } from "../../atom";

export const Navbar = () => {
  const [menu, setMenu] = useState(false);
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
              <CustomLink to="classes" className="link link-icon">
                CLASSES
                <BsCaretDownFill className="icon" />
              </CustomLink>
            </List>
            <List className="link link-icon">
              OTHERS
              <BsCaretDownFill className="icon" />
              <ListChild className="list-child">
                <ListDrop>Classes</ListDrop>
                <ListDrop>Classes Detail</ListDrop>
              </ListChild>
            </List>
            <List>
              <CustomLink to="/contact" className="link">
                CONTACT
              </CustomLink>
            </List>
          </NavList>
          <NavListTwo>
            <HiOutlineMenuAlt3
              onClick={() => setMenu(!menu)}
              className="hi-menu"
            />
          </NavListTwo>
        </NavRight>
      </Nav>
      <div className={menu ? "show" : "hide"}>
        <div className={menu ? "drop-menu-child" : "drop-menu--"}>
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
              <CustomLink to="classes" className="link link-icon">
                CLASSES
                <BsCaretDownFill className="icon" />
              </CustomLink>
            </List>
            <List className="link link-icon">
              OTHERS
              <BsCaretDownFill className="icon" />
              <ListChild>
                <ListDrop>Classes</ListDrop>
                <ListDrop>Classes Detail</ListDrop>
              </ListChild>
            </List>
            <List>
              <CustomLink to="/contact" className="link">
                CONTACT
              </CustomLink>
            </List>
          </NavList>
        </div>
      </div>
    </>
  );
};
