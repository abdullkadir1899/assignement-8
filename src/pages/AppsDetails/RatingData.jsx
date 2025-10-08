import React from 'react';

import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const RatingData = ({ ratings }) => {
    const reversedRatings = [...ratings].reverse();

    return (
        <div className='flex justify-center my-10'>
            <BarChart
                width={1300}
                height={300}
                data={reversedRatings}
                layout="vertical"
            >
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" interval={0} />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#ff8811" barSize={30} />
            </BarChart>
        </div>
    );
};

export default RatingData;