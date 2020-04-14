import React, { useState } from 'react';
import Header from './components/Header';
import ShapesContainer from './containers/ShapesContainer';

function App() {
  const [score, setScore] = useState(0);

  return (
    <div className='min-h-screen pt-16 flex flex-col items-center bg-radial-t-background'>
      <Header score={score} />

      <ShapesContainer />

      {/**
      <footer className='app-footer'>
        <div className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">Frontend Mentor</a>.
          Coded by <a href="#">Antwan Sherif</a>.
        </div>
      </footer>
       */}
    </div>
  );
}

export default App;
