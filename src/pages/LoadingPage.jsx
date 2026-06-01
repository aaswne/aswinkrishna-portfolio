import React, { useEffect, useState } from "react";
import "./LoadingPage.css";

function LoadingPage({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);

          setTimeout(() => {
            onComplete();
          }, 300);

          return 100;
        }

        return prev + 1;
      });
    }, 20);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="loading-container">
      <h1 className="logo1">ASWIN KRISHNA</h1>

      <div className="progress-wrapper">
        <div
          className="progress-bar"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="percentage">{progress}%</p>
    </div>
  );
}

export default LoadingPage;