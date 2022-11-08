import React from 'react';
import CaloriesChart from './CaloriesChart';
import FoodContainer from './FoodContainer';

const ShowDiet = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div>
          <h1 className="text-4xl capitalize mb-10 mt-10 text-center">
            Make your diet plan
          </h1>
          <div className="flex gap-5">
            <div>
              <FoodContainer title={'Breakfast'} />
              <FoodContainer title={'Breakfast'} />
            </div>
            <CaloriesChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowDiet;
