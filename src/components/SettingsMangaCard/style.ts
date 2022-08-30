import styled, { css } from "styled-components";

export const SettingsMangaCardContainer = styled.div`
  ${({ theme }) => css`
    width: 13.75rem;
    height: 18.75rem;
    border-radius: 8px;
    border: 1px solid ${theme.colors.baseLine};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    color: ${theme.colors.textColor};
    text-align: center;
    div {
      display: flex;
      width: 100%;
    }

    img {
      width: 10.25rem;
      height: 13.75rem;
    }

    p {
      color: ${theme.colors.textLight};
    }
  `}
`;

export const SettingsMangaCardButton = styled.button`
  ${({ theme }) => css`
    height: 1.25rem;
    width: 50%;
    border-radius: 0px 0px 8px 0px;
    background-color: ${theme.colors.primaryColorOpacity};
    color: ${theme.colors.primaryColor};
    border: 1px solid ${theme.colors.primaryColor};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;
  `}
`;
