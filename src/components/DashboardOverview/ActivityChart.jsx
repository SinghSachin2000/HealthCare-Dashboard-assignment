import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import "./Dashboard.css";
import ActivityData from "../../data/activityData";
import { CgOverflow } from "react-icons/cg";


const CustomBar = (props) => {
  const { x, y, width, height, value } = props;

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={value > 0 ? "#8884d8" : "#f5f5f5"}
      />
      {value > 0 && (
        <text
          x={x + width / 2}
          y={y + height / 2}
          textAnchor="middle"
          fill="#fff"
          dy=".3em"
        >
          {value}
        </text>
      )}
    </g>
  );
};

const ActivityChart = () => {
  return (
    <div className="activity-container">
      <div className="activity-header">
        <span className="activity-title">Activity</span>
        <span className="activity-subtext">3 appointments this week</span>
      </div>
      <div className="chart-wrapper">
      <ResponsiveContainer width="100%" height={140} className="ResponsiveContainer"> {/* Previously 100% */}
  <BarChart
    data={ActivityData}
    barCategoryGap={12}
    margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
    className="barchart"
  >
    <XAxis
      dataKey="name"
      tick={{ fontSize: 12 }}
      axisLine={false}
      tickLine={false}
    />
    <Tooltip
      cursor={{ fill: "#f0f0f0" }}
      contentStyle={{ fontSize: "12px", borderRadius: "8px" }}
    />
    <Bar
      dataKey="teal"
      stackId="a"
      fill="#00D1FF"
      radius={[6, 6, 0, 0]}
      barSize={6}
        
    />
    <Bar
      dataKey="gray"
      stackId="a"
      fill="#d8d8d8"
      radius={[6, 6, 0, 0]}
      barSize={6}
    />
    <Bar
      dataKey="blue"
      stackId="a"
      fill="#6D6AFE"
      radius={[6, 6, 0, 0]}
      barSize={6}
    />
  </BarChart>
</ResponsiveContainer>

      </div>
    </div>
  );
};

export default ActivityChart;
