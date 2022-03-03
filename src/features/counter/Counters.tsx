import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import './Counter.scss';
import Counter from './Counter';
import EditCounterModal from './EditCounterModal';

const Counters = () => {
  const fakeCounters = ['1', '2', '3'];
  const [selectedId, setSelectedId] = useState('');
  const [showEditModal, setShowEditModal] = useState(false);

  const handleShowEdit = (id: string) => {
    console.log(`Edit ${id}`);
    setSelectedId(id);
    setShowEditModal(true);
  }

  const handleHideEdit = () => setShowEditModal(false);

  return (
    <>
      <Container className='counter-parent'>
        {
          fakeCounters.map((counter) => <Counter key={counter} id={counter} onEdit={handleShowEdit} />)
        }
      </Container>
      <EditCounterModal id={selectedId} isShowing={showEditModal} onHide={handleHideEdit} />
    </>
  );
}

export default Counters;
