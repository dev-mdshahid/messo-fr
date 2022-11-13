import React from 'react';

const CompletionCard = () => {
  return (
    <div className="w-full h-fit bg-white border  rounded-lg">
      <div className="p-5 px-7 text-lg text-blue-900 font-semibold">
        <h2 className='capitalize'>
          Profile Completion rate
        </h2>
        <div className="h-6 w-full bg-blue-100 rounded-lg mt-3 mb-2">
          <div className="h-6 w-[85%] bg-green-600 rounded-lg text-sm text-white pr-3 flex items-center justify-center">
            85%
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompletionCard;
