import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function ToggleText() {
  
  const [TextVisible, login] = useState(true);

  
  const handleToggle = () => {
    login((text) => !text);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <button onClick={handleToggle}>
        {TextVisible ? "Hide Text" : "Show Text"}
      </button>
      {TextVisible && (
        <p style={{ marginTop: "10px" }}>Hello! This text is toggled.</p>
      )}
    </div>
  );
}

export default ToggleText;