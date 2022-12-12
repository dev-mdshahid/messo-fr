import React from 'react';
import { useState } from 'react';
import ChooseTarget from './ChooseTarget';
import ShowPlan from './ShowPlan';

const Fitness = () => {
  const [target, setTarget] = useState('');
  const sectionHeight = window.screen.height + 'px';

  return (
    <div className={`h-[${sectionHeight}] overflow-auto`}>
      {
        <div className="">
          <div className="">
            <ShowPlan />
          </div>
        </div>
      }
    </div>
  );
};

export default Fitness;
