import BarChart from "../bar_chart";
import StackedBarChart from "../stacked_bar_chart";
import styled from "styled-components";
const ChartsLayout = styled.div`
  display: grid;
  grid-template-columns: 55% 30%;
  justify-content: space-between;
  padding: 10rem 0;
  padding-bottom: 4rem;
`;
const Charts = () => {
  return (
    <ChartsLayout>
      <BarChart />
      <StackedBarChart />
    </ChartsLayout>
  );
};

export default Charts;
