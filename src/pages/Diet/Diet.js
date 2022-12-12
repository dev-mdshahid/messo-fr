// Import react in order to use it
import React from 'react';

// Import useState(method) in order to use it
import { useState } from 'react';

// Diet building tool 
import DietBuilder from './DietBuilder';

// Main component
// Arrow function 
const Diet = () => {
  // Array that holds all the diets
  const dietRoutines = [];

  // Declaring states(special types of variable)
  // Main property - reload the UI when the set method is called
  const [pageMode, setPageMode] = useState('display'); // can be display or build

  return dietRoutines?.length > 0 && pageMode === 'display' ? (
    <div>
      <h1>Here are your routines!</h1>
    </div>
  ) : pageMode === 'display' ? (
    <div className="text-center">
      <h1 className="text-3xl py-5">No diet routine has been found!</h1>
      
      {/* Set the page mode to "build" when the button is clicked */}
      <button className="btn-primary px-4 transition bg-blue-900" onClick={()=>setPageMode('build')}>
        + Create a new routine
      </button>
    </div>
  ) : (
    <DietBuilder/>
  );
};

export default Diet;
