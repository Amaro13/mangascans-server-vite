import styled, { css } from "styled-components"; // importing to enable the use of css in this .ts file (must install first)
import theme from "../../assets/styles/theme";

interface LogoutProps {
  logout?: boolean;
  active?: boolean;
}

interface LogoutButtonProps {
  active?: boolean;
}

export const HeaderContainer = styled.div`
  width: 100%;
  height: 3.8rem;
  display: flex;
  color: ${theme.colors.textLight};
  background-color: ${theme.colors.primaryColor};
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  img {
    width: 3.125rem;
    margin-left: 14vw;
  }
`;

// primaryColor: "#0B0BA0D", // black
// secondaryColor: "#B8B8B8", //gray
// terciaryColor: "#913fe2" //purple

export const TitleContainer = styled.div`
  height: 3.8rem;
  width: 50%;
  display: flex;
  background-color: ${theme.colors.primaryColor};
  align-items: center;
  box-sizing: border-box;
  img {
    width: 3.125rem;
    margin-left: 14vw;
  }
  h1 {
    font-family: "Big Shoulders Inline Display", cursive;
    text-transform: uppercase;
    margin-left: 1rem;
    margin-right: 1rem;
  }
  p {
    text-transform: capitalize;
    font-size: 20px;
  }
`;

export const SearchContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchInputContainer = styled.div`
  width: 21.875rem;
  height: 2.125rem;
  background-color: #16151b;
  border: 1px solid #393c49;
  border-radius: 3px;
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 10px;

  form {
    display: flex;
    width: 21.875rem;
  }
  input {
    background-color: #16151b;
    width: 21.875rem;
    color: #ffffff;
    font-size: 0.9rem;
    padding: 0.375rem 0.75rem;
    padding-top: 0.375rem;
    padding-right: 1.875rem;
    padding-bottom: 0.375rem;
    padding-left: 0.75rem;
    :focus {
      outline: none;
    }
  }
  button {
    background-color: #16151b;
    width: 3.125rem;
    height: 2.125rem;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;

export const HeaderNav = styled.div`
  height: 2.6rem;
  background-color: #913fe2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  nav {
    width: 100%;
  }
`;

export const Pages = styled.div`
  margin-left: 13vw;
  line-height: 2.5;
  position: relative;
  float: left;
  display: flex;
`;

export const Box = styled.div`
  display: flex;
  height: 2.6rem;
  text-align: center;
  padding: 0 1rem;
  color: #fff;
  border-left: 0;
  position: relative;
`;

export const Link = styled.button`
  display: block;
  text-align: center;
  color: #fff;
  background-color: #913fe2;
  transition: color 0.5s;
  position: relative;
  font-family: fira sans, sans-serif;
  font-size: 0.9rem;
  cursor: pointer;
  :hover {
    background: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25));
  }
`;

export const Logout = styled.div<LogoutProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 16rem;
  /* border-radius: 12px 0px 0px 12px; */

  ${({ logout }) =>
    logout &&
    css`
      bottom: 0;
      width: calc(6.5rem - 12px);
      border-radius: 16px;
    `}

  ${({ active }) =>
    active &&
    css`
      background-color: #252836;
    `}
`;

export const LogoutButton = styled.button<LogoutButtonProps>`
  width: 2.6rem;
  height: 2.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  background-color: #913fe2;
  /* border-radius: 8px; */
  color: #6cea69;
  cursor: pointer;

  :hover {
    background: linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25));
  }

  ${({ active }) =>
    active &&
    css`
      background-color: #6cea69;
      color: #ffffff;
    `}
`;
