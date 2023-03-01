import Table from "../../../../components/page/table/table";
import { Button } from "../../../../components/core/button/index.style";
import { primary_color, secondary_color } from "../../../../theme/color.style";
import Dropdown from "../../../../components/core/dropdown";
import styled from "styled-components";
import { initial_padding } from "../../../../theme/padding.style";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import * as actions from "../../state/action";
const FilterBtn = styled(Button)`
  background-color: ${primary_color};
`;
const AddBtn = styled(Button)`
  background-color: ${secondary_color};
`;
const DisplayFlex = styled.div`
  display: flex;
  flex-direction: row;
`;
const ListStyle = styled(DisplayFlex)`
  gap: 1rem;
  align-items: flex-start;
  p {
    font-size: 1.2rem;
  }
`;
const AlignItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${initial_padding};
`;
const Buttons = styled(DisplayFlex)`
  gap: 1.5rem;
`;
const DataContainer = styled.div`
  border: 1px solid #eee;
  border-radius: 3px;
  padding: ${initial_padding};
  display: flex;
  flex-direction: column;
  gap: 2.3rem;
  background-color: white;
`;
const Data = (props) => {
  const dispatch = useDispatch();
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
      res.json()
    )
  );
  if (error) {
    return dispatch(actions.fetch_data_failure(error));
  }
  if (data) {
    dispatch(actions.fetch_data_success(data));
  }
  return (
    <DataContainer>
      <AlignItems>
        <ListStyle>
          <Dropdown
            option={props.options[0]}
            options={props.options}
            handleClick={props.handleClick}
          />
          <p>वटा मात्र देखाऊनुहोस्</p>
        </ListStyle>
        <Buttons>
          <FilterBtn onClick={props.handleFilter}>Filter</FilterBtn>
          <AddBtn onClick={props.addItem}>+ Add New</AddBtn>
        </Buttons>
      </AlignItems>
      <Table />
    </DataContainer>
  );
};

export default Data;
