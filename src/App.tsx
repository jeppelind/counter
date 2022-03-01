import React from 'react';
import './App.scss';

const NavBar = () => (
  <nav className='navbar navbar-dark'>
    <div className='container'>
      <span className='navbar-brand mb-0 h1'>Count</span>
      <button className='btn btn-outline-light'>New counter</button>
    </div>
  </nav>
);

const Counter = () => {
  return (
    <div className='row g-1 counter'>
      <div className='col-10'>
        <div className='row'>
          <div className='col-sm align-self-start'>
            <p className='fs-4 label'>Name</p>
          </div>
          <div className='col-sm align-self-center'>
            <p className='text-sm-end amount'>200</p>
          </div>
        </div>
      </div>
      <div className='col align-self-center'>
        <div className='align-self-center'>
          <p className='text-center increase'>+</p>
        </div>
      </div>
    </div>
  );
}

const App = () => {
  return (
    <>
      <NavBar />
      <div className='container-lg counter-parent'>
        <Counter />
        <Counter />
        <Counter />
        <Counter />
        <Counter />
        <Counter />
      </div>
    </>
  );
}

export default App;
