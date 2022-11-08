import React from 'react';

const ChoiceBox = ({ icon, text, description, setTarget }) => {
  return (
    <div
      className="bg-white w-fit p-7 text-blue-900 capitalize cursor-pointer rounded-lg hover:bg-blue-900 hover:text-white transition"
      onClick={()=>setTarget({text})}
    >
      {icon}
      <h3 className="text-2xl text-center font-semibold">{text}</h3>
      <p className='text-center text-sm pt-1'>{description}</p>
    </div>
  );
};

export default ChoiceBox;
