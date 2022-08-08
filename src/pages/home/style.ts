import styled, { css } from "styled-components"; // importing to enable the use of css in this .ts file (must install first)
import theme from "../../assets/styles/theme";

interface GenresNavigationButtonProps {
  active?: boolean;
}

export const home = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.primaryColor};
    min-width: 100vw;
    min-height: 100vh;
    color: ${theme.colors.textColor};
    display: flex;
    justify-content: space-between;
  `}
`;

export const HomeContent = styled.main`
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
`;
