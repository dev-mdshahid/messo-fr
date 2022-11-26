import React from 'react';

const DietFoodCard = ({ food, quantity, id }) => {
  const { name, img, category, calories, nutrition } = food;
  const { protein, fat, carbs } = nutrition;
  console.log(food);
  return (
    <div className="p-2 rounded-xl flex gap-3 items-center border hover:shadow-lg cursor-pointer">
      <h1 className="text-2xl text-blue-900 pl-1 opacity-70">{id + 1}</h1>
      <img src={img} alt={name} className="w-12 rounded-full" />
      <div>
        <h1 className="text-xl">
          {name}{' '}
          <span className="text-sm text-blue-900 opacity-70">({category})</span>
        </h1>
        <h3 className="text-sm text-gray-500">
          <span className="font-semibold">{quantity}</span> grams (
          {((protein / 400) * quantity).toPrecision(2)}g protein,{' '}
          {((fat / 900) * quantity).toPrecision(2)}g fat,{' '}
          {((carbs / 900) * quantity).toPrecision(2)}g carbs){' '}
        </h3>
      </div>
    </div>
  );
};

export default DietFoodCard;
