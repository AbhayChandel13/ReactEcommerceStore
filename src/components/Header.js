import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav"
const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src="/images/logo.png" alt="Logo img"  className="logo" />
      </NavLink>
      <Nav /> 
    </MainHeader>
  );
};
const MainHeader = styled.header`
  padding: 0.48rem;
  height: 10rem;
  background-clor: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-right:40px;

  .logo {   
    width:100%;
    max-width: 200px;
    margin-left:10px;
  }
`;

export default Header;
