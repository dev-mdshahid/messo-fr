import React from 'react';
import { useState } from 'react';
import {
  BsCheckCircleFill,
  BsPlusCircleFill,
} from 'react-icons/bs';

const FoodCard = ({ cardMode }) => {
  cardMode = 'displa';

  const img =
    'https://img.freepik.com/free-vector/broccoli-vegetable-cartoon-vector-icon-illustration-food-nature-icon-concept-isolated-premium-flat_138676-5150.jpg?w=2000';
  const name = 'Broccoli';
  const type = 'vegetarian';
  const amount = 100;
  const calories = 34;
  const protein = 2.8;
  const fat = 0.4;
  const carbohydrate = 7;
  const [added, setAdded] = useState(false);
  return (
    <div
      className={
        'flex items-center justify-between rounded-xl p-2 select-none border border-white  ' +
        (type === 'vegetarian'
          ? 'bg-green-50 hover:border-green-300'
          : 'bg-red-50 hover:border-red-300')
      }
    >
      {/* Left side of the card */}
      <div className={'flex gap-4 items-center rounded-xl '}>
        <img
          src={img}
          alt=""
          className={
            'rounded-xl ' +
            (cardMode === 'display'
              ? 'w-[70px] h-[70px] '
              : 'w-[100px] h-[100px] ')
          }
        />
        <div>
          <h3 className="font-semibold text-xl text-blue-900 mb-1">{name}</h3>
          {cardMode === 'display' ? (
            <div className="flex gap-5">
              <p className="text-sm ">
                <span className="font-semibold">Amount: </span> {amount}g
              </p>
              <p className="text-sm ">
                <span className="font-semibold">Calories: </span>
                {calories}
              </p>
            </div>
          ) : (
            <div>
              <p className="text-sm ">
                <span className="font-semibold">Calories per 100g: </span>
                {calories}
              </p>
              <div className="flex gap-2 mt-2 text-xs">
                <p className=" capitalize bg-red-500 text-white px-2 py-1 rounded-md">
                  {protein}g protein
                </p>
                <p className=" capitalize bg-green-500 text-white px-2 py-1 rounded-md">
                  {carbohydrate}g carbs
                </p>
                <p className=" capitalize bg-orange-500 text-white px-2 py-1 rounded-md">
                  {fat}g Fat
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Right side of the card */}
      {cardMode === 'display' ? null : (
        <div>
          {/* <input type="text" className='bg-green-100 border border-green-500 '/> */}
          {added ? (
            <BsCheckCircleFill
              className={
                'text-3xl mr-3 hover:scale-110 transition cursor-pointer active:scale-90 text-green-500'
              }
              onClick={() => setAdded(false)}
              title="Remove from plan"
            />
          ) : (
            <BsPlusCircleFill
              className={
                'text-3xl mr-3 hover:scale-110 transition cursor-pointer active:scale-90 text-blue-900'
              }
              onClick={() => setAdded(true)}
              title="Add to plan"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default FoodCard;
