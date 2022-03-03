import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './Counter.scss';

type CounterProps = {
  id: string,
  onEdit?: (id: string) => void,
}

const Counter = ({ id, onEdit }: CounterProps) => {
  const handleEdit = () => onEdit && onEdit(id);

  return (
    <Row className='counter g-1'>
      <Col xs={10}>
        <Row>
          <Col sm>
            <p className='fs-4 label' onClick={handleEdit}>Name</p>
          </Col>
          <Col sm='auto'>
            <p className='text-sm-end amount'>200</p>
          </Col>
        </Row>
      </Col>
      <Col>
        <p className='text-center increase'>+</p>
      </Col>
    </Row>
  );
}

export default Counter;
