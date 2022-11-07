import React from 'react';
import ChoiceBox from '../../components/Shared/ChoiceBox';
import { FaDumbbell, FaWeight } from 'react-icons/fa';
import { GiBodyHeight } from 'react-icons/gi';

const ChooseTarget = ({ setTarget }) => {
  const choiceIconDesign = 'text-6xl m-auto mb-3';
  return (
    <div>
      <div className="h flex justify-center">
        <div className="mt-20">
          {/* Question */}
          <h1 className="text-4xl text-center">What is your primary goal?</h1>
          {/* Choice boxes */}
          <div className="flex gap-6 mt-12">
            <div>
              <ChoiceBox
                icon={<FaDumbbell className={choiceIconDesign} />}
                text={'Lose weight'}
                setTarget={setTarget}
              />
            </div>
            <div>
              <ChoiceBox
                icon={<GiBodyHeight className={choiceIconDesign} />}
                text={'Increase height'}
                setTarget={setTarget}
              />
            </div>
            <div>
              <ChoiceBox
                icon={<FaWeight className={choiceIconDesign} />}
                text={'Gain weight'}
                setTarget={setTarget}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseTarget;
