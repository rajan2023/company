import styled from "styled-components";
export const TableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
  tr:nth-child(even) {
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
  }
  tr:last-child {
    border-bottom: none;
  }
  th,td{
    padding:1rem 0;
    padding-left:3rem;
  }
  tr,
  th {
    text-align: start;
  }
`;
