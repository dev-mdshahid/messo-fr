import React from 'react';
import { IoVideocam } from 'react-icons/io5';
import { RiMessage3Fill } from 'react-icons/ri';

const ExerciseCard = ({ exercise, plan, id }) => {
  const { name, Description, health_complication, img, video, target, part } =
    exercise;
  const { rep, set, time } = plan;
  return (
    <div className="w-[700px] flex justify-between gap-4 p-2 m-3 rounded-lg hover:shadow-lg cursor-pointer border transition items-center bg-white">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl text-blue-900 pl-1 opacity-70">{id + 1}</h1>
        <img src={img} alt={name} className=" rounded-lg w-[60px]" />
        <div className="col-span-3 text-gray-600">
          <h3 className="font-semibold text-lg text-blue-900">
            {name} <span className="text-xs text-gray-500">({part[0]})</span>
          </h3>
          <div className="flex gap-4 mt-1.5 mb-2 text-sm">
            <p className="">
              <span className="font-semibold">Sets:</span> {set}
            </p>
            <p className="">
              <span className="font-semibold">Reps:</span> {rep}
            </p>
            <p>
              {' '}
              <span className="font-semibold">Time:</span> {time}s
            </p>
          </div>
          {/* <p className="font-bold text-blue-900">Details: </p> */}
        </div>
      </div>
      <div className="flex items-center gap-3 child:whitespace-nowrap">
        <div className="bg-blue-100 px-2 py-1 rounded-lg flex items-center gap-2 text-blue-500 transition hover:scale-105">
          <RiMessage3Fill />
          <span className="text-sm font-semibold">See details</span>
        </div>
        <a
          href={video}
          target="_blank"
          rel="noreferrer"
          className="bg-blue-100 px-2 py-1 rounded-lg flex items-center gap-2 text-blue-500 transition hover:scale-105"
        >
          <IoVideocam />
          <span className="text-sm font-semibold">Watch video</span>
        </a>
      </div>
    </div>
  );
};

export default ExerciseCard;
