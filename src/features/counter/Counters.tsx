import React, { useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import './Counter.scss';
import Counter from './Counter';
import EditCounterModal from './EditCounterModal';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { reorder, selectCounterIds } from './counterSlice';

const Counters = () => {
  const counterIds = useAppSelector(selectCounterIds);
  const [selectedId, setSelectedId] = useState('');
  const [showEditModal, setShowEditModal] = useState(false);
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

  if (counterIds.length === 0) {
    return (
      <Container className='no-counters-parent'>
        <Card className='text-center'>
          <Card.Body>
            <Card.Title>No counters found!</Card.Title>
            <Card.Text>
              There does not seem to be any counters saved
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
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
