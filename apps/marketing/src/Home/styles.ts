import { css } from "@emotion/react";

export const gallery = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
`;

export const galleryImage = css`
  display: block;
  max-width: 100%;
`;
