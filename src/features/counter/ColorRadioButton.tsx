import React from 'react';
import { Form } from 'react-bootstrap';

export const colors = ['white', 'red', 'blue', 'green', 'turquoise', 'yellow', 'purple'];

type ColorRadioButtonProps = {
  color: string,
  isChecked: boolean,
  onChange: (color: string) => void,
}

const ColorRadioButton = ({ color, isChecked, onChange }: ColorRadioButtonProps) => (
  <Form.Check
    inline
    className={`radio-${color}`}
    type='radio'
    name='color'
    id={color}
    label={color}
    checked={isChecked}
    onChange={() => onChange(color)}
  />
);

export default ColorRadioButton;
