import React from 'react';
import Button from './Button';

const ButtonPrimary = (props) => (
  <Button {...props} type={Button.TYPE.PRIMARY} />
);

export default ButtonPrimary;
