import React from 'react';
import DietFoodCard from './DietFoodCard';
import FoodCard from './FoodCard';

const DietContainer = ({ title, foods, calories, allFoods, time }) => {
  console.log(foods);
  return (
    <div className="mb-5 min-w-[700px]">
      <div className="bg-white rounded-xl overflow-hidden border border-blue-100">
        <h2 className="text-blue-900 text-2xl font-semibold p-5 pb-3 capitalize">
          {title}
        </h2>
        <div className="h-px w-full bg-blue-900 opacity-20"></div>
        <div className="child:pb-1 p-5">
          <div className="flex items-center gap-2">
            <h1 className="font-semibold">Time: </h1>
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-2">
            <h1>Calories Reserved: </h1>
            <span>{calories} cal</span>
          </div>
          <div className="flex items-center gap-2">
            <h1>Total Food Count: </h1>
            <span>{foods?.length}</span>
          </div>
        </div>
        <div className="h-px w-full bg-blue-900 opacity-20"></div>
        <h1 className="pl-5 pt-4 text-xl">Recommended Foods</h1>
        <div className="grid gap-3 p-5 pt-3">
          {foods?.map((food, id) => {
            const result = allFoods.find(
              (element) => element.id.trim() === food.id.trim()
            );
            console.log(food);
            return (
              <DietFoodCard id={id} food={result} quantity={food.quantity} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DietContainer;
