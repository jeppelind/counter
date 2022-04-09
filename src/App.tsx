import React from 'react';
import './App.scss';
import Counters from './features/counter/Counters';
import Header from './features/header/Header';

const App = () => (
  <>
    <Header />
    <Counters />
  </>
);

export default App;
