import React from 'react';
import FoodCard from './FoodCard';

const FoodContainer = ({ title, foods }) => {
  return (
    <div className="mb-5 min-w-[600px]">
      <div className="bg-white rounded-xl overflow-hidden border border-blue-100">
        <h2 className="text-blue-900 text-2xl font-semibold p-5 pb-3">
          {title}
        </h2>
        <div className="h-px w-full bg-blue-900 opacity-20"></div>
        <div className="grid gap-4 p-5">
          {foods.map((food, id) => (
            <FoodCard food={food} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodContainer;
