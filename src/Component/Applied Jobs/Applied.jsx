import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Applied = () => {
    const allData=useLoaderData()
    console.log(allData)
    
    return (
        <div>
            <h2>jobs</h2>
        </div>
    );
};

export default Applied;