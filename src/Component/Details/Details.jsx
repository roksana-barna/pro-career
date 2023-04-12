import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Show from '../ShowDetail/Show';

const Details = () => {
    const jobData=useLoaderData()
    console.log(jobData)
    const {id}=useParams();

    console.log(id)
    const [detail,setDetails]=useState([])
    useEffect(()=>{
        const findData=jobData.find(data=>parseInt(data.id)===parseInt(data.id));
 setDetails(findData)
    },[jobData,id])
    return (
        <div>
            <h2 className=' text-2xl  text-center text-blue font-bold py-5'>job details</h2>
           
            <Show  detail={detail}></Show>
            <div>{id}</div>
            
        </div>
    );
};

export default Details;