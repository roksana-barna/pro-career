import React from 'react';
import { MapPinIcon} from '@heroicons/react/24/solid';
import { CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
// import { Link, useLoaderData } from 'react-router-dom';


const Apply = ({ data }) => {
    const { CompanyLogo, JobTitle, Salary, CompanyName, FullTime, RemoteOrOnsite, Location } = data;
   
    // console.log(data)
    return (
        
        <div className='md:flex border border-sky-200 mt-5 w-8/12 ml-40'>
            <div className='border border-blue-400'>
                <img className='w-40 mt-7' src={CompanyLogo} alt="" />
            </div>
            <div className='ml-10 p-5'>
                <h2 className='font-bold text-xl'>{JobTitle}</h2>
                <h3 className='font-normal py-2'>{CompanyName}</h3>

                <div className='flex'>
                    <p className='border border-blue-400 px-2 rounded py-1 text-blue-500'>{RemoteOrOnsite}</p>
                    <p className='border border-blue-400 px-2 rounded py-1 text-blue-500 ml-2'>{FullTime}</p>


                </div>

                <div className='flex'>
                <MapPinIcon className="h-4 w-4  text-blue-500 mt-5" /><p className='font-normal p-4'> {Location}</p>

                < CurrencyDollarIcon class="h-4 w-4 mt-5 text-blue-500" /><p className='mt-4'>{Salary}</p>
                </div>


            </div>
            <div>
            <button  className='bg-blue-600 px-3 py-2 mt-16 md:ml-60 rounded-md text-white'><Link to={`../detail/${data.id}`}> View Details</Link></button>


            </div>




        </div>
    );
};

export default Apply;