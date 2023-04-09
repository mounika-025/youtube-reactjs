import React from 'react';

const Button = ({name}) => {
  return (
    <div>
      <button className='px-4 py-1 m-2 bg-gray-400 text-white rounded'>{name}</button>
    </div>
  );
}

export default Button;
