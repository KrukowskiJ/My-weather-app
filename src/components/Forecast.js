import React, { useEffect, useState } from 'react';
import {
  LineChart,
  Label,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";


function Forecast({data}) {


  return (
    <>
      <h1>5 days forecast chart</h1>
      
      <LineChart
      width={1000}
      height={300}
      data={data.list}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="12 12" />
      <XAxis dataKey="dt_txt" >
    <Label value="Pages of my website" offset={-30} position="insideBottom" />
  </XAxis>
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
      name={data && data.city.name}
        type="monotone"
        dataKey="main.temp"
        stroke="#8884d8"
        activeDot={{ r: 7 }}
      />
        <Line
      name={data && data.city.name + " feels like"}
        type="monotone"
        dataKey="main.feels_like"
        stroke="green"
        activeDot={{ r: 7 }}
      />
    </LineChart>
   </>
  );
}

export default Forecast;