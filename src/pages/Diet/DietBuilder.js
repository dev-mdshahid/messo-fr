import React from 'react';
import { useState } from 'react';

import ChoiceBox from '../../components/Shared/ChoiceBox';
import ShowDiet from './ShowDiet';

// Importing icons
import vegetarian from '../../media/img/icons/vegetarian.png';
import nonVegetarian from '../../media/img/icons/non_vegetarian.png';
import peraNai from '../../media/img/icons/okay.png';

import loseWeigth from '../../media/img/icons/weight_lose.png';
import gainWeigth from '../../media/img/icons/weight_gain.png';
import maintainWeigth from '../../media/img/icons/weight_maintain.png';

import inactive from '../../media/img/icons/inactive_diet.png';
import slightlyActive from '../../media/img/icons/slightly_active_diet.png';
import veryActive from '../../media/img/icons/very_active_diet.png';
const DietBuilder = () => {
  //Step controller state
  const [step, setStep] = useState(1);

  //Collected information
  const [type, setType] = useState();
  const [target, setTarget] = useState();
  const [gainAmount, setGainAmount] = useState();
  const [loseAmount, setLoseAmount] = useState();
  const [duration, setDuration] = useState();
  const [activity, setActivity] = useState();

  //Helper functions
  const handleChange = (e) => {
    if (target.text === 'Gain weight') {
      setGainAmount(e.target.value);
      setDuration(1);
    } else {
      setLoseAmount(e.target.value);
      setDuration(1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };

  const choiceIconDesign = 'text-6xl m-auto mb-3';
  console.log(duration);
  return step === 1 ? (
    //Step 1
    <div>
      <div className="h flex justify-center">
        {/* Vegetarian or non vegetarian check */}
        <div className="mt-20">
          {/* Question */}
          <h1 className="text-4xl text-center">What is your type?</h1>
          {/* Choice boxes */}
          <div className="flex gap-6 mt-12">
            <div onClick={() => setStep(2)}>
              <ChoiceBox
                img={vegetarian}
                text={'Vegetarian'}
                description={'(Eat only vegetables)'}
                setTarget={setType}
              />
            </div>
            <div onClick={() => setStep(2)}>
              <ChoiceBox
                img={nonVegetarian}
                text={'Non Vegetarian'}
                description={'(Eat fish, meat or chicken)'}
                setTarget={setType}
              />
            </div>
            <div onClick={() => setStep(2)}>
              <ChoiceBox
                img={peraNai}
                text={'Pera nai chill'}
                description={'(Ekta hoilei hoi)'}
                setTarget={setType}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : step === 2 ? (
    //Step 2
    <div>
      <div className="h flex justify-center">
        <div className="mt-20">
          {/* Question */}
          <h1 className="text-4xl text-center">What is your primary goal?</h1>
          {/* Choice boxes */}
          <div className="flex gap-6 mt-12">
            <div onClick={() => setStep(3)}>
              <ChoiceBox
                img={loseWeigth}
                text={'Lose weight'}
                description={'(Burn away extra weight)'}
                setTarget={setTarget}
              />
            </div>
            <div onClick={() => setStep(3)}>
              <ChoiceBox
                img={gainWeigth}
                text={'Gain weight'}
                description={'(Add some extra weight)'}
                setTarget={setTarget}
              />
            </div>
            <div onClick={() => setStep(5)}>
              <ChoiceBox
                img={maintainWeigth}
                text={'Maintain weight'}
                description={'(Happy with the current weight)'}
                setTarget={setTarget}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : step === 3 ? (
    <div>
      <div className="h flex justify-center">
        <div className="mt-20">
          {/* Question */}
          <h1 className="text-4xl text-center">
            How much kgs do you want to{' '}
            {target.text === 'Gain weight' ? 'gain?' : 'lose?'}
          </h1>
          {/* Input box */}
          <form onSubmit={handleSubmit} className="mt-8 text-center">
            <input
              type="number"
              name="weight"
              value={target.text === 'Gain weight' ? gainAmount : loseAmount}
              onChange={handleChange}
              className="py-2 px-3 border border-gray-300 focus:outline-blue-900 rounded-md mr-3"
              placeholder="Ex. 3"
              min={0}
              required
            />
            <button
              type="submit"
              className="btn-primary px-3 py-2 bg-blue-900 hover:scale-105 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  ) : step === 4 ? (
    <div>
      <div className="h flex justify-center">
        <div className="mt-20">
          {/* Question */}
          <h1 className="text-4xl text-center capitalize">
            In how many months?
          </h1>
          {/* Input box */}
          <form onSubmit={handleSubmit} className="mt-8 text-center">
            <input
              type="number"
              name="duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="py-2 px-3 border border-gray-300 focus:outline-blue-900 rounded-md mr-3"
              placeholder="Ex. 2"
              min={1}
              required
            />
            <button
              type="submit"
              className="btn-primary px-3 py-2 bg-blue-900 hover:scale-105 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  ) : step === 5 ? (
    <div>
      <div>
        <div className="h flex justify-center">
          {/* Vegetarian or non vegetarian check */}
          <div className="mt-20">
            {/* Question */}
            <h1 className="text-4xl text-center">How active are you?</h1>
            {/* Choice boxes */}
            <div className="flex gap-6 mt-12">
              <div onClick={() => setStep(step + 1)}>
                <ChoiceBox
                  img={inactive}
                  text={'Inactive'}
                  description={'(Little to no exercise)'}
                  setTarget={setActivity}
                />
              </div>
              <div onClick={() => setStep(step + 1)}>
                <ChoiceBox
                  img={slightlyActive}
                  text={'Slightly active'}
                  description={'(Exercise 3 times/ week)'}
                  setTarget={setActivity}
                />
              </div>
              <div onClick={() => setStep(step + 1)}>
                <ChoiceBox
                  img={veryActive}
                  text={'Very active'}
                  description={'(Intense workout 4-5 times/week)'}
                  setTarget={setActivity}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <ShowDiet />
    </div>
  );
};

export default DietBuilder;
