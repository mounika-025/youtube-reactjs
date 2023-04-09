import React from 'react';
import SideBar from './SideBar';
import MainContainet from './MainContainer';

const Body = () => {
  return (
    <div className='flex'>
      <SideBar/>
      <MainContainet/>
    </div>
  );
}

export default Body;
