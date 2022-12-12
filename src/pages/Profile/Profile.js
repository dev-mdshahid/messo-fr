import React from 'react';
import CompletionCard from './CompletionCard';
import PremiumOffer from './PremiumOffer';
import UserInfo from './UserInfo';

const Profile = () => {
  return (
    <div className="flex gap-5">
      {/* Left side */}
      <UserInfo />
      
      {/* Right side */}
      <div className="w-[400px] xl:flex flex-col gap-5 hidden">
        <CompletionCard />
        <PremiumOffer />
      </div>
    </div>
  );
};

export default Profile;
