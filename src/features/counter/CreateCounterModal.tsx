import React from 'react';
import { Modal, Button } from 'react-bootstrap';

type CreateCounterModalProps = {
  isShowing: boolean,
  onHide: () => void;
}

const CreateCounterModal = ({ isShowing, onHide }: CreateCounterModalProps) => (
  <Modal show={isShowing} onHide={onHide}>
    <Modal.Header closeButton closeVariant='white'>
      <Modal.Title>New counter</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>Menhehade</p>
    </Modal.Body>
    <Modal.Footer>
      <Button variant='outline-secondary' onClick={onHide}>Close</Button>
      <Button variant='outline-primary'>Create</Button>
    </Modal.Footer>
  </Modal>
);

export default CreateCounterModal;
