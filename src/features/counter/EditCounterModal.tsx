import React, { useCallback, useEffect, useState } from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import ColorRadioButtons from './ColorRadioButton';
import { deleteCounter, selectCounterById, updateCounter } from './counterSlice';

type EditCounterModalProps = {
  id: string,
  isShowing: boolean,
  onHide: () => void,
}

const EditCounterModal = ({ id, isShowing, onHide }: EditCounterModalProps) => {
  const dispatch = useAppDispatch();
  const counter = useAppSelector((state) => selectCounterById(state, id));
  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);
  const [increments, setIncrements] = useState(1);
  const [color, setColor] = useState('white');

  const isDataValid =
    name.length > 0 &&
    !isNaN(amount) &&
    !isNaN(increments);

  const handleSubmit = () => {
    dispatch(updateCounter({
      id,
      name,
      amount,
      increments,
      color,
    }));
    onHide();
  }

  const handleDelete = () => {
    dispatch(deleteCounter(id));
    onHide();
  }

  const handleClose = () => {
    setValuesBasedOnCounter();
    onHide();
  }

  const setValuesBasedOnCounter = useCallback(() => {
    if (counter) {
      setName(counter.name);
      setAmount(counter.amount);
      setIncrements(counter.increments);
      setColor(counter.color);
    }
  }, [counter])

  useEffect(() => {
    setValuesBasedOnCounter();
  }, [counter, setValuesBasedOnCounter]);

  if (counter === undefined) {
    return null;
  }

  return (
    <Modal show={isShowing} onHide={handleClose}>
      <Modal.Header closeButton closeVariant='white'>
        <Modal.Title>Edit counter</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className='mb-3'>
            <Form.Label>Name</Form.Label>
            <Form.Control value={name} spellCheck={false} onChange={(input) => setName(input.target.value)} />
          </Form.Group>
          <Row className='mb-3'>
            <Form.Group as={Col}>
              <Form.Label>Current value</Form.Label>
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
            <ColorRadioButtons selectedColor={color} onChange={setColor} />
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
          <Col>
            <Button variant='outline-danger' onClick={handleDelete}>Delete</Button>
          </Col>
          <Button variant='outline-secondary' onClick={handleClose}>Close</Button>
          <Button variant='outline-primary' disabled={!isDataValid} onClick={handleSubmit}>Save</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditCounterModal;
