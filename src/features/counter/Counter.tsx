import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Row, Col } from 'react-bootstrap';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import './Counter.scss';
import { increment, selectCounterById } from './counterSlice';

type CounterProps = {
  id: string,
  index: number,
  onEdit?: (id: string) => void,
}

const Counter = ({ id, index, onEdit }: CounterProps) => {
  const dispatch = useAppDispatch();
  const counter = useAppSelector(state => selectCounterById(state, id));
  if (counter === undefined) {
    return null;
  }

  const { name, amount, increments, color } = counter;

  const handleEdit = () => onEdit && onEdit(id);

  const handleIncrement = () => dispatch(increment({id, changes: { amount: amount + increments }}));

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <Row
          className={`counter ${color} g-1`}
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <Col xs={10} {...provided.dragHandleProps}>
            <Row>
              <Col sm>
                <p className='fs-4 label' onClick={handleEdit}>{name}</p>
              </Col>
              <Col sm='auto'>
                <p className='text-sm-end amount'>{amount}</p>
              </Col>
            </Row>
          </Col>
          <Col className='align-self-center'>
            <p className='text-center increase' onClick={handleIncrement}>+</p>
          </Col>
        </Row>
      )}
    </Draggable>
  );
}

export default Counter;
