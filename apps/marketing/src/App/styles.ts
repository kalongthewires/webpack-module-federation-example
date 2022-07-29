import { css } from "@emotion/react";

export const root = css`
  font-family: Roboto, sans-serif;
`;

export const globalHeader = css`
  background: #000;
  color: #fff;
  margin: 0;
  padding: 0 0.8rem;
`;

export const globalHeaderContent = css`
  align-items: center;
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
`;

export const brand = css`
  font-size: 1.2rem;
  margin-right: 2rem;
`;

export const globalNavLinks = css`
  display: flex;
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const globalNavItem = css`
  padding-right: 1rem;
`;

export const globalNavLink = css`
  color: #fff;

  &:focus {
    outline: 2px solid #efefef;
    outline-offset: 2px;
  }
`;

export const pageContent = css`
  margin: 0 auto 5rem;
  max-width: 1200px;
`;
