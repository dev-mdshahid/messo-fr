import React from 'react';
import ChoiceBox from '../../components/Shared/ChoiceBox';
import { FaDumbbell, FaWeight } from 'react-icons/fa';
import { GiBodyHeight } from 'react-icons/gi';

// Importing icons
import gainWeight from '../../media/img/icons/weight_gain.png';
import loseWeight from '../../media/img/icons/weight_lose.png';
import increaseHeight from '../../media/img/icons/height_increase.png';

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
                img={loseWeight}
                text={'Lose Weight'}
                description={'(Burn away extra weight)'}
                setTarget={setTarget}
              />
            </div>
            <div>
              <ChoiceBox
                img={increaseHeight}
                text={'Increase Height'}
                description={'(Increase your current height)'}
                setTarget={setTarget}
              />
            </div>
            <div>
              <ChoiceBox
                img={gainWeight}
                text={'Gain Weight'}
                description={'(Add some extra weight)'}
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
