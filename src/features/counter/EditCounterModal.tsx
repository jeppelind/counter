import React from 'react';
import { Modal } from 'react-bootstrap';

type EditCounterModalProps = {
  id: string,
  isShowing: boolean,
  onHide: () => void,
}

const EditCounterModal = ({ id, isShowing, onHide }: EditCounterModalProps) => (
  <Modal show={isShowing} onHide={onHide}>
    <Modal.Header closeButton closeVariant='white'>
      <Modal.Title>Edit counter</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>{id}</p>
    </Modal.Body>
  </Modal>
);

export default EditCounterModal;
