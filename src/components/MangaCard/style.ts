import styled, { css } from "styled-components";
import { Theme } from "../../types/styled-components";

interface CardContainerProps {
  theme: Theme;
  active?: boolean;
}

export const CardContainer = styled.div<CardContainerProps>`
  ${({ theme }) => css`
    width: 13rem;
    height: 18.125rem;
    background-color: ${theme.colors.baseBg2};
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: ${theme.constants.bodyFontFamily};
    position: relative;
    text-align: center;
    justify-content: center;
    align-content: center;
    padding: 1rem;
    padding-top: 3rem;
    box-sizing: border-box;

    img {
      width: 8rem;
      height: 15rem;
      padding-bottom: 1rem;
    }
  `}
`;
