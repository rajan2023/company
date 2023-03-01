import styled from "styled-components";
import ReactPaginate from "react-paginate";
export const Pagination = styled(ReactPaginate)`
  display: flex;
  justify-content: center;
  .page-item {
    gap: 2rem;
    font-size: 1.4rem;
    cursor: pointer;
    border: 1px solid #c5c5c5;
    text-transform: uppercase;
    font-weight: 500;
    padding: 5px 8px;
    transition: all 0.2s;
    &:hover {
      background-color: #50b0cb;
    }
  }
  .active {
    background-color: #50b0cb;
  }

  .disabled {
    cursor: not-allowed;
    &:hover {
      background-color: #ccc;
    }
  }
`;
