import React from 'react';
import ExerciseCard from './ExerciseCard';

const ExerciseContainer = ({ title, exercises }) => {
  return (
    <div className="mb-5">
      <div className="bg-white rounded-lg overflow-hidden border border-blue-100">
        <h2 className="text-blue-900 text-2xl font-semibold p-5 pb-3">
          {title}
        </h2>
        <div className="h-px w-full bg-blue-900 opacity-20"></div>
        <div className="grid">
          <ExerciseCard />
          <ExerciseCard />
        </div>
      </div>
    </div>
  );
};

export default ExerciseContainer;
