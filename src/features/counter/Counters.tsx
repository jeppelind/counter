import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import './Counter.scss';
import Counter from './Counter';
import EditCounterModal from './EditCounterModal';
import { useAppSelector } from '../../app/hooks';
import { selectCounterIds } from './counterSlice';

const Counters = () => {
  const counterIds = useAppSelector(selectCounterIds);
  const [selectedId, setSelectedId] = useState('');
  const [showEditModal, setShowEditModal] = useState(false);

  const handleShowEdit = (id: string) => {
    setSelectedId(id);
    setShowEditModal(true);
  }

  const handleHideEdit = () => setShowEditModal(false);

  return (
    <>
      <Container className='counter-parent'>
        {
          counterIds.map((id) => <Counter key={id} id={id.toString()} onEdit={handleShowEdit} />)
        }
      </Container>
      <EditCounterModal id={selectedId} isShowing={showEditModal} onHide={handleHideEdit} />
    </>
  );
}

export default Counters;
