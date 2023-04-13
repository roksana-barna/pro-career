import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Apply from '../Applied items/Apply';

const Applied = () => {
    const allData=useLoaderData();
    const [applied, setApplied] = useState([]);
    let finalData = [];
    useEffect( () => {
        const storeIds = JSON.parse(localStorage.getItem('applied-job'));
        storeIds?.map(id => {
            const getData = allData?.find(data => parseInt(id) === parseInt(data.id));
            // console.log(getData);
            finalData.push(getData);
        })
        console.log(storeIds);
        setApplied(finalData);
    } , []);
    return (
        <div>
            <h2>jobs</h2>
            {
                applied.map(singledata=><Apply
                 key={singledata.id}
                    data={singledata}>

                 </Apply>)
            }
        </div>
    );
};

export default Applied;