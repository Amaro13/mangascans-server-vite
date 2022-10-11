import styled, { css } from "styled-components";

interface ActiveButtonProps {
  active?: boolean;
}

export const SettingsContainer = styled.div`
  ${({ theme }) => css`
    width: 20%;
    height: 100%;
    color: #fff;
    display: flex;
    flex-flow: column;
    background-color: ${theme.colors.baseBg1};
  `}
`;

export const SettingsNavigationButtonsList = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.baseBg2};
    /* margin: 1.5rem 0; */
    border-radius: 8px;
    overflow: hidden;
  `}
`;

export const SettingsNavigationButtonContainer = styled.div<ActiveButtonProps>`
  ${({ theme, active }) => css`
    width: 100%;
    height: 5.5rem;
    padding: 1.5rem 0;
    padding-left: 3rem;
    box-sizing: border-box;
    cursor: pointer;
    h2 {
      font-size: 14px;
    }
    p {
      font-size: 12px;
      color: ${theme.colors.textLight};
    }
    ${active &&
    css`
      background-color: ${theme.colors.primaryColorOpacity};
    `}
  `}
`;

export const SettingsNavigationButtonSelected = styled.div<ActiveButtonProps>`
  ${({ theme, active }) => css`
    width: 100%;
    height: 100%;
    position: relative;
    svg {
      position: absolute;
      left: -1.4rem;
    }
    ${active &&
    css`
      border-right: 2px solid ${theme.colors.primaryColor};
      box-sizing: border-box;
      svg {
        color: ${theme.colors.primaryColor};
      }
    `}
  `}
`;
