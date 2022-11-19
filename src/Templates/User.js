import React from 'react';
import SideMenu from '../components/Shared/SideMenu';
import TopBar from '../components/Shared/TopBar';
const User = ({ component, topbar }) => {
  
  return (
    <main className="flex">
      <SideMenu />
      <div className="w-full">
        {topbar ? <TopBar name={topbar} /> : null}

        <div className="m-5">{component}</div>
      </div>
    </main>
  );
};

export default User;
