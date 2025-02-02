import React, { useState, useRef } from 'react';
import video from './heart-loop.mp4';
import soundOnIcon from './sound-off.png';
import soundOffIcon from './sound-on.png';
import './App.css';

function App() {
  const [isMuted, setIsMuted] = useState(true);
  const missionVisionRef = useRef(null); // Ref for the container

  const toggleSound = () => {
    setIsMuted(!isMuted);
  };

  const scrollToMissionVision = () => {
    missionVisionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="App">
      <div className="header"> {/* Container for title and menu */}
        <div className="company-name">
          Brave Heart
        </div>

        <div className="menu">
          <button className="menu-item" onClick={scrollToMissionVision}>About</button>
          <a
            href="https://www.paulovalente.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="menu-item contact-link"
          >
          Contact Info
          </a>
        </div>
      </div>


      <video
        src={video}
        autoPlay
        muted={isMuted}
        loop
        className="video-background"
      />

      <button onClick={toggleSound} className="sound-button">
        <img
          src={isMuted? soundOffIcon: soundOnIcon}
          alt={isMuted? 'Sound off': 'Sound on'}
          className="sound-icon"
        />
      </button>

      <div className="mission-vision-container" ref={missionVisionRef}> {/* New container */}
        <div className="mission">
          <h2 className="section-title">Mission</h2> {/* Mission title */}
          <p>
            To empower clients with insightful analysis and strategic guidance,
            driving growth, mitigating risk, and optimizing organizational
            effectiveness through the innovative application of technology and
            robust product development, with a focus on Artificial Intelligence,
            Identity Security, Hardware, IoT, and Telecommunications.
          </p>
        </div>
        <div className="vision">
          <h2 className="section-title">Vision</h2> {/* Vision title */}
          <p>
            To be a recognized leader in providing cutting-edge technology
            solutions and product development expertise, empowering our clients
            to achieve their strategic objectives and shape the future of their
            industries.
          </p>
        </div>
      </div>
      <div className="values-container"> {/* New Values container */}
        <h2 className="section-title">Values</h2>
        <ul> {/* Use an unordered list for the values */}
          <li>• Client Focus: Prioritizing client needs and delivering exceptional service.</li>
          <li>• Excellence: Striving for continuous improvement and exceeding expectations.</li>
          <li>• Innovation: Continuously exploring cutting-edge technologies to deliver state-of-the-art solutions.</li>
          <li>• Integrity: Maintaining the highest ethical standards in all interactions.</li>
          <li>• Collaboration: Working closely with clients and partners to achieve shared goals.</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
