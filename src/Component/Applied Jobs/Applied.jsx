import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Apply from '../Applied items/Apply';
import ApplyHeader from '../ApplyHeader/ApplyHeader';
import image from "../../bgheader/modern-flowing-blue-wave-banner-white-background_1035-18960.avif";

const Applied = () => {
    const savedJobs=JSON.parse(localStorage.getItem('list'))
    const [applied,setApplied]=useState(savedJobs)
    
    const handleFilter=(item)=>{
        setApplied(item)

        // console.log(finalData)
        const  filter =savedJobs.filter(job=>job.RemoteOrOnsite==item)
        setApplied(filter)

    }
    return (
        <div>
            <ApplyHeader
        title="Applied Jobs"
        backgroundImage={image}
      />

    <button className='border border-sky-100  bg-slate-500 text-white  ml-40 p-2' onClick={()=>handleFilter('Remote')}>remote</button>
    <button className='border border-sky-100 bg-slate-500 text-white  p-2' onClick={()=>handleFilter('Onsite')}>Onsite</button>

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