import React from 'react';
import Button from './Button';

const ButtonList = () => {
  return (
    <div className='flex'>
      <Button name='All'/>
      <Button name='Cricket'/>
      <Button name='Live'/>
      <Button name='Gaming'/>
      <Button name='News'/>
      <Button name='Cooking'/>
      <Button name='Vlogs'/>
      <Button name='Music'/>
    </div>
  );
}

export default ButtonList;
