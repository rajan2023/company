import React from "react";
import { BarChart, Bar, Tooltip, XAxis } from "recharts";
import { HiDotsVertical } from "react-icons/hi";
import styled from "styled-components";
const data = [
  {
    name: "Jan",
    percentage: "30",
  },
  {
    name: "Feb",
    percentage: "50",
  },
  {
    name: "Mar",
    percentage: "40",
  },
  {
    name: "Apr",
    percentage: "20",
  },
  {
    name: "May",
    percentage: "20",
  },
  {
    name: "Jun",
    percentage: "80",
  },
  {
    name: "Aug",
    percentage: "90",
  },
  {
    name: "Sep",
    percentage: "60",
  },
  {
    name: "Oct",
    percentage: "40",
  },
  {
    name: "Nov",
    percentage: "46",
  },
  {
    name: "Dec",
    percentage: "78",
  },
];
const BarChartLayout = styled(BarChart)`
  line {
    stroke: transparent !important;
  }

  text {
    font-size: 1.2rem;
    font-weight: 600;
  }
`;
const DisplayFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const LargeBoldText = styled.p`
  font-weight: 600;
  color: #555;
  font-size: 2.2rem;
`;
const SmallBoldText = styled(LargeBoldText)`
  font-size: 1.5rem;
`;
const SmallText = styled(SmallBoldText)`
  font-weight: 500;
`;
export default function Chart() {
  return (
    <div>
      <DisplayFlex>
        <LargeBoldText>Overall Performance</LargeBoldText>
        <SmallText>All time</SmallText>
        <SmallBoldText>This year</SmallBoldText>
        <SmallText>This week</SmallText>
        <HiDotsVertical size={25} color="#555" />
      </DisplayFlex>
      <BarChartLayout width={600} height={240} data={data}>
        <Tooltip
          wrapperStyle={{
            width: "min-content",
          }}
          contentStyle={{
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#f5f5f5",
            padding: "4px",
          }}
        />
        <Bar dataKey="percentage" fill="#00ccf2" />
        <XAxis dataKey="name" padding={"gap"} />
      </BarChartLayout>
    </div>
  );
}
