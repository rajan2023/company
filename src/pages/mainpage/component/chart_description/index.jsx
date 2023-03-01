import { Tab, Tabs, TabPanel } from "react-tabs";
import { Layout } from "../wrapper/index.style";
import "react-tabs/style/react-tabs.css";
import { IoIosPeople } from "react-icons/io";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { GiGraduateCap, GiPlantRoots } from "react-icons/gi";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import styled from "styled-components";
import Charts from "./charts";
const TabDesign = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;
  border-color: #f5f5f5;
  border-bottom: 1px solid #f5f5f5;
  li {
    border: none;
    border-bottom: 1px solid #f5f5f5;
    position: relative;
    font-size: 1.5rem;
    font-weight: 600;
    color: #555;
    cursor: pointer;
    &:hover {
      color: red;
      border-bottom: 1px solid red;
    }
  }
`;
const TabName = styled(Tab)`
  padding: 2rem 0;
  display: flex;
  align-items: center;
  gap: 7px;
`;
const ChartDescription = () => {
  return (
    <Layout>
      <Tabs >
        <TabDesign>
          <TabName>
            <IoIosPeople size={30} />
            <p>जनसंख्या अबस्थि</p>
          </TabName>
          <TabName>
            <HiArrowTrendingUp size={30} />
            आर्थिक विकास
          </TabName>
          <TabName>
            <GiGraduateCap size={30} />
            शिक्च्या
          </TabName>
          <TabName>
            <MdOutlineHealthAndSafety size={30} />
            स्वास्थ्य
          </TabName>
          <TabName>
            <GiPlantRoots size={30} />
            कृषि
          </TabName>
        </TabDesign>
        <TabPanel>
          <Charts />
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </Layout>
  );
};
export default ChartDescription;
