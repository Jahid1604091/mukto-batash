"use client";
import React from "react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export const CustomTooltip = ({ active, payload, label }) => {

    return (
      <div className="custom-tooltip">
        <p className="label">{` ${payload[0]?.value}`}&deg;C</p>
      </div>
    );
};

const Temperature = ({ weatherData }) => {
  const dataWithAverage = weatherData?.map((entry) => ({
    ...entry,
    temperature: {
      ...entry.temperature,
      average: (entry.temperature.high + entry.temperature.low) / 2,
    },
  }));

  return (
    <ResponsiveContainer width="100%" height={120}>
      <AreaChart
        width={730}
        height={110}
        data={dataWithAverage}
        margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#6c5719" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#6c5719" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip content={<CustomTooltip/>} />
        <Area
          type="monotone"
          dataKey="temperature.average"
          stroke="#d9ad28"
          fillOpacity={1}
          strokeWidth={2}
          fill="url(#colorUv)"

        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Temperature;
