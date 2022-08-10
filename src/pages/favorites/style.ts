import styled, { css } from "styled-components"; // importing to enable the use of css in this .ts file (must install first)
import theme from "../../assets/styles/theme";

interface GenresNavigationButtonProps {
  active?: boolean;
}

export const favorites = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    min-width: 100vw;
    min-height: 100vh;
    color: ${theme.colors.textColor};
    display: flex;
    justify-content: space-between;
  `}
`;

export const FavoritesContent = styled.main`
  ${() => css`
    width: 100%;
    /* padding: 20px; */
    overflow: auto;
    height: 100vh;
    box-sizing: border-box;
  `}
`;

export const GenresNavigationBar = styled.div`
  width: 80%;
  margin-left: 13vw;
  margin-top: 2vh;
  height: 3vh;
  border-bottom: 1px solid #393c49;
  display: flex;
`;

export const GenresNavigationButton = styled.button<GenresNavigationButtonProps>`
  color: #393c49;
  border: 0;
  cursor: pointer;
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  margin-right: 0.4rem;
  background-color: ${theme.colors.primaryColor};

  :hover {
    color: #ffffff;
  }

  ${({ active }) =>
    active &&
    css`
      color: #6cea69;
      border-bottom: 2px solid #6cea69;
    `}
`;

export const MangasHeaderContainer = styled.div`
  width: 100%;
  margin-left: 13vw;
  height: 12vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;

  h2 {
    font-size: 16px;
    color: #fff;
    line-height: 20px;
    font-weight: 550;
    font-family: fira sans, sans-serif;
  }
`;

export const SearchContainer = styled.div`
  position: absolute;
  margin-top: -5.6rem;
  margin-left: 65rem;
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
