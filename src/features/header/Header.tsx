import React, { useState } from 'react';
import { Button, Container, Navbar } from 'react-bootstrap';
import './Header.scss';
import CreateCounterModal from '../counter/CreateCounterModal';

const Header = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);

  const handleShow = () => setShowCreateModal(true);
  const handleHide = () => setShowCreateModal(false);

  return (
    <>
      <Navbar sticky='top' variant='dark'>
        <Container>
          <Navbar.Brand>Counter</Navbar.Brand>
          <Button variant='outline-light' onClick={handleShow}>Create new</Button>
        </Container>
      </Navbar>
      <CreateCounterModal isShowing={showCreateModal} onHide={handleHide} />
    </>
  );
}

export default Header;
