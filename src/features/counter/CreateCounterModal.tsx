import React, { useState } from 'react';
import { Modal, Button, Form, Col, Row } from 'react-bootstrap';
import { useAppDispatch } from '../../app/hooks';
import ColorRadioButton, { colors } from './ColorRadioButton';
import { addCounter } from './counterSlice';

type CreateCounterModalProps = {
  isShowing: boolean,
  onHide: () => void;
}

const CreateCounterModal = ({ isShowing, onHide }: CreateCounterModalProps) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);
  const [increments, setIncrements] = useState(1);
  const [color, setColor] = useState('white');
  const dispatch = useAppDispatch();

  const handleClose = () => {
    setName('');
    setAmount(0);
    setIncrements(1);
    onHide();
  }

  const handleSubmit = () => {
    dispatch(addCounter({
      id: Date.now().toString(),
      name,
      amount,
      increments,
      color,
    }));
    handleClose()
  }

  const isDataValid = name.length > 0;

  return (
    <Modal show={isShowing} onHide={handleClose}>
      <Modal.Header closeButton closeVariant='white'>
        <Modal.Title>New counter</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className='mb-3'>
            <Form.Label>Name</Form.Label>
            <Form.Control value={name} spellCheck={false} onChange={(input) => setName(input.target.value)} />
          </Form.Group>
          <Row className='mb-3'>
            <Form.Group as={Col}>
              <Form.Label>Start value</Form.Label>
              <Form.Control value={amount} onChange={(input) => setAmount(parseInt(input.target.value))} />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Increments</Form.Label>
              <Form.Control value={increments} onChange={(input) => setIncrements(parseInt(input.target.value))} />
              <Form.Text>Value increase when pressing "+"</Form.Text>
            </Form.Group>
          </Row>
          <Row className='mb-3'>
            <Form.Label>Color</Form.Label>
            <div key='inline-radio'>
              {
                colors.map((option) =>
                  <ColorRadioButton
                    key={option}
                    color={option}
                    isChecked={option === color}
                    onChange={setColor}
                  />)
              }
            </div>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-secondary' onClick={handleClose}>Close</Button>
        <Button variant='outline-primary' disabled={!isDataValid} onClick={handleSubmit}>Create</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateCounterModal;
