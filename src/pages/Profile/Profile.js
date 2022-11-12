import React from 'react';
import userDp from '../../media/img/userdp/shahid.jpg';

// Importing icons
import { FaWeight } from 'react-icons/fa';
import { GiBodyHeight } from 'react-icons/gi';
import { TbCalendarTime } from 'react-icons/tb';

import SingleInfoCard from './SingleInfoCard';

const Profile = () => {
  return (
    <div className="bg-white p-5 rounded-lg max-w-[1200px]">
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

        <div className="mt-4">
          <h2 className="text-xl font-semibold text-blue-900 ">
            Health information
          </h2>

          <div className="mt-4 grid grid-cols-3 gap-5 child:rounded-xl child:p-3">
            <div className="bg-blue-100">
              <SingleInfoCard
                title="Your current weight"
                data="65.3 kg"
                icon={<FaWeight className="text-4xl text-blue-500" />}
              />
            </div>
            <div className="bg-red-100">
              <SingleInfoCard
                title="Your current height"
                data="5 ft 5 in"
                icon={<GiBodyHeight className="text-4xl text-red-500" />}
              />
            </div>

            <div className="bg-green-100">
              <SingleInfoCard
                title="Your current age"
                data="23 years"
                icon={<TbCalendarTime className="text-4xl text-green-500" />}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
