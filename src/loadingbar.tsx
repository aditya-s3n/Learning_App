import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { ProgressBar } from 'react-bootstrap';

function LoadingBar() {
  const [progress, setProgress] = useState(0);
  const [showProgressBar, setShowProgressBar] = useState(false);

  useEffect(() => {
    setShowProgressBar(true);
    const intervalId = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(intervalId);
          setShowProgressBar(false);
          return prevProgress;
        }
        return prevProgress + 10;
      });
    }, 1000);
  }, []);

  return (
    <div>
      {showProgressBar && <ProgressBar now={progress} animated />}
    </div>
  );
}

export default LoadingBar;
