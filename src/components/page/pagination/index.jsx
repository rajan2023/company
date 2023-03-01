import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as actions from "./store/action";
import {Pagination} from './index.style';
import {useSelector} from "react-redux";
const PaginatedItems = ({ items }) => {
  console.log(items);
  const items_per_page = useSelector((state) => state.items_per_page?.data);
  const dispatch = useDispatch();
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + items_per_page;
  const currentItems = items.slice(itemOffset, endOffset);
  dispatch(actions.current_data(currentItems));
  const pageCount = Math.ceil(items.length / items_per_page);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * items_per_page) % items.length;
    setItemOffset(newOffset);
  };
  return (
    <>
      <Pagination
        nextLabel="next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        disabledClassName="disabled"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </>
  );
};
export default PaginatedItems;
