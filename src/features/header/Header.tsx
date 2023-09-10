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
          <Navbar.Brand>
            <img
              src='/logo192.png'
              height={30}
              alt='Counter logo'
            />
          </Navbar.Brand>
          <Button variant='outline-light' onClick={handleShow}>Add counter</Button>
        </Container>
      </Navbar>
      <CreateCounterModal isShowing={showCreateModal} onHide={handleHide} />
    </>
  );
}

export default Header;
