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

export const NavList = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 7px;
`;

export const List = styled.div`
  list-style-type: none;
  font-family: "Poppins", sans-serif;
  font-size: 13px;
`;
