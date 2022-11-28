import React from 'react';
import { useState } from 'react';

import ChoiceBox from '../../components/Shared/ChoiceBox';
import ShowDiet from './ShowDiet';

import { BiCheckbox } from 'react-icons/bi';

//Importing lottiefiles
import progressBar from '../../media/lotties/progress_bar.json';

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
  const [sleepDuration, setSleepDuration] = useState();

  //Helper functions
  const handleChange = (e) => {
    if (target === 'Gain Weight') {
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
                text={'No preference'}
                description={'(Okay with everything)'}
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
                text={'Lose Weight'}
                description={'(Burn away extra weight)'}
                setTarget={setTarget}
              />
            </div>
            <div onClick={() => setStep(3)}>
              <ChoiceBox
                img={gainWeigth}
                text={'Gain Weight'}
                description={'(Add some extra weight)'}
                setTarget={setTarget}
              />
            </div>
            <div onClick={() => setStep(5)}>
              <ChoiceBox
                img={maintainWeigth}
                text={'Maintain Weight'}
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
            {target === 'Gain Weight' ? 'gain?' : 'lose?'}
          </h1>
          {/* Input box */}
          <form onSubmit={handleSubmit} className="mt-8 text-center">
            <input
              type="number"
              name="weight"
              value={target === 'Gain Weight' ? gainAmount : loseAmount}
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
  ) : step === 6 ? (
    <div>
      <div>
        <div className="h flex justify-center">
          {/* Vegetarian or non vegetarian check */}
          <div className="mt-20">
            {/* Question */}
            <h1 className="text-4xl text-center">
              How much do you usually sleep?
            </h1>
            {/* Choice boxes */}
            <div className="flex flex-col gap-3 mt-5">
              <div
                className="bg-white p-5 rounded-xl font-semibold text-blue-900 text-lg flex items-center gap-1 cursor-pointer"
                onClick={() => {
                  setStep(step + 1);
                  setSleepDuration('less than 5');
                }}
              >
                <BiCheckbox className="text-3xl" />
                Up to 5 hours
              </div>
              <div
                className="bg-white p-5 rounded-xl font-semibold text-blue-900 text-lg flex items-center gap-1 cursor-pointer"
                onClick={() => {
                  setStep(step + 1);
                  setSleepDuration('5-6');
                }}
              >
                <BiCheckbox className="text-3xl" />5 to 6 hours
              </div>
              <div
                className="bg-white p-5 rounded-xl font-semibold text-blue-900 text-lg flex items-center gap-1 cursor-pointer"
                onClick={() => {
                  setStep(step + 1);
                  setSleepDuration('6-8');
                }}
              >
                <BiCheckbox className="text-3xl" />6 to 8 hours
              </div>
              <div
                className="bg-white p-5 rounded-xl font-semibold text-blue-900 text-lg flex items-center gap-1 cursor-pointer"
                onClick={() => {
                  setStep(step + 1);
                  setSleepDuration('8+');
                }}
              >
                <BiCheckbox className="text-3xl" />
                More than 8 hours
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <ShowDiet
        type={type}
        target={target}
        loseAmount={loseAmount}
        gainAmount={gainAmount}
        duration={duration}
        activity={activity}
      />
    </div>
  );
};

export default DietBuilder;
