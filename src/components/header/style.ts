import styled, { css } from "styled-components"; // importing to enable the use of css in this .ts file (must install first)

interface HeaderItemProps {
  logout?: boolean;
  active?: boolean;
}

interface HeaderItemButtonProps {
  active?: boolean;
}

export const HeaderContainer = styled.div`
  height: 3.8rem;
  background-color: #0b0a0d;
  display: flex;
  align-items: center;
  img {
    width: 3.125rem;
    margin-left: 15vw;
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-right: 42rem;
  }
  nav {
    width: 100%;
  }
`;

export const SearchDiv = styled.div`
  float: right;
  width: 23rem;
  /* margin: 1rem; */
  position: relative;
`;

export const formu = styled.form`
  display: flex;
  /* margin-top: 0em; */
  align-content: center;
  align-items: center;
  /* button {
    height: 100%;
    width: 1.3rem;
    color: #17151b;
  }
  img {
    height: 100%;
    width: 100%;
    margin-left: 0;
    margin-top: 0;
    margin-bottom: 0;
    margin-right: 0;
  } */
`;
export const Searchbox = styled.input`
  font-weight: 300;
  background: #17151b;
  box-shadow: none;
  display: block;
  width: 80%;
  height: 1.3rem;
  padding: 0.375rem 0.7rem;
  font-family: inherit;
  line-height: 1.42857143;
  color: #fff;
  border: 1px solid #23202a;
  border-radius: 3px;
`;

export const HeaderNav = styled.div`
  height: 2.6rem;
  background-color: #913fe2;
  display: flex;
  align-items: center;
  nav {
    width: 100%;
  }
`;

export const Menu = styled.ul`
  margin-left: 13vw;
  line-height: 1.5;
  position: relative;
  float: left;
  display: flex;
`;

export const Link = styled.a`
  display: block;
  text-align: center;
  padding: 0 1rem;
  color: #fff;
  border-left: 0;
  transition: color 0.5s;
  position: relative;
  font-family: fira sans, sans-serif;
  font-size: 0.9rem;
  text-decoration: none;
  :hover {
    background-color: rgb(151, 120, 209);
  }
`;
