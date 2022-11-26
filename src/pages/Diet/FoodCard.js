import React from 'react';
import { useState } from 'react';
import { BsCheckCircleFill, BsPlusCircleFill } from 'react-icons/bs';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

const FoodCard = ({ food, cardMode }) => {
  // Modal
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  //Food information
  const { name, img, nutrition, type, calories, description } = food;
  const { protein, fat, carbs } = nutrition;
  cardMode = 'displa';
  const amount = 100;
  const [added, setAdded] = useState(false);

  return (
    <div
      onClick={openModal}
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
                  {carbs}g carbs
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

      {/* Modal code */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-[600px] max-h-[700px] overflow-scroll transform rounded-2xl bg-white p-8 px-8 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-semibold leading-6 text-blue-900 mb-5"
                  >
                    {name}
                  </Dialog.Title>
                  <div className="mt-2">
                    <img src={img} alt="" className="rounded-xl w-full" />
                    <p className="text-sm text-gray-500 mt-5">{description}</p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default FoodCard;
