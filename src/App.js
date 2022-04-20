import React from 'react';

import { AboutUs, Footer, Header, Intro } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <Intro />
    <Footer />
  </div>
);

export default App;
