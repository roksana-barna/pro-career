import React from 'react';

const ApplyHeader = ({ title, backgroundImage }) => {
    return (
        <div
          className="h-95 bg-cover bg-center flex items-center justify-center p-20 "
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <h1 className="text-2xl font-bold text-black">{title}</h1>
        </div>
      );
    };

export default ApplyHeader;