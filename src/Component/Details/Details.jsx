import React, {useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Show from '../ShowDetail/Show';

const Details = () => {
    const jobData = useLoaderData();

    const [details,setDetails] = useState([]);
    const {id}=useParams();
    useEffect(() => {
        const findData = jobData?.find(data => parseInt(id) === parseInt(data.id));
        setDetails(findData);
    },[])
    // console.log(details);

    
    


    return (
        <div>
            <div>
            <h2 className=' text-2xl  text-center text-blue font-bold py-5'>job details</h2>

            </div>
           
            <div> <h2></h2></div>
           {/* {
            details?.map(detail=><Show
            key={detail.id}
            detail={detail}
            >
            </Show>
            
           )}  */}
            {/* // <Show  detail={detail}></Show> */}
            
            
            <Show details={details}></Show>  

            
        </div>
    );
};

export default Details;