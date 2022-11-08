import React from 'react';
import { useState } from 'react';
import DietBuilder from './DietBuilder';

const Diet = () => {
  const dietRoutines = [];
  const [pageMode, setPageMode] = useState('display'); // can be display or build

  return dietRoutines?.length && pageMode === 'display' ? (
    <div>
      <h1>Here are your routines!</h1>
    </div>
  ) : pageMode === 'display' ? (
    <div className="text-center">
      <h1 className="text-3xl py-5">No diet routine has been found!</h1>
      <button className="btn-primary px-4 transition bg-blue-900" onClick={()=>setPageMode('build')}>
        + Create a new routine
      </button>
    </div>
  ) : (
    <DietBuilder/>
  );
};

export default Diet;
