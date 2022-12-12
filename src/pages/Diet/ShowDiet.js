import React from 'react';
import { useState } from 'react';
import { useEffect, useContext } from 'react';

// Importing conext api
import { LoginContext } from '../../helpers/Contexts';
import { Authentication } from '../../Classes/Authentication';

// Importing components
import { Diet } from '../../Classes/Diet';
import CaloriesChart from './CaloriesChart';
import midScreen from '../../media/lotties/mid_screen.json';
import { Player } from '@lottiefiles/react-lottie-player';
import DietContainer from './DietContainer';

const ShowDiet = ({
  type,
  target,
  loseAmount,
  gainAmount,
  duration,
  activity,
}) => {
  //States
  const [foods, setFoods] = useState([]);
  const [dietChart, setDietChart] = useState();

  //Contexts
  const { user } = useContext(LoginContext);
  
  // Collecting user information
  const {age, height, weight, gender} = user;

  const userInfo = {
    age,
    weight,
    height,
    gender,
    type,
    target,
    loseAmount,
    gainAmount,
    duration,
    activity,
  };

  // Class objects
  const auth = new Authentication();
  const dietObj = new Diet();

  // Data fetching 
  useEffect(() => {
    const fetchFoods = async () => {
      const res = await fetch(auth.uribk + '/foods');
      const data = await res.json();
      setFoods(data);
    };
    fetchFoods();

    const fetchDiet = async () => {
      const res = await fetch(auth.uribk + '/build_diet_chart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo),
      });
      const data = await res.json();
      setDietChart(data);
    };
    fetchDiet();
  }, []);

  return (
    <div>
      {dietChart && foods.length > 0 ? (
        <div className="flex justify-center">
          <div>
            <h1 className="text-4xl capitalize mb-10 mt-10 text-center">
              Here is your diet plan
            </h1>
            <div className="flex gap-5">
              <div>
                {/* One for breakfast */}
                <DietContainer
                  title={'breakfast'}
                  calories={dietChart?.breakfast?.calories}
                  allFoods={foods}
                  foods={dietChart?.breakfast?.foods}
                  time={dietChart?.breakfast?.time}
                />

                {/* Mid Meal */}
                <DietContainer
                  title={'Mid Meal'}
                  calories={dietChart?.midMeal?.calories}
                  allFoods={foods}
                  foods={dietChart?.midMeal?.foods}
                  time={dietChart?.midMeal?.time}
                />

                <DietContainer
                  title={'Before Lunch'}
                  calories={dietChart?.beforeLunch?.calories}
                  allFoods={foods}
                  foods={dietChart?.beforeLunch?.foods}
                  time={dietChart?.beforeLunch?.time}
                />

                <DietContainer
                  title={'Lunch'}
                  calories={dietChart?.lunch?.calories}
                  allFoods={foods}
                  foods={dietChart?.lunch?.foods}
                  time={dietChart?.lunch?.time}
                />

                <DietContainer
                  title={'Evening'}
                  calories={dietChart?.evening?.calories}
                  allFoods={foods}
                  foods={dietChart?.evening?.foods}
                />

                <DietContainer
                  title={'Dinner'}
                  calories={dietChart?.Dinner?.calories}
                  allFoods={foods}
                  foods={dietChart?.Dinner?.foods}
                />
                
                <DietContainer
                  title={'After Dinner'}
                  calories={dietChart?.afterDinner?.calories}
                  allFoods={foods}
                  foods={dietChart?.afterDinner?.foods}
                />
              </div>
              <CaloriesChart
                idealCalories={dietChart?.idealCalories}
                targetedCalories={dietChart?.targetedCalories}
              />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <Player src={midScreen} className="w-[500px]" loop autoplay />
          <h2 className="text-2xl font-semibold text-center text-blue-900">
            Creating a customized diet plan for you...
          </h2>
        </div>
      )}
    </div>
  );
};

export default ShowDiet;
