import React from 'react';
import './chart.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,AreaChart,Area } from 'recharts';
import {BiErrorCircle} from "react-icons/bi"
const data = [
    {name:'01 Apr',Total:1200},
    {name:'02 Apr',Total:2100},
    {name:'03 Apr',Total:800},
    {name:'04 Apr',Total:1600},
    {name:'05 Apr',Total:900},
    {name:'06 Apr',Total:1700},
    {name:'07 Apr',Total:2700}
];

function Chart(props) {
    return (
        <div className={'chart'}>
            <div className={'title'}>
                <h4>Sales</h4>
                <BiErrorCircle className={'icon'}/>
            </div>
            <ResponsiveContainer width="100%" height={300}>
                <AreaChart width={730} height={250} data={data}
                           margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" stroke={'gray'}  />
                    <YAxis/>
                     <CartesianGrid strokeDasharray="3 3"  className={'chartGrid'}/>
                    <Tooltip />
                    <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#total)" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Chart;
