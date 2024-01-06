// Welcome.js
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const Welcome = ({ onStart }) => {
  const [showWelcome, setShowWelcome] = useState(true);

  const fadeIn = useSpring({
    opacity: showWelcome ? 1 : 0,
    from: { opacity: 0 },
  });

  const handleStart = () => {
    setShowWelcome(false);
    onStart();
  };

  return (
    <animated.div style={fadeIn}>
      {showWelcome && (
        <div className="welcome-container">
          <h1>Welcome to Material website</h1>
          <p>You can download you semester notes here...</p>
          <button onClick={handleStart}>Get Started</button>
        </div>
      )}
    </animated.div>
  );
};

export default Welcome;
