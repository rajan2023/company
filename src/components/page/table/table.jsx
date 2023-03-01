import { TableContainer } from "./table.style";
import { SortArrow } from "../../../theme/icons/arrow.icon";
import styled from "styled-components";
import { useSelector } from "react-redux";
const TitleStyle = styled.div`
  display: flex;
  gap: 5px;
`;
const TableColTitle = (props) => (
  <th>
    <TitleStyle>
      {props.children}
      <SortArrow />
    </TitleStyle>
  </th>
);
const Table = () => {
  const data = useSelector((state) => state.table_data?.data);
  return (
    <TableContainer>
      <tr>
        <TableColTitle>क्र.स.</TableColTitle>
        <TableColTitle>स्थानीय तहको नाम </TableColTitle>
        <TableColTitle>जिल्ला </TableColTitle>
        <TableColTitle>स्थानीय तहको प्रकार </TableColTitle>
        <TableColTitle>प्रदेश </TableColTitle>
        <TableColTitle>वेवसाइट </TableColTitle>
        <TableColTitle>कैफ़ियत </TableColTitle>
      </tr>
      {data
        ? data.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.title}</td>
              <td>काठमाडौँ</td>
              <td>नगरपालिका</td>
              <td>प्रदेश नम्बर १</td>
              <td>Delivered</td>
              <td>तयार</td>
            </tr>
          ))
        : null}
      {/* <tr>
        <td>1</td>
        <td>क्रितिपुर त्रिबेणी नगरपालिका</td>
        <td>काठमाडौँ</td>
        <td>नगरपालिका</td>
        <td>प्रदेश नम्बर १</td>
        <td>Delivered</td>
        <td>तयार</td>
      </tr> */}
    </TableContainer>
  );
};
export default Table;
