import Data from "./component/data";
import Pagination from "../../components/page/pagination";
import Header from "../../components/page/header";
import Footer from "../../components/page/footer";
import Dropdown from "../../components/core/dropdown";
import SearchBox from "../../components/core/inputs/search_box";
import styled from "styled-components";
import { initial_padding } from "../../theme/padding.style";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "./component/data/store/actions";
import AddItemModal from "./component/add_item";
import { useState } from "react";
const AlignItems = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4rem;
`;
const Title = styled.p`
  font-size: 2.6rem;
  font-weight: 600;
`;
const BodyItems = styled.div`
  padding: 0 ${initial_padding};
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-top: 3rem;
  background-color: #fafafa;
`;
const Dashboard = () => {
  const [openModal, setModal] = useState(false);
  const options = [10, 15, 20];
  const items = useSelector((state) => state.data?.data);
  const dispatch = useDispatch();
  const handleClick = (option) => {
    console.log(option);
    dispatch(actions.no_of_items(option));
  };
  const AddItemHandler = () => {
    setModal((p) => !p);
  };
  return (
    <>
      <Header />
      <BodyItems>
        <Title>दस्ताबेजहरु</Title>
        <AlignItems>
          <Dropdown />
          <Dropdown />
          <Dropdown />
          <Dropdown />
          <SearchBox />
        </AlignItems>
        {items ? (
          <>
            <Data
              options={options}
              handleClick={handleClick}
              addItem={AddItemHandler}
            />
            <Pagination items={items} />
          </>
        ) : null}
        <AddItemModal display={openModal} />
      </BodyItems>
      <Footer />
    </>
  );
};
export default Dashboard;
