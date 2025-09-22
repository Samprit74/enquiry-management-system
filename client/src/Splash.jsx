import React, { useEffect, useState } from "react";
import "./Splash.css";

const Splash = ({ onFinish }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Fade out starts after 4.5s
    const fadeTimer = setTimeout(() => setFadeOut(true), 4500);
    // Transition to Enquery after 5s
    const timer = setTimeout(() => onFinish(), 5000);
    return () => {
      clearTimeout(timer);
      clearTimeout(fadeTimer);
    };
  }, [onFinish]);

  return (
    <div className={`splash-container ${fadeOut ? "fade-out" : ""}`}>
      <div className="animated-background"></div>
      <div className="splash-content">
        <h1 className="tagline">Welcome to Enquiry Management System</h1>
        <p className="subtitle">Organize your enquiries efficiently and smoothly</p>
      </div>
    </div>
  );
};

export default Splash;
