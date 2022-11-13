import React from 'react';

const SingleInfoCard = ({ data, icon, title }) => {
  return (
    <div className="flex items-center">
      <div className="p-3 bg-white mr-4 rounded-xl">{icon}</div>
      <div>
        <h4 className="text-lg font-bold text-blue-900 capitalize">{data}</h4>
        <p className="capitalize text-gray-500 text-sm">{title}</p>
      </div>
    </div>
  );
};

export default SingleInfoCard;
