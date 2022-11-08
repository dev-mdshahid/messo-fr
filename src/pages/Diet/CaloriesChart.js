import React from 'react';

const CaloriesChart = () => {
  return (
    <div className="w-[300px] bg-white h-fit p-5 rounded-xl border border-blue-100">
      <h2 className="text-blue-900 text-2xl font-semibold pb-3 capitalize">
        Calorie counter
      </h2>
      <div className="h-px w-full bg-blue-900 opacity-20"></div>
      <div className="mt-4">
        <h3 className="font-bold">Calories</h3>

        <div className="flex justify-between">
          <p className="pl-4">Total demand</p>
          <p className="pr-1">2400 cal</p>
        </div>
        <div className="flex justify-between">
          <p className="pl-4">Total added</p>
          <p className="pr-1">1400 cal</p>
        </div>
        <div className="h-px bg-blue-900 opacity-20 ml-3 my-px"></div>
        <div className="flex justify-between">
          <p className="pl-4">Deficit</p>
          <p className="pr-1">1000 cal</p>
        </div>
      </div>

      {/* Nutrition */}
      <div className="mt-4">
        <h3 className="font-bold">Nutrition</h3>

        <div className="flex justify-between">
          <p className="pl-4">Protein</p>
          <p className="pr-1">34g</p>
        </div>
        <div className="flex justify-between">
          <p className="pl-4">Carb</p>
          <p className="pr-1">123g</p>
        </div>
        <div className="flex justify-between">
          <p className="pl-4">Fat</p>
          <p className="pr-1">12.3g</p>
        </div>
      </div>
    </div>
  );
};

export default CaloriesChart;
