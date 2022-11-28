import React from 'react';
import { Fitness } from '../../Classes/Fitness';
import ExerciseCard from './ExerciseCard';

const ExerciseContainer = ({ title, exercises, level }) => {
  const exerciseBuilder = new Fitness();
  
  let exercisePlan;
  if(level === 'Beginner') {
    exercisePlan = exerciseBuilder.getBeginnerExercises();
  } else if(level === 'Intermediate') {
    exercisePlan = exerciseBuilder.getIntermediateExercises();
  } else if(level === 'Advanced') {
    exercisePlan = exerciseBuilder.getAdvancedExercises();
  }
  console.log(exercisePlan);
  return (
    <div className="mb-5">
      <div className="bg-white rounded-lg overflow-hidden border border-blue-100">
        <h2 className="text-blue-900 text-2xl font-semibold p-5 pb-3">
          {title}
        </h2>
        <div className="h-px w-full bg-blue-900 opacity-20"></div>
        <div className="grid p-2">
          {exercisePlan?.map((exercise, id) => {
            const result = exercises?.find(
              (element) => element?.name.trim() === exercise?.name.trim()
            );
            if (result) {
              return <ExerciseCard exercise={result} plan={exercise} id={id} />;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default ExerciseContainer;
