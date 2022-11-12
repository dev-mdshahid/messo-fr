import React from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import {
  IoGiftOutline,
  IoNotificationsOutline,
  IoArrowBack,
} from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';

//Importing icons
import { MdDelete } from 'react-icons/md';
import { FaUserCircle } from 'react-icons/fa';

// For headless ui
import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect, useRef, useState } from 'react';

// Importing user data
import { users } from '../../helpers/helpers';

const TopBar = ({ name }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-white p-5 py-2 ml h-fit flex items-center justify-between">
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
          {/* For headless UI */}
          <div className="text-right">
            <Menu as="div" className="relative inline-block text-left">
              <Menu.Button className="">
                <div className="w-px h-1.5"></div>
                <img
                  className="w-9 h-9 rounded-full"
                  src={users[0].img}
                  alt={users[0].name}
                />
              </Menu.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="px-1 py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          to="/profile"
                          className={`${
                            active ? 'bg-blue-900 text-white' : 'text-blue-900'
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm font-semibold`}
                        >
                          {active ? (
                            <FaUserCircle
                              className="mr-2 h-5 w-5"
                              aria-hidden="true"
                            />
                          ) : (
                            <FaUserCircle
                              className="mr-2 h-5 w-5"
                              aria-hidden="true"
                            />
                          )}
                          Profile
                        </Link>
                      )}
                    </Menu.Item>
                  </div>

                  <div className="px-1 py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active
                              ? 'bg-violet-500 text-white'
                              : 'text-gray-900'
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          {active ? (
                            <MdDelete
                              className="mr-2 h-5 w-5 text-violet-400"
                              aria-hidden="true"
                            />
                          ) : (
                            <MdDelete
                              className="mr-2 h-5 w-5 text-violet-400"
                              aria-hidden="true"
                            />
                          )}
                          Delete
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
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
