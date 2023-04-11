import React from 'react';
import logo from "../../assets/Icons/accounts 1.png";

import logo2 from "../../assets/Icons/business 1.png";
import logo3 from "../../assets/Icons/social-media 1.png";
import logo4 from "../../assets/Icons/chip 1.png";




const Category = ({category}) => {
    // console.log(category)
    return (
        <div className=''>
            <h2 className='font-bold text-3xl py-6 mt-10 text-center '>Job Category List</h2>
            <p className='text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='flex justify-center gap-5 mt-9'>
                <div className='bg-gray-200 p-7'>
                 <img src={logo} alt="" />
                 <h3 className='font-bold mt-7'>{ category[0].CategoryName}</h3>
                 <p className='font-normal text-gray-400'>{category[0].JobAvaiblity}</p>
                </div>
                <div className='bg-gray-200 p-7'>
                <img src={logo2} alt="" />
                 <h3 className='font-bold mt-7'>{ category[1].CategoryName}</h3>
                 <p className='font-normal text-gray-400'>{category[1].JobAvaiblity}</p>

                </div>
                <div className='bg-gray-200 p-7'>
                <img src={logo3} alt="" />
                 <h3 className='font-bold mt-7'>{ category[2].CategoryName}</h3>
                 <p className='font-normal text-gray-400'>{category[2].JobAvaiblity}</p>

                </div>
                <div className='bg-gray-200 p-7'>
                <img src={logo4} alt="" />
                 <h3 className='font-bold mt-7'>{ category[3].CategoryName}</h3>
                 <p className='font-normal text-gray-400'>{category[3].JobAvaiblity}</p>

                </div>
            </div>
        </div>
    );
};

export default Category;