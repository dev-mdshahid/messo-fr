import { Player } from '@lottiefiles/react-lottie-player';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Authentication } from '../../Classes/Authentication';
import ExerciseContainer from './ExerciseContainer';
import midScreen from '../../media/lotties/mid_screen.json';

const ShowPlan = () => {
  // State declare
  const [level, setLevel] = useState('Beginner');
  const [exercises, setExercises] = useState();

  // Authentication(shahidul)
  const auth = new Authentication();

  // Data fetching function
  useEffect(() => {
    // We need to do it asynchronously
    const fetchExercises = async () => {
      const res = await fetch(auth.uribk + '/get_exercises');
      const data = await res.json(); 
      setExercises(data);
    };
    fetchExercises();
  }, []);

  // Conditional rendering (Ternary operator)
  return !exercises ? (
    <div>
      <Player src={midScreen} className="w-[500px]" loop autoplay />

      <h2 className="text-2xl font-semibold text-center text-blue-900">
        Creating a customized exercise plan for you...
      </h2>
    </div>
  ) : (
    <div className="flex justify-center">
      <div>
        <h1 className="text-4xl mb-7 mt-10 text-center">
          Here is your exercise plan
        </h1>

        {/* Level choose */}
        <div className="flex gap-5 justify-center mb-7 child:cursor-pointer child-hover:hover:bg-blue-900 child-hover:text-white child:transition child:rounded-md child:p-2 child:px-4 font-semibold ">
          <div
            className={
              level === 'Beginner'
                ? 'bg-blue-900 text-white'
                : 'bg-white text-blue-900'
            }
            onClick={() => setLevel('Beginner')}
          >
            Beginner
          </div>
          <div
            className={
              level === 'Intermediate'
                ? 'bg-blue-900 text-white'
                : 'bg-white text-blue-900'
            }
            onClick={() => setLevel('Intermediate')}
          >
            Intermediate
          </div>
          <div
            className={
              level === 'Advanced'
                ? 'bg-blue-900 text-white'
                : 'bg-white text-blue-900'
            }
            onClick={() => setLevel('Advanced')}
          >
            Advanced
          </div>
        </div>
        <ExerciseContainer
          title={'Exercises'}
          exercises={exercises}
          level={level}
        />
      </div>
    </div>
  );
};

export default ShowPlan;
