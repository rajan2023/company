import styled from "styled-components";
export const ModalDesign = styled.div`
  position: absolute;
  width: max-content;
  padding: 2rem;
  box-sizing: border-box;
  background-color: #ccc;
  box-shadow: 0px -1px 10px rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(0, 0, 0, 0.15);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  display: ${(props) => (props.display ? "flex" : "none")};
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  z-index: 101;
  font-size:1.5rem;
  textarea {
    padding: 1rem 1.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
    width: 35rem;
  }
  textarea {
    height: 15rem;
  }
`;
