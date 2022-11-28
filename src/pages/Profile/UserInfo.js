import React, { useState } from 'react';
import dummyDp from '../../media/img/icons/dummy_avatar.png';
import UpdateModal from '../../components/Modals/UpdateModal';

// Importing icons
import { FaMale, FaTachometerAlt, FaWeight } from 'react-icons/fa';
import { GiBodyHeight } from 'react-icons/gi';
import { TbCalendarTime } from 'react-icons/tb';
import {
  MdFastfood,
  MdOutlineDeleteOutline,
  MdOutlineIosShare,
} from 'react-icons/md';
import { BiDumbbell } from 'react-icons/bi';
import { AiFillEdit } from 'react-icons/ai';

import SingleInfoCard from './SingleInfoCard';
import { useContext } from 'react';
import { LoginContext } from '../../helpers/Contexts';

const UserInfo = () => {
  const { user } = useContext(LoginContext);
  const [updateHealthModal, setUpdateHealthModal] = useState(false);
  const { fname, lname, gender, email, age, height, weight } = user;

  //Calculate bmi and body status
  let bmi = weight / ((height / 100) * (height / 100));
  bmi = bmi.toPrecision(4);
  let bodyStatus;
  if (bmi < 18.5) {
    bodyStatus = 'Underweight';
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    bodyStatus = 'Normal';
  } else if (bmi >= 25 && bmi <= 29.9) {
    bodyStatus = 'Overweight';
  } else {
    bodyStatus = 'Obesity';
  }

  return (
    <div className="bg-white p-6 shadow rounded-lg w-full select-none">
      <div className="bg-[url('https://visme.co/blog/wp-content/uploads/2017/07/50-Beautiful-and-Minimalist-Presentation-Backgrounds-040.jpg')] bg-no-repeat bg-center bg-cover rounded-xl w-full h-[200px]"></div>

      <div className="relative h-28">
        <img
          src={dummyDp}
          alt=""
          className="absolute w-32 h-32 bottom-6 left-4 rounded-full border border-2 border-white"
        />
        <div className="absolute left-40 top-3">
          <h2 className="text-2xl font-bold text-blue-900">
            {fname + ' ' + lname}
          </h2>
          <p className="pt-px text-gray-500">{email}</p>
        </div>
      </div>

      <div className="ml-3">
        <p className="text-gray-500 text-[14px]"></p>

        {/* Health information */}
        <div className="mt-7 whitespace-nowrap">
          <h2 className="text-xl font-bold text-blue-900 pb-2 flex items-center justify-between">
            <span>Health information</span>
            <AiFillEdit />
          </h2>

          {/* <UpdateModal satus={updateHealthModal}/> */}

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5 child:rounded-xl child:p-3">
            <div className="bg-blue-100 shadow-lg hover:shadow-xl transition">
              <SingleInfoCard
                title="Your current weight"
                data={weight + ' kg'}
                icon={<FaWeight className="text-4xl text-blue-500" />}
              />
            </div>
            <div className="bg-red-100 shadow-lg hover:shadow-xl transition">
              <SingleInfoCard
                title="Your current height"
                data={height + ' cm'}
                icon={<GiBodyHeight className="text-4xl text-red-500" />}
              />
            </div>

            <div className="bg-green-100 shadow-lg hover:shadow-xl transition">
              <SingleInfoCard
                title="Your current age"
                data={age + ' years old'}
                icon={<TbCalendarTime className="text-4xl text-green-500" />}
              />
            </div>
            <div className="bg-lime-100 shadow-lg hover:shadow-xl transition">
              <SingleInfoCard
                title="Your current BMI"
                data={`${bmi} (${bodyStatus})`}
                icon={<FaTachometerAlt className="text-4xl text-lime-500" />}
              />
            </div>

            <div className="bg-fuchsia-100 shadow-lg hover:shadow-xl transition">
              <SingleInfoCard
                title="Your current goal"
                data={
                  bodyStatus === 'Underweight'
                    ? 'Gain Weight'
                    : bodyStatus === 'Normal'
                    ? 'Maintain Weight'
                    : 'Lose weight'
                }
                icon={<BiDumbbell className="text-4xl text-fuchsia-500" />}
              />
            </div>

            <div className="bg-orange-100 shadow-lg hover:shadow-xl transition">
              <SingleInfoCard
                title="Your gender"
                data={gender}
                icon={<FaMale className="text-4xl text-orange-500" />}
              />
            </div>
          </div>
        </div>

        {/* Current plan */}
        <div className="mt-12 whitespace-nowrap">
          <h2 className="text-xl font-bold text-blue-900 pb-6">Active Plans</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-5 transition ">
            {/* Single plan UI */}
            <div className="border rounded-lg py-4 hover:shadow-lg transition cursor-pointer">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="border-l-4 border-blue-600 rounded px-4 font-semibold text-[18px] text-blue-900 capitalize">
                    Exercise plan
                  </h3>
                  <p className="text-[13px] text-gray-500 px-5">
                    Started on 13/11/2023
                  </p>
                </div>

                <BiDumbbell className="text-4xl text-blue-600 mx-5" />
              </div>

              <div className="px-5">
                <div className="grid grid-cols-2 my-5">
                  <div className="text-center border-r">
                    <h2 className="text-3xl font-semibold text-blue-700">15</h2>
                    <p className="text-[13px] text-gray-500 capitalize">
                      total Exercises
                    </p>
                  </div>
                  <div className="text-center border-l">
                    <h2 className="text-3xl font-semibold text-green-700">
                      07
                    </h2>
                    <p className="text-[13px] text-gray-500 capitalize">
                      Days completed
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-gray-500 text-xl flex gap-1 items-center">
                    <MdOutlineIosShare />
                    <MdOutlineDeleteOutline />
                  </div>
                  <div className="child:h-8 child:rounded-full flex relative child:relative child:border-2">
                    <img src={dummyDp} alt="" className="left-6" />
                    <img src={dummyDp} alt="" className="left-3" />
                    <img src={dummyDp} alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="border rounded-lg py-4 hover:shadow-lg transition cursor-pointer">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="border-l-4 border-sky-600 rounded px-4 font-semibold text-[18px] text-blue-900 capitalize">
                    diet plan 1
                  </h3>
                  <p className="text-[13px] text-gray-500 px-5">
                    Started on 13/11/2023
                  </p>
                </div>

                <MdFastfood className="text-4xl text-sky-600 mx-5" />
              </div>

              <div className="px-5">
                <div className="grid grid-cols-2 my-5">
                  <div className="text-center border-r">
                    <h2 className="text-3xl font-semibold text-blue-700">21</h2>
                    <p className="text-[13px] text-gray-500 capitalize">
                      total foods
                    </p>
                  </div>
                  <div className="text-center border-l">
                    <h2 className="text-3xl font-semibold text-green-700">
                      13
                    </h2>
                    <p className="text-[13px] text-gray-500 capitalize">
                      Days completed
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-gray-500 text-xl flex gap-1 items-center">
                    <MdOutlineIosShare />
                    <MdOutlineDeleteOutline />
                  </div>
                  <div className="child:h-8 child:rounded-full flex relative child:relative child:border-2">
                    <img src={dummyDp} alt="" className="left-6" />
                    <img src={dummyDp} alt="" className="left-3" />
                    <img src={dummyDp} alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="border rounded-lg py-4 hover:shadow-lg transition cursor-pointer">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="border-l-4 border-pink-600 rounded px-4 font-semibold text-[18px] text-blue-900 capitalize">
                    diet plan 2
                  </h3>
                  <p className="text-[13px] text-gray-500 px-5">
                    Started on 13/11/2023
                  </p>
                </div>

                <MdFastfood className="text-4xl text-pink-600 mx-5" />
              </div>

              <div className="px-5">
                <div className="grid grid-cols-2 my-5">
                  <div className="text-center border-r">
                    <h2 className="text-3xl font-semibold text-blue-700">24</h2>
                    <p className="text-[13px] text-gray-500 capitalize">
                      total foods
                    </p>
                  </div>
                  <div className="text-center border-l">
                    <h2 className="text-3xl font-semibold text-green-700">
                      09
                    </h2>
                    <p className="text-[13px] text-gray-500 capitalize">
                      Days completed
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-gray-500 text-xl flex gap-1 items-center">
                    <MdOutlineIosShare />
                    <MdOutlineDeleteOutline />
                  </div>
                  <div className="child:h-8 child:rounded-full flex relative child:relative child:border-2">
                    <img src={dummyDp} alt="" className="left-6" />
                    <img src={dummyDp} alt="" className="left-3" />
                    <img src={dummyDp} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
