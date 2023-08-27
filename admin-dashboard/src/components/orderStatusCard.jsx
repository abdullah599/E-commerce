import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const OrderStatusCard = (props) => {
  const data = [
    { name: "Success", value: 60 },
    { name: "Pending", value: 30 },
    { name: "Failed", value: 10 },
  ];

  const COLORS = ["#00296f", "#f2bb05", "#e71d36"];

  return (
    <div className="relative rounded-3xl w-[450px] h-[450px] bg-[color:var(--background-color-3)] p-5 text-[color:var(--background-color-1)] text-2xl m-4 mx:auto">
      <span className="text-2xl flex justify-center font-bold">Order Status</span>
      <div width="100%" height="100%">
        <PieChart width={400} height={350}>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={100}
            outerRadius={150}
            fill="#00296f"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend />
          <Tooltip />
        </PieChart>
        <h1 className="absolute left-[50%] bottom-[50%] translate-x-[-50%] font-bold">
          Status
        </h1>
      </div>
    </div>
  );
};

export default OrderStatusCard;
