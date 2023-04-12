import React from 'react';

const Show = ({detail}) => {
    // console.log(detail)
    const {JobTitle,JobDescription,JobResponsibility,Salary,EducationaRequirements,Experiences
    }=detail
    
    return (
        <div>
            <h2> <span className='font-bold'>Job Description</span>:{JobDescription}</h2>

            <h2><span className='font-bold'> Job Responsibility</span>{JobResponsibility}</h2>
            <h2><span className='font-bold'>Job Description</span> Educational requirement:{EducationaRequirements}</h2>
            <h2><span className='font-bold'>Job Description</span> Experience{Experiences
}</h2>
        </div>
    );
};

export default Show;