import React from 'react';
import Menu from '../Dashboard/Menu';

// Importing ions
import { FaChild } from 'react-icons/fa';
import { IoFitness, IoBarChart, IoBarbell } from 'react-icons/io5';
import { MdFaceRetouchingNatural } from 'react-icons/md';
import { GiHealthNormal } from 'react-icons/gi';
import { FcCalendar } from 'react-icons/fc';

const SideMenu = () => {
  return (
    <div className="bg-white min-h-screen w-fit p-3 pt-2 pr-0 drop-shadow-xl">
      {/* Logo */}
      <div className="flex items-center pl-4 mt-4">
        <div className="w-9 h-9 bg-messo flex justify-center items-center rounded-xl rounded-br mr-2">
          <FaChild className="text-2xl text-white" />
        </div>
        <h1 className="text-xl font-bold">MessO</h1>
      </div>

      {/* Main menu */}
      <h3 className="text-sm font-semibold mt-10 pl-4">Main Menu</h3>
      <div className="mt-4 flex flex-col gap-2 text-gray-500 child:whitespace-nowrap child:pr-8">
        {/* Navigation menu*/}
        <Menu icon={<IoBarChart />} name="Dashboard" to="/dashboard" />
        <Menu icon={<IoBarbell />} name="Fitness" to="/fitness" />
        <Menu icon={<IoFitness />} name="Diet and Nutrition" to="/diet" />
        <Menu
          icon={<MdFaceRetouchingNatural />}
          name="Beauty Care"
          to="/beautycare"
        />
        <Menu
          icon={<GiHealthNormal />}
          name="Test Your Health"
          to="/testhealth"
        />
      </div>

      <div className="pr-4">
        <div className="bg-messo flex items-center px-3 py-2 w-44 mx-auto rounded-xl mt-16 drop-shadow shadow-lg shadow-blue-200 cursor-pointer hover:shadow-xl hover:shadow-blue-200 hover:scale-105 transition">
          <FcCalendar className="text-5xl mr-2" />
          <p className="text-[#edfcf7] text-xs">Create Workout Plan Now</p>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
