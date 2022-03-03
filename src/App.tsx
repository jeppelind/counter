import React from 'react';
import './App.scss';
import Counters from './features/counter/Counters';
import Header from './features/header/Header';

// const NavBar = () => {
//   const [showModal, setShowModal] = useState(false);
//   const handleShow = () => setShowModal(true);
//   const handleHide = () => setShowModal(false);

//   return (
//     <>
//       <Navbar sticky='top' variant='dark'>
//         <Container>
//           <Navbar.Brand>Counter</Navbar.Brand>
//           <Button variant='outline-light' onClick={handleShow}>Create new</Button>
//         </Container>
//       </Navbar>
//       <CreateCounterModal isShowing={showModal} onHide={handleHide} />
//     </>
//   );
// }

// type CounterProps = {
//   id: string,
//   onEdit?: (id: string) => void,
// }

// const Counter = ({ id, onEdit }: CounterProps) => {
//   const handleEdit = () => onEdit && onEdit(id);

//   return (
//     <Row className='counter g-1'>
//       <Col xs={10}>
//         <Row>
//           <Col sm>
//             <p className='fs-4 label' onClick={handleEdit}>Name</p>
//           </Col>
//           <Col sm='auto'>
//             <p className='text-sm-end amount'>200</p>
//           </Col>
//         </Row>
//       </Col>
//       <Col>
//         <p className='text-center increase'>+</p>
//       </Col>
//     </Row>
//   );
// }

// type CreateCounterModalProps = {
//   isShowing: boolean,
//   onHide: () => void,
// }

// const CreateCounterModal = ({ isShowing, onHide }: CreateCounterModalProps) => {
//   return (
//     <Modal show={isShowing} onHide={onHide}>
//       <Modal.Header closeButton closeVariant='white'>
//         <Modal.Title>New counter</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <p>Menhehade</p>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button variant='outline-secondary' onClick={onHide}>Close</Button>
//         <Button variant='outline-primary'>Create</Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }

// type EditCounterModalProps = {
//   id: string,
//   isShowing: boolean,
//   onHide: () => void,
// }

// const EditCounterModal = ({ id, isShowing, onHide }: EditCounterModalProps) => (
//   <Modal show={isShowing} onHide={onHide}>
//     <Modal.Header closeButton closeVariant='white'>
//       <Modal.Title>Edit counter</Modal.Title>
//     </Modal.Header>
//     <Modal.Body>
//       <p>{id}</p>
//     </Modal.Body>
//   </Modal>
// );

// const Counters = () => {
//   const fakeCounters = ['1', '2', '3', '4', '5', '6', '7'];
//   const [selectedId, setSelectedId] = useState('');
//   const [showEditModal, setShowEditModal] = useState(false);

//   const handleShowEdit = (id: string) => {
//     console.log(`Edit counter ${id}`);
//     setSelectedId(id)
//     setShowEditModal(true);
//   }

//   const handleHideEdit = () => setShowEditModal(false);

//   return (
//     <>
//       <Container className='counter-parent'>
//         {
//           fakeCounters.map((counter) => <Counter key={counter} id={counter} onEdit={handleShowEdit} />)
//         }
//       </Container>
//       <EditCounterModal id={selectedId} isShowing={showEditModal} onHide={handleHideEdit} />
//     </>
//   );
// }

const App = () => (
  <>
    <Header />
    <Counters />
  </>
);

export default App;
