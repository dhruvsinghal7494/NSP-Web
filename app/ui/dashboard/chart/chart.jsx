"use client";

import styles from "./chart.module.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Ladwa",
    Namaskar: 4000,
    Revenue: 2400,
  },
  {
    name: "Kurukshetra",
    Namaskar: 3000,
    Revenue: 1398,
  },
  {
    name: "Delhi",
    Namaskar: 2000,
    Revenue: 3800,
  },
  {
    name: "Chandigarh",
    Namaskar: 2780,
    Revenue: 3908,
  },
  {
    name: "Ambala",
    Namaskar: 1890,
    Revenue: 4800,
  },
  // {
  //   name: "Fri",
  //   Namaskar: 2390,
  //   click: 3800,
  // },
  // {
  //   name: "Sat",
  //   Namaskar: 3490,
  //   click: 4300,
  // },
];

const Chart = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Weekly Recap</h2>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{ background: "#151c2c", border: "none" }} />
          <Legend />
          <Line
            type="monotone"
            dataKey="Namaskar"
            stroke="#8884d8"
            strokeDasharray="5 5"
          />
          <Line
            type="monotone"
            dataKey="Revenue"
            stroke="#82ca9d"
            strokeDasharray="3 4 5 2"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
