import React from 'react'
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area,
} from "recharts";

const RevenueChart = () => {
    const data = [
      {
        date: "15-08",
        revenue: 4000,
      },
      {
        date: "16-08",
        revenue: 3000,
      },
      {
        date: "17-08",
        revenue: 2000,
      },
      {
        date: "18-08",
        revenue: 2780,
      },
      {
        date: "19-08",
        revenue: 1890,
      },
      {
        date: "20-08",
        revenue: 2390,
      },
      {
        date: "21-08",
        revenue: 3490,
      },
    ];
    

  return (
    <div className="bg-[color:var(--background-color-3)] m-5 rounded-3xl text-[color:var(--background-color-1)] max-w-[450px] md:max-w-[1200px]">
      <h1 className="text-2xl p-5 font-bold">Revenue Report</h1>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00296f" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#256eeb" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="date" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />

          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#256eeb"
            fillOpacity={1}
            fill="url(#colorPv)"
          >
          </Area>
            <Legend/>
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RevenueChart;
