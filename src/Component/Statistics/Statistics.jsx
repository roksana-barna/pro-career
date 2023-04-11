import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Details from '../Details/Details';

const Statistics = () => {
    const details=useLoaderData();
    // console.log(details);
    return (
        <div className=''>
            <h1 className='text-center font-bold text-3xl pt-10 '>Job Details</h1>
            {
                details.map(detail=><Details
                    key={detail.id} 
                    detail={detail}
                ></Details>)
            }

        </div>
    
    );
};

export default Statistics;