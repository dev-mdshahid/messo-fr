import React from 'react';
import ExerciseCard from './ExerciseCard';
import ExerciseContainer from './ExerciseContainer';

const ShowPlan = () => {
  return (
    <div className="flex justify-center">
      <div>
        <h1 className="text-4xl mb-10 mt-10 text-center">
          Here is your exercise plan
        </h1>
        <ExerciseContainer title={'Legs'} />
        <ExerciseContainer title={'Chest'} />
      </div>
    </div>
  );
};

export default ShowPlan;
