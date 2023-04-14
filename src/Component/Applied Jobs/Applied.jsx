import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Apply from '../Applied items/Apply';
import ApplyHeader from '../ApplyHeader/ApplyHeader';
import image from "../../bgheader/modern-flowing-blue-wave-banner-white-background_1035-18960.avif";

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
            <ApplyHeader
        title="Applied Jobs"
        backgroundImage={image}
      />
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