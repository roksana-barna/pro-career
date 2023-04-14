import React, { useEffect, useState } from 'react';
import img from "../../assets/All Images/P3OLGJ1 copy 1.png";
import Category from '../Category/Category';
import { useLoaderData } from 'react-router-dom';
import Featured from '../Featured/Featured';
import Details from '../Details/Details';


const Home = () => {
    const [jobs, setJobs] = useState([])
    const [showMore, setShowMore] = useState('false');
    useEffect(() => {
        fetch('Jobs.json')
            .then(res => res.json())
            .then(data => {
                if(showMore === 'false'){
                    setJobs(data?.slice(0,4));
                }else{
                    setJobs(data);
                }
            })
    }, [showMore]);

    const viewAllJobs = () =>{
        setShowMore('true');
    }

    // console.log(jobs)
    const categorys = useLoaderData();

    
    return (

        <div className=' mt-10 '>
            <div className='flex justify-items-center'>
                <div className=' mt-20 ml-40'>
                    <h1 className='text-5xl font-bold'> One step </h1>
                    <h1 className='text-5xl font-bold pt-3'>Closer to Your</h1>
                    <h1 className='text-5xl font-bold pt-3 text-blue-400'>Dream Job</h1>
                    <p className='font-normal my-6'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='bg-blue-600 py-2 px-3 rounded-md text-white'>Get Started</button>
                </div>
                <div>

                    <img className='' src={img} alt="" />
                </div>


            </div>

            <h2 className='font-bold text-3xl py-6 mt-10 text-center '>Job Category List</h2>
            <p className='text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='md:flex justify-center  gap-5 sm:gap-4 mt-7'>
                {

                    categorys.map(category => <Category
                         key={category.id}
                        category={category}
                    ></Category>)
                }
            </div>

            <div>
                < h2 className='font-bold text-3xl py-6 mt-10 text-center '>Featured jobs</h2>
                <p className='text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid md:grid-cols-2 w-10/12  ml-40'>
                {
                    jobs.map(job =>
                        <Featured
                            key={job.id}
                            job={job}
                            viewAllJobs="viewAllJobs"
                          
                        >
                        </Featured>)
                }
               
            </div>
            <button onClick={() =>viewAllJobs() }  className='bg-blue-600 py-2 px-3 rounded-md text-white ml-96'>View All</button>
              
        </div>


    );
};

export default Home;