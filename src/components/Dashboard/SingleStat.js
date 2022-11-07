import React from 'react';

const SingleStat = ({ icon, title, number, unit, color }) => {
  return (
    <div className='grid place-items-center bg-white'>
      <div className="flex items-center p-5 rounded-md">
        <div className={`text-2xl text-${color}-500 bg-${color}-100 p-3 rounded-full`}>
          {icon}
        </div>

        <div className="ml-4">
          <p className="text-xs font-semibold text-gray-400 whitespace-nowrap mb-1">
            {title}
          </p>
          <p className="font-bold ">
            {number}
            <span>{unit}</span>{' '}
              
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleStat;
