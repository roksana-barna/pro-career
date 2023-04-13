import React  from 'react';
import { CurrencyDollarIcon} from '@heroicons/react/24/solid'
import Applied from '../Applied Jobs/Applied';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Show = ({ details }) => {
    // console.log(details);
    const {id, CompanyLogo,JobTitle,CompanyName,Remote,Onsite,Location,FullTime,Salary,JobDescription,JobResponsibility,EducationaRequirements,email,phone,Experiences }=details;

    const apply = (id) =>{
        let item = [];
        const getStorageItem = JSON.parse(localStorage.getItem('applied-job'));
        if(getStorageItem)
        {
            item = [...getStorageItem];
        }
        if(item.includes(id))
        {
            toast("Already saved!");
            return;
        }
        item.push(id);
        localStorage.setItem('applied-job', JSON.stringify(item));

    }
      
    
    return (
        <div>
            <ToastContainer />
            <div className='grid grid-cols-2'>
            <div className='ml-20'>
                <h2> <span className='font-bold'>Job Description</span>:{JobDescription}</h2>

                <h2><span className='font-bold'> Job Responsibility</span>{JobResponsibility}</h2>
                <h2><span className='font-bold'>Job Description</span> Educational requirement:{EducationaRequirements}</h2>
                <h2><span className='font-bold'>Job Description</span> Experience{Experiences
                }</h2>

            </div>

            <div className='bg-sky-300 w-6/12 ml-56 p-7 rounded'>
                <h2 className='font-bold'>Job details</h2>

                
                <p> < CurrencyDollarIcon className="h-6 w-6 text-blue-500 " />salary:{Salary}</p>
                <p>JobTitle:{JobTitle}</p>
                <h2><span className='font-bold py-5'>Contact Information</span></h2>
                <p>Phone{phone
                }</p>
                <p>email{email
                }</p>
                <p>Address{Location}</p>
                <button onClick={() => apply(id)} className='bg-blue-700 text-white p-3 px-6 mt-6'>Apply Now</button>
                


            </div>
        </div>
        </div>

    );
};

export default Show;