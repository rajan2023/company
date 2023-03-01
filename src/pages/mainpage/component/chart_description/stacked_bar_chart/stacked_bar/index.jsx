import styled from "styled-components";
const WholeBar = styled.div`
  height: 20rem;
  width: 1rem;
  border: none;
  border-radius: 20px;
  background-color: #f5f5f5;
  position: relative;
`;
const RunningContainer = styled(WholeBar)`
  height: ${(props) => props.height};
  background-color: red;
  position: absolute;
  bottom: 0;
`;
const CompletedContainer = styled(RunningContainer)`
  height: ${(props) => props.height};
  background-color: blue;
`;
const DateStyle = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  color: #555;
`;
const BarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;
const StackedBar = (props) => {
  const running_height = (props.running_height / 100) * 20;
  const completed_height = (props.completed_height / 100) * 20;
  return (
    <BarContainer>
      <WholeBar>
        <RunningContainer height={running_height + "rem"} />
        <CompletedContainer height={completed_height + "rem"} />
      </WholeBar>
      <DateStyle>{props.date}</DateStyle>
    </BarContainer>
  );
};
export default StackedBar;
