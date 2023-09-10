import React, { useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { FaCircleInfo } from 'react-icons/fa6';
import './Counter.scss';
import Counter from './Counter';
import EditCounterModal from './EditCounterModal';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { reorder, selectCounterIds } from './counterSlice';
import CreateCounterModal from './CreateCounterModal';

const Counters = () => {
  const counterIds = useAppSelector(selectCounterIds);
  const [selectedId, setSelectedId] = useState('');
  const [showEditModal, setShowEditModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const dispatch = useAppDispatch();

  const handleDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (destination && destination.index !== source.index) {
      dispatch(reorder({ oldIndex: source.index, newIndex: destination.index }));
    }
  };

  const handleShowEdit = (id: string) => {
    setSelectedId(id);
    setShowEditModal(true);
  }

  const handleHideEdit = () => setShowEditModal(false);
  const handleShowCreate = () => setShowCreateModal(true);
  const handleHideCreate = () => setShowCreateModal(false);

  if (counterIds.length === 0) {
    return (
      <>
        <Container className='no-counters-parent'>
          <Row className='items'>
            <FaCircleInfo className='icon' />
            <h4>No counters found</h4>
            <p>Create new one to get started.</p>
            <Button variant='outline-primary' size='lg' onClick={handleShowCreate}>Add counter</Button>
          </Row>
        </Container>
        <CreateCounterModal isShowing={showCreateModal} onHide={handleHideCreate} />
      </>
    )
  }

  return (
    <>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId='droppable'>
          {(provided) => (
            <Container
              className='counter-parent'
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {
                counterIds.map((id, index) =>
                  <Counter key={id} id={id.toString()} index={index} onEdit={handleShowEdit} />)
              }
              {provided.placeholder}
            </Container>
          )}
        </Droppable>
      </DragDropContext>
      <EditCounterModal id={selectedId} isShowing={showEditModal} onHide={handleHideEdit} />
    </>
  );
}

export default Counters;
