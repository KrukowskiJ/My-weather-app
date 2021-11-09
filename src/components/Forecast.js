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

  var curr = new Date();
  var options = { weekday: 'long'};
  let currday = new Intl.DateTimeFormat('en-US', options).format(curr);
  console.log(currday)
  return (
    <div className="container">
      <h1>5 days forecast chart</h1>
      
      <LineChart
      width={500}
      height={300}
      data={data.list}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="15 30" />
      <XAxis dataKey="dt_txt" >
    {/*<Label value="Pages of my website" offset={-30} position="insideBottom" />*/}
  </XAxis>
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
      name={data && data.city.name + " temperature"}
        type="monotone"
        dataKey="main.temp"
        stroke="#8884d8"
        activeDot={{ r: 5 }}
        dot={{r:2}}
      />
        <Line
      name={data && data.city.name + " feels like"}
        type="monotone"
        dataKey="main.feels_like"
        stroke="rgb(65, 176, 255)"
        activeDot={{ r: 5 }}
        dot={{r:2}}
      />
    </LineChart>
   </div>
  );
}

export default Forecast;