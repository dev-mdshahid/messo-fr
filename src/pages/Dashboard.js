import React from 'react';
import SideMenu from '../components/Shared/SideMenu';

import { GiBiceps } from 'react-icons/gi';
import { FaRunning } from 'react-icons/fa';

import SingleStat from '../components/Dashboard/SingleStat';
import TopBar from '../components/Shared/TopBar';

const Dashboard = () => {
  return (
    <div className="grid grid-cols-4 2xl:grid-cols-6 gap-4 ml-4 mt-4 child:bg-blue-100">
      {/* Box - 1 */}
      <div className="">
        <div className="rounded-lg grid place-items-center bg-white">
          <div className="flex items-center p-5 rounded-md">
            <div
              className={`text-2xl text-green-500 bg-green-100 p-3 rounded-full`}
            >
              <GiBiceps />
            </div>

            <div className="ml-4">
              <p className="text-xs font-semibold text-gray-400 whitespace-nowrap mb-1">
                Weekly Goal
              </p>
              <p className="font-bold ">
                48
                <span>%</span>{' '}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Box - 2 */}
      <div>
        <div className="rounded-lg grid place-items-center bg-white">
          <div className="flex items-center p-5 rounded-md">
            <div
              className={`text-2xl text-red-500 bg-red-100 p-3 rounded-full`}
            >
              <FaRunning />
            </div>

            <div className="ml-4">
              <p className="text-xs font-semibold text-gray-400 whitespace-nowrap mb-1">
                Weekly Running
              </p>
              <p className="font-bold ">
                68
                <span> KM</span>{' '}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Box - 3 */}
      <div className="col-span-2 row-span-2">1</div>

      {/* Box - 4 */}
      <div className="col-span-2 row-span-2">1</div>

      {/* Box - 5 */}
      <div>
        <div className="rounded-lg grid place-items-center bg-white">
          <div className="flex items-center p-5 rounded-md">
            <div
              className={`text-2xl text-blue-500 bg-blue-100 p-3 rounded-full`}
            >
              <FaRunning />
            </div>

            <div className="ml-4">
              <p className="text-xs font-semibold text-gray-400 whitespace-nowrap mb-1">
                Weekly Runnig
              </p>
              <p className="font-bold ">
                68
                <span> KM</span>{' '}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Box - 6 */}
      <div>
        <div className="rounded-lg grid place-items-center bg-white">
          <div className="flex items-center p-5 rounded-md">
            <div
              className={`text-2xl text-blue-500 bg-blue-100 p-3 rounded-full`}
            >
              <FaRunning />
            </div>

            <div className="ml-4">
              <p className="text-xs font-semibold text-gray-400 whitespace-nowrap mb-1">
                Weekly Runnig
              </p>
              <p className="font-bold ">
                68
                <span> KM</span>{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
