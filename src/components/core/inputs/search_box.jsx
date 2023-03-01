import styled from "styled-components";
import { useRef } from "react";
const SearchInput = styled.input`
  border: 1px solid #555;
  width: 22rem;
  padding: 9px 2px 9px 35px;
  background: transparent
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E")
    no-repeat 13px center;
  background-color: #f5f5f5;
  border-color: #c5c5c5;
  border-radius: 3px;
  &::placeholder {
    color: #353535;
    font-weight: 600;
  }
`;
const SearchContainer = styled.form`
  border: none;
  padding: 0;
`;
const SearchBox = (props) => {
  const searchRef = useRef();
  const searchHandler = () => {
    props.searchHandler(searchRef.current.value);
  };
  return (
    <SearchContainer onSubmit={searchHandler}>
      <SearchInput type="search" ref={searchRef} placeholder="सेअर्च" />
    </SearchContainer>
  );
};

export default SearchBox;
