import React from 'react';

const Details = ({ detail }) => {
    console.log(detail)
    return (
        <div>
            <div>
                <h2>{detail.JobDescription}</h2>
                <h2>{detail.JobResponsibility
                }</h2>
                <h2>{detail.EducationaRequirements
                }</h2>
                <h2>{detail.Experiences
                }</h2>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Details;