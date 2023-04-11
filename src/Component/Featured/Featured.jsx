import React from 'react';
import "./Featured.css";

const Featured = ({ job }) => {
    console.log(job)

    return (
        < div>
            <div className='border border-slate-400 w-7/12 mt-10 p-10'>
                <img className='w-40' src={job.CompanyLogo} alt="" />
                <h2>{job.JobTitle}</h2>
                <p>{job.CompanyName}</p>
                <button>remote</button>
                <button>fulltime</button>
                <p>{job.Location
                }</p>
                <p>{job.Salary}</p>
                <button className='bg-blue-600 py-2 px-3 rounded-md text-white'> View Details</button>
            </div>
        </div>
    );
};
export default Featured;