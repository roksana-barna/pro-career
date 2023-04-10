import React from 'react';
import img from "../../assets/All Images/P3OLGJ1 copy 1.png";
import Category from '../Category/Category';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const category=useLoaderData();
    // console.log(category)
    // const img="../../assets/All Images/P3OLGJ1 copy 1.png";
    return (

       <div className=' mt-10'>
         <div  className='flex justify-items-center'>
            <div className=' mt-20 ml-40'>
                <h1 className='text-5xl font-bold'> One step </h1>
                <h1 className='text-5xl font-bold pt-3'>Closer to Your</h1> 
                <h1 className='text-5xl font-bold pt-3 text-blue-400'>Dream Job</h1>
                <p className='font-normal my-6'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='bg-blue-600 py-2 px-3 rounded-md text-white'>Get Started</button>
            </div>
            <div>

                <img className=''   src={img} alt="" />
            </div>
        </div>
        <Category category={category}></Category>
       </div>
       
    );
};

export default Home;