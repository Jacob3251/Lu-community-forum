import React from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
const CustomPieChart = ({ data, colors }) => {
  const usedata = [
    {
      name: data[0]?.title.match(/\b\w+/),
      value: data[0]?.length - data[1]?.length,
    },
    { name: data[1]?.title.match(/\b\w+/), value: data[1]?.length },
  ];
  // console.log(data);
  const usedata1 = [
    { name: data[3]?.title.match(/\b\w+/), value: data[3]?.length },
    { name: data[4]?.title.match(/\b\w+/), value: data[4]?.length },
    { name: data[5]?.title.match(/\b\w+/), value: data[5]?.length },
  ];
  const COLORS = colors;
  const COLORS1 = ["#0077C8", "#228B22", "#FFA07A"];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
    name,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.42;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="black"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        <tspan>{name}</tspan>
        {/* <tspan x={x} dy="1.2em">{`${(percent * 100).toFixed(0)}%`}</tspan> */}
      </text>
    );
  };
  return (
    <div>
      <div className="grid gird-cols-1 md:grid-cols-2 gap-x-2">
        <div className="z-0  relative">
          <PieChart width={280} height={300}>
            <Pie
              data={usedata}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={70}
              fill="#8884d8"
              dataKey="value"
            >
              {usedata.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
          <h3 className="text-[14px] mb-5 absolute bottom-5 left-[38%] text-white font-bold">
            Total Stats
          </h3>
        </div>
        <div className=" relative">
          <PieChart width={280} height={300}>
            <Pie
              data={usedata1}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={70}
              fill="#8884d8"
              dataKey="value"
            >
              {usedata1.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS1[index % COLORS1.length]}
                />
              ))}
            </Pie>
          </PieChart>
          <h3 className="text-[14px] mb-5 absolute bottom-5 md:bottom-[8%] text-white left-[28%] text-center font-bold">
            Other Posts Stats
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CustomPieChart;
