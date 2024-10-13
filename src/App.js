import { useState } from 'react';
import video from './heart-loop.mp4';
import soundOnIcon from './sound-off.png'; // Import your sound-on icon
import soundOffIcon from './sound-on.png'; // Import your sound-off icon
import './App.css';

function App() {
  const [isMuted, setIsMuted] = useState(true);

  const toggleSound = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div className="App">

      <div style={{
        position: 'fixed',
        top: '20px',
        left: '20px',
        color: 'white',
        fontFamily: 'Roboto, sans-serif', // Or your chosen font
        fontSize: '24px', // Adjust font size as needed
        fontWeight: 'bold', // Add some weight for presence
        letterSpacing: '2px', // Adjust letter spacing for style
        backgroundColor: 'rgba(0, 0, 0, 0.3)', // Semi-transparent black background
        padding: '5px 10px', // Add some padding around the text
        borderRadius: '4px', // Optional: Add rounded corners
      }}>
        Brave Heart
      </div>

      <video
        src={video}
        autoPlay
        muted={isMuted}
        loop
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'auto',
          height: 'auto',
        }}
      />

      <button onClick={toggleSound} style={{
        position: 'fixed',
        bottom: '20px', // Adjust distance from bottom
        right: '20px',  // Adjust distance from right
        background: 'transparent', // Remove default button background
        border: 'none',          // Remove default button border
        padding: 0,              // Remove default button padding
        cursor: 'pointer',       // Show pointer cursor on hover
      }}>
        <img
          src={isMuted ? soundOffIcon : soundOnIcon}
          alt={isMuted ? 'Sound off' : 'Sound on'}
          style={{ width: '35px', height: '35px' }} // Adjust icon size as needed
        />
      </button>

      <a
        href="https://www.paulovalente.net/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          color: 'white',
          fontFamily: 'Arial, sans-serif', // Choose a minimalist font
          textDecoration: 'none', // Remove underline
        }}
      >
        Contact Info
      </a>

    </div>
  );
}

export default App;
