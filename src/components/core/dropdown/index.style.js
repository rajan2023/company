import styled from "styled-components";
export const Button = styled.button`
  border: 1px solid #c5c5c5;
  background-color: #f5f5f5;
  width: 100%;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  padding: 1rem;
  align-items: center;
  cursor:pointer;
  p {
    color: #515151;
    width: 100%;
    border-right: 1.5px solid #ccc;
    text-align: start;
  }
  svg {
    padding-left: 1rem;
  }
`;

export const Options = styled.ul`
  border: 1px solid #c5c5c5;
  background-color: #f5f5f5;
  border-top: none;
  position:absolute;
  width:100%;
`;
export const Option = styled.li`
  color: #000;
  font-size: 1.2rem;
  padding:1rem;
  cursor: pointer;
  &:hover {
    background-color: #c5c5c5;
  }
`;
