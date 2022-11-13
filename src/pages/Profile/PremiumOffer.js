import React from 'react';
import discountBadge from '../../media/img/icons/discount_badge.png';

//Icons
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { TbShare } from 'react-icons/tb';
import { RiShareForwardLine } from 'react-icons/ri';
import { AiOutlineStar } from 'react-icons/ai';

const PremiumOffer = () => {
  return (
    <div className="bg-white w-full p-8 rounded-xl whitespace-nowrap">
      <div className="flex flex-col items-center">
        <div className="bg-yellow-50 p-4 rounded-full w-fit">
          <img src={discountBadge} alt="" className="w-20" />
        </div>
        <p className="text-gray-400 mt-3 capitalize font-medium">
          Special offer
        </p>
        <h2 className="text-xl capitalize font-bold text-blue-900">
          Only just for you
        </h2>
      </div>

      <div className="flex gap-8 justify-between items-center mt-6">
        <div className="flex gap-5 items-center">
          <HiOutlineShoppingCart className="text-3xl text-amber-500" />
          <div>
            <h3 className="capitalize font-bold text-blue-900">
              Buy now to avail 35% off
            </h3>
            <p className="text-gray-500 text-sm">Feel free to cancel anytime</p>
          </div>
        </div>
        <div className="bg-amber-100 text-amber-500 p-2 rounded-full text-xl">
          <MdKeyboardArrowRight />
        </div>
      </div>
      <div className="flex gap-8 justify-between items-center mt-6">
        <div className="flex gap-5 items-center">
          <TbShare className="text-3xl text-green-500" />
          <div>
            <h3 className="capitalize font-bold text-blue-900">
              Invite friends to MessO
            </h3>
            <p className="text-gray-500 text-sm">Avail 15% discount</p>
          </div>
        </div>
        <div className="bg-green-100 text-green-500 p-2 rounded-full text-xl">
          <MdKeyboardArrowRight />
        </div>
      </div>

      <div className="bg-yellow-100 py-5 px-8 mt-8 rounded-lg relative">
        <div className="w-1 h-[80px] bg-yellow-500 rounded-2xl absolute left-0 bottom-[50%] translate-y-1/2"></div>
        <div className="">
          <h2 className="text-lg font-bold capitalize text-blue-900">
            Design system workshop{' '}
          </h2>
          <p className="text-sm text-gray-500 mt-1 mb-4">
            <span>20th December</span> <span className='ml-4'>10:30 am</span>
          </p>
          <div className='flex gap-8 justify-evenly'>
            <div className="flex items-center gap-2 text-yellow-600">
              <AiOutlineStar className="text-2xl" />
              <span>Interested</span>
            </div>
            <div className="flex items-center gap-2 text-yellow-600">
              <RiShareForwardLine className="text-2xl" />
              <span>Share</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumOffer;
