import React from 'react';
import Header from './components/Header';
import Landing from './components/Landing';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  return (
    <div className="App">
      <Header />
      <Landing />
      <About />
      <Work />
      <Contact />
      <Resume />
    </div>
  );
}

export default App;
