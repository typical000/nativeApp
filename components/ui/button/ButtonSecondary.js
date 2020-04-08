import React from 'react';
import Button from './Button';

const ButtonSecondary = (props) => (
  <Button {...props} type={Button.TYPE.SECONDARY} />
);

export default ButtonSecondary;
