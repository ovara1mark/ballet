import styled from "styled-components";

const black = "#010001";

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${black};
  padding: 2rem 4rem 2rem 4rem;

  @media screen and (max-width: 1250px) {
    padding: 2rem 0.5rem 2rem 0.5rem;
  }

  @media screen and (max-width: 1230px) {
    padding: 2rem 0.5rem 2rem 0.5rem;
  }

  @media screen and (max-width: 1230px) {
    padding: 2rem 1rem 2rem 1rem;
  }
`;

export const NavLeft = styled.div`
  width: 90px;
`;

export const Logo = styled.img`
  max-width: 100%;
`;

export const NavRight = styled.div`
  width: 60%;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  padding-top: 7px;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const ListChild = styled.ul`
  padding: 1rem;
  list-style: none;
  background-color: #fffaf5;
  box-shadow: 0 10px 30px 0rgba (45, 45, 45, 0.2);
  position: absolute;
  top: calc(100% + 0.25rem);
  left: 0;
  z-index: 9999999;
  height: 10vh;
  width: 10vw;
  visibility: hidden;
  transition: opacity 150ms ease-in-out, transform 150ms ease-in-out;
`;

export const List = styled.li`
  list-style-type: none;
  font-family: "Poppins", sans-serif;
  font-size: 13px;
  position: relative;
  padding: 0rem 1rem 0.5rem 1rem;
`;

export const NavListTwo = styled.div`
  display: none;

  @media screen and (max-width: 1000px) {
    display: flex;
    justify-content: flex-end;
  }
`;

export const ListDrop = styled.li`
  list-style-type: none;
  padding: 0.5rem 0rem;
  color: black;
  &:hover {
    color: #ed5a45;
  }
`;
