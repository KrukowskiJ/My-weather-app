import React, { useEffect, useState } from 'react';
import {
  LineChart,
  Label,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Legend
} from "recharts";


function Forecast({data}) {

  var curr = new Date();
  var options = { weekday: 'long'};
  let currday = new Intl.DateTimeFormat('en-US', options).format(curr);
  console.log(currday)
  return (
    <div className="container">
      <h1>5 days forecast chart</h1>
      <ResponsiveContainer  width='100%' height={300}>
      <LineChart
      data={data.list}
      margin={{
        top: 0, left: 0, right: 0, bottom: 0 
    }}
    >
      <CartesianGrid strokeDasharray="15 30" />
      <XAxis dataKey="dt_txt" />
      <YAxis width={25} />
      <Tooltip />
      <Legend />
      <Line
      name={data && data.city.name + " temperature"}
        type="monotone"
        dataKey="main.temp"
        stroke="#8884d8"
        activeDot={{ r: 5 }}
        dot={{r:1}}
      />
        <Line
      name={data && data.city.name + " feels like"}
        type="monotone"
        dataKey="main.feels_like"
        stroke="rgb(65, 176, 255)"
        activeDot={{ r: 5 }}
        dot={{r:1}}
      />
    </LineChart>
    </ ResponsiveContainer>
   </div>
  );
}

export default Forecast;