import React, { useState, useCallback } from 'react';
import { Router, Location, navigate } from '@reach/router'
import posed, { PoseGroup } from 'react-pose';
import Header from './components/Header';
import RulesModal from './components/RulesModal';
import StartScreen from './pages/StartScreen';
import GamePlay from './pages/GamePlay';

// Route with transitions
const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 50, beforeChildren: 300 },
  exit: { opacity: 0 }
});

const PosedRouter = ({ className, children }) => (
  <Location>
    {({ location }) => (
      <PoseGroup className={className}>
        <RouteContainer key={location.key}>
          <Router location={location}>{children}</Router>
        </RouteContainer>
      </PoseGroup>
    )}
  </Location>
);

function App() {
  const [score, setScore] = useState(0);

  const increaseScore = useCallback(() => setScore(prev => prev + 1), []);
  const decreaseScore = useCallback(() => setScore(prev => prev - 1), []);

  // navigate to GamePlay screen
  const handleSelection = useCallback(selection => navigate(`/game/${selection}`), []);


  return (
    <div className='min-h-screen pt-16 flex flex-col items-center bg-radial-t-background'>
      <Header score={score} />

      <PosedRouter className='flex flex-1 items-center'>
        <StartScreen path='/' onSelect={handleSelection} />
        <GamePlay path='/game/:userSelection' onWin={increaseScore} onLose={decreaseScore} />
      </PosedRouter>


      <div className='w-full flex justify-end mb-6 mr-10'>
        <RulesModal />
      </div>
    </div>
  );
}

export default App;
