import { css } from "styled-components";

export const body_font = "Work Sans, sans-serif";
export const title_font = ``;

export const font_weight = {
  light: css`
    font-weight: 300;
  `,
  default: css`
    font-weight: 400;
  `,
  medium: css`
    font-weight: 500;
  `,
  bold: css`
    font-weight: 600;
  `,
  custom: (value) => css`
    font-weight: ${value};
  `,
};
export const font_size = {
  small_size: css`
    font-size: 13px;
  `,
  primary_size: css`
    font-size: 14px;
  `,
  medium_size: css`
    font-size: 16px;
  `,
  large_size: css`
    font-size: 24px;
  `,
  size: (size) => `font-size:${size}px`,
};
