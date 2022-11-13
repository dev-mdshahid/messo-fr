import React from 'react';
import userDp from '../../media/img/userdp/shahid.jpg';

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

import SingleInfoCard from './SingleInfoCard';

const UserInfo = () => {
  return (
    <div className="bg-white p-6 shadow rounded-lg w-full select-none">
      <div className="bg-[url('https://visme.co/blog/wp-content/uploads/2017/07/50-Beautiful-and-Minimalist-Presentation-Backgrounds-040.jpg')] bg-no-repeat bg-center bg-cover rounded-xl w-full h-[200px]"></div>

      <div className="relative h-28">
        <img
          src={userDp}
          alt=""
          className="absolute w-32 h-32 bottom-6 left-4 rounded-xl border border-2 border-white"
        />
        <div className="absolute left-40 top-3">
          <h2 className="text-2xl font-bold text-blue-900">
            Md Shahidul Islam
          </h2>
          <p className="capitalize pt-px text-gray-500">Front end developer</p>
        </div>
      </div>

      <div className="ml-3">
        <p className="text-gray-500 text-[14px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias unde
          molestiae id commodi similique? Quam, itaque modi molestias, provident
          sed laboriosam perferendis suscipit est libero rerum minima
          blanditiis. Expedita, tenetur. Asperiores, nulla iure! Fuga eius
          dignissimos officiis quos animi excepturi reiciendis recusandae
          obcaecati ad explicabo ratione iusto et, at veritatis provident, quas
          quisquam molestiae cupiditate eum quo minus ab veniam.
        </p>

        {/* Health information */}
        <div className="mt-7 whitespace-nowrap">
          <h2 className="text-xl font-bold text-blue-900 pb-2">
            Health information
          </h2>

          <div className="mt-4 grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-5 child:rounded-xl child:p-3">
            <div className="bg-blue-100 shadow-lg hover:shadow-xl transition">
              <SingleInfoCard
                title="Your current weight"
                data="65.3 kg"
                icon={<FaWeight className="text-4xl text-blue-500" />}
              />
            </div>
            <div className="bg-red-100 shadow-lg hover:shadow-xl transition">
              <SingleInfoCard
                title="Your current height"
                data="5 ft 5 in"
                icon={<GiBodyHeight className="text-4xl text-red-500" />}
              />
            </div>

            <div className="bg-green-100 shadow-lg hover:shadow-xl transition">
              <SingleInfoCard
                title="Your current age"
                data="23 years old"
                icon={<TbCalendarTime className="text-4xl text-green-500" />}
              />
            </div>
            <div className="bg-lime-100 shadow-lg hover:shadow-xl transition">
              <SingleInfoCard
                title="Your current BMI"
                data="27.6 (Overweight)"
                icon={<FaTachometerAlt className="text-4xl text-lime-500" />}
              />
            </div>

            <div className="bg-fuchsia-100 shadow-lg hover:shadow-xl transition">
              <SingleInfoCard
                title="Your current goal"
                data="lose weight"
                icon={<BiDumbbell className="text-4xl text-fuchsia-500" />}
              />
            </div>

            <div className="bg-orange-100 shadow-lg hover:shadow-xl transition">
              <SingleInfoCard
                title="Your gender"
                data="Male"
                icon={<FaMale className="text-4xl text-orange-500" />}
              />
            </div>
          </div>
        </div>

        {/* Current plan */}
        <div className="mt-12 whitespace-nowrap">
          <h2 className="text-xl font-bold text-blue-900 pb-6">Active Plans</h2>

          <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-5 transition ">
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
                    <img src={userDp} alt="" className="left-6" />
                    <img src={userDp} alt="" className="left-3" />
                    <img src={userDp} alt="" />
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
                    <img src={userDp} alt="" className="left-6" />
                    <img src={userDp} alt="" className="left-3" />
                    <img src={userDp} alt="" />
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
                    <img src={userDp} alt="" className="left-6" />
                    <img src={userDp} alt="" className="left-3" />
                    <img src={userDp} alt="" />
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
