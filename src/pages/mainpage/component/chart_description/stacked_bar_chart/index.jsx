import StackedBar from "./stacked_bar";
import styled from "styled-components";
import { HiDotsVertical } from "react-icons/hi";
const data = [
  {
    completed: "60",
    running: "70",
    date: "01/14",
  },
  {
    completed: "60",
    running: "70",
    date: "01/15",
  },
  {
    completed: "60",
    running: "70",
    date: "01/14",
  },
  {
    completed: "60",
    running: "80",
    date: "01/14",
  },
  {
    completed: "60",
    running: "90",
    date: "01/18",
  },
  {
    completed: "60",
    running: "80",
    date: "01/19",
  },
];
const DisplayFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
const AlignText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const AlignBar = styled(DisplayFlex)`
  flex-direction: row;
  gap: 2rem;
`;
const LargeBoldText = styled.p`
  font-weight: 600;
  color: #555;
  font-size: 2.2rem;
`;
const Label = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 1.2rem;
  color: #555;
  font-weight: 500;
  align-items: center;
`;
const Circle = styled.div`
  border: 1px solid transparent;
  border-radius: 50%;
  width: 15px;
  height: 15px;
`;
const RedCircle = styled(Circle)`
  border-color: red;
  background-color: red;
`;
const BlueCircle = styled(Circle)`
  border-color: blue;
  background-color: blue;
`;
const Labels = styled.div`
  display: flex;
  gap: 2rem;
`;
const StackedBarChart = () => {
  return (
    <DisplayFlex>
      <AlignText>
        <LargeBoldText>Daily Update</LargeBoldText>
        <HiDotsVertical size={25} color="#555" />
      </AlignText>
      <AlignBar>
        {data.map((p) => (
          <StackedBar
            date={p.date}
            running_height={p.running}
            completed_height={p.completed}
          />
        ))}
      </AlignBar>
      <Labels>
        <Label>
          <BlueCircle />
          <p>Completing</p>
        </Label>
        <Label>
          <RedCircle />
          <p>Running</p>
        </Label>
      </Labels>
    </DisplayFlex>
  );
};
export default StackedBarChart;
