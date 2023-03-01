import styled from "styled-components";
export const AlignItems = styled.div`
  display: flex;
  gap: 2rem;
`;
export const Button = styled.button`
  cursor: pointer;
  &:hover {
    svg {
      path {
        fill: red;
        transition: all 0.3s;
      }
    }
  }
`;
