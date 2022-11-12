import React from 'react';

const ChoiceBox = ({ img, icon, text, description, setTarget }) => {
  return (
    <div
      className="bg-white w-fit p-7 text-blue-900 select-none capitalize cursor-pointer rounded-lg hover:bg-blue-900 hover:text-white transition"
      onClick={() => setTarget({ text })}
    >
      {icon}
      {img ? <img src={img} alt="" className="h-[80px] w-[80px] mx-auto mb-3" /> : null}

      <h3 className="text-2xl text-center font-semibold">{text}</h3>
      <p className="text-center text-sm pt-1">{description}</p>
    </div>
  );
};

export default ChoiceBox;
