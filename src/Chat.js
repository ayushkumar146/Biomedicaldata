import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const pdata = [
  {
    name: '1',
    val1: 13,
    val2: 10
  },
  {
    name: '2',
    val1: 15,
    val2: 12
  },
  {
    name: '3',
    val1: 5,
    val2: 10
  },
  {
    name: '4',
    val1: 10,
    fees: 5
  },
  {
    name: '5',
    val1: 9,
    val2: 4
  },
  {
    name: '6',
    val1: 10,
    val2: 8
  },
];

const Chat = () => {
  const contentStyle = {
    color: 'red', // Setting content color to red
  };

  return (
    <>
      {/* <h1 className="chart-heading"></h1> */}
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart data={pdata} width={600} height={100} margin={{ top: 10, right: 50, left: 20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" interval={'preserveStartEnd'} tickFormatter={(value) => value + " Programming"} />
          <YAxis />
          <Tooltip contentStyle={contentStyle} />
          <Legend />
          <Line type="monotone" dataKey="val1" stroke="red" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="val2" stroke="green" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default Chat;
