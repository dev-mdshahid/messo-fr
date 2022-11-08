import React from 'react';
import { useState } from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';
import { FaDumbbell, FaRunning, FaWeight } from 'react-icons/fa';
import { ImSleepy } from 'react-icons/im';
import {
  GiBodyHeight,
  GiChickenOven,
  GiConfirmed,
  GiTreeBranch,
} from 'react-icons/gi';
import ChoiceBox from '../../components/Shared/ChoiceBox';
import ShowDiet from './ShowDiet';

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
                icon={<GiTreeBranch className={choiceIconDesign} />}
                text={'Vegetarian'}
                description={"(Eat only vegetables)"}
                setTarget={setType}
              />
            </div>
            <div onClick={() => setStep(2)}>
              <ChoiceBox
                icon={<GiChickenOven className={choiceIconDesign} />}
                text={'Non Vegetarian'}
                description={"(Eat fish, meat or chicken)"}
                setTarget={setType}
              />
            </div>
            <div onClick={() => setStep(2)}>
              <ChoiceBox
                icon={<GiConfirmed className={choiceIconDesign} />}
                text={'Pera nai chill'}
                description={"(Ekta hoilei hoi)"}
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
                icon={<FaDumbbell className={choiceIconDesign} />}
                text={'Lose weight'}
                description={"(Burn away extra weight)"}
                setTarget={setTarget}
              />
            </div>
            <div onClick={() => setStep(3)}>
              <ChoiceBox
                icon={<FaWeight className={choiceIconDesign} />}
                text={'Gain weight'}
                description={"(Add some extra weight)"}
                setTarget={setTarget}
              />
            </div>
            <div onClick={() => setStep(5)}>
              <ChoiceBox
                icon={<BsCheckCircleFill className={choiceIconDesign} />}
                text={'Maintain weight'}
                description={"(Happy with the current weight)"}
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
                  icon={<ImSleepy className={choiceIconDesign} />}
                  text={'Inactive'}
                  description={'(Little to no exercise)'}
                  setTarget={setType}
                />
              </div>
              <div onClick={() => setStep(step + 1)}>
                <ChoiceBox
                  icon={<FaRunning className={choiceIconDesign} />}
                  text={'Slightly active'}
                  description={'(Exercise 3 times/ week)'}
                  setTarget={setType}
                />
              </div>
              <div onClick={() => setStep(step + 1)}>
                <ChoiceBox
                  icon={<FaDumbbell className={choiceIconDesign} />}
                  text={'Very active'}
                  description={'(Intense workout 4-5 times/week)'}
                  setTarget={setType}
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
