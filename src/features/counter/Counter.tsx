import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import './Counter.scss';
import { increment, selectCounterById } from './counterSlice';

type CounterProps = {
  id: string,
  onEdit?: (id: string) => void,
}

const Counter = ({ id, onEdit }: CounterProps) => {
  const dispatch = useAppDispatch();
  const counter = useAppSelector(state => selectCounterById(state, id));
  if (counter === undefined) {
    return null;
  }

  const { name, amount, increments, color } = counter;

  const handleEdit = () => onEdit && onEdit(id);

  const handleIncrement = () => dispatch(increment({id, changes: { amount: amount + increments }}));

  return (
    <Row className={`counter ${color} g-1`}>
      <Col xs={10}>
        <Row>
          <Col sm>
            <p className='fs-4 label' onClick={handleEdit}>{name}</p>
          </Col>
          <Col sm='auto'>
            <p className='text-sm-end amount'>{amount}</p>
          </Col>
        </Row>
      </Col>
      <Col>
        <p className='text-center increase' onClick={handleIncrement}>+</p>
      </Col>
    </Row>
  );
}

export default Counter;
