import React from 'react';
import { Form } from 'react-bootstrap';

type ColorRadioButtonProps = {
  selectedColor: string,
  onChange: (color: string) => void,
}

const ColorRadioButtons = ({ selectedColor, onChange }: ColorRadioButtonProps) => {
  const colors = ['white', 'red', 'blue', 'green', 'turquoise', 'yellow', 'purple'];

  return (
    <div key='inline-radio'>
      {
        colors.map((color) =>
          <Form.Check
            inline
            key={color}
            className={`radio-${color}`}
            type='radio'
            name='color'
            id={color}
            checked={selectedColor === color}
            onChange={() => onChange(color)}
          />
        )
      }
    </div>
  );
}

export default ColorRadioButtons;
