import React from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import {
  IoGiftOutline,
  IoNotificationsOutline,
  IoArrowBack,
} from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

// Importing user data
import { users } from '../../helpers/helpers';

const TopBar = ({ name }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white p-5 py-5 ml h-fit rounded flex items-center justify-between">
      {/* left title */}
      <div className="flex items-center mr-5">
        <IoArrowBack
          onClick={() => navigate(-1)}
          className="text-2xl text-gray-500 mr-5 cursor-pointer"
        />

        <h1 className="text-2xl font-bold select-none">{name}</h1>
      </div>

      {/* right side condtent */}
      <div className="flex items-center gap-7">
        {/* Search box */}
        <div className="bg-gray-200 w-72 items-center gap-3 px-4 py-1.5 rounded-xl hidden lg:flex">
          <BiSearchAlt className="text-2xl text-gray-500" />
          <input
            type="text"
            className="w-full bg-transparent outline-none placeholder:text-sm"
            name="search"
            placeholder="Find something here..."
            id="search"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-100 text-messo rounded-lg">
            <IoNotificationsOutline className="text-xl" />
          </div>

          <div className="p-2 bg-blue-100 text-messo rounded-lg">
            <IoGiftOutline className="text-xl" />
          </div>
        </div>

        {/* Profile */}
        <div className="flex items-center gap-2 pr-5">
          <img
            className="w-9 h-9 rounded-full"
            src={users[0].img}
            alt={users[0].name}
          />
          <div className="text-xs">
            <p className="font-bold whitespace-nowrap">{users[0].name}</p>
            <p className="font-semibold whitespace-nowrap text-gray-500">
              User
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
