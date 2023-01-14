import './Dashboard.css';
import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Nov 1',
        uv: 2000,
    }, {
        name: 'Nov 4',
        uv: 1000,
    },
    {
        name: 'Nov 8',
        uv: 4000,
    },
    {
        name: 'Nov 12',
        uv: 2000,
    },
    {
        name: 'Nov 16',
        uv: 3000,
    },
    {
        name: 'Nov 20',
        uv: 1000,
    },
    {
        name: 'Nov 24',
        uv: 3000,
    },
    {
        name: 'Nov 28',
        uv: 2000,
    },
    {
        name: 'Nov 30',
        uv: 4000,
    },

];

const Day = () => {

    return (
        <div className='chart__day'>
            <AreaChart width={480} height={162} data={data}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <Tooltip />
                <Area type="monotone" dataKey="uv" strokeWidth={2} stroke="#8F00FF" fillOpacity={1} fill="url(#colorUv)" />
            </AreaChart>
            <div className='point_names'>
                <span>Nov 1</span>
                <span>Nov 4</span>
                <span>Nov 8</span>
                <span>Nov 12</span>
                <span>Nov 16</span>
                <span>Nov 20</span>
                <span>Nov 24</span>
                <span>Nov 28</span>
                <span>Nov 30</span>
            </div>
        </div>
    );
};

export default Day;