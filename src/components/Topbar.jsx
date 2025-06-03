import React, { useState, useEffect } from 'react';
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";

const Topbar = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('app-theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.className = savedTheme;
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.className = newTheme;
    localStorage.setItem('app-theme', newTheme);
  };

  return (
    <div
      className={`d-flex justify-content-between align-items-center px-4 py-2 border-bottom shadow-sm ${
        theme === 'light' ? 'bg-white text-dark' : 'bg-dark text-light'
      }`}
    >
      {/* Left Section */}
      <div className="d-flex align-items-center gap-3">
        <img
          src="https://media.9curry.com/uploads/organization/image/388/moil-limited.png"
          alt="MOIL Logo"
          style={{ height: '30px', borderRadius: '50%' }}
        />
        <strong className="fs-6">MOIL LIMITED</strong>
        <span className="fw-bold" style={{ color: '#28a745' }}>₹256.00</span>
        <MdOutlineKeyboardDoubleArrowUp color="#28a745" />
        <img src="/nse-icon.png" alt="NSE" style={{ height: '20px' }} />
      </div>

      {/* Right Section */}
      <div className="d-flex align-items-center gap-3">
        {/* Font Size Control */}
        <div
          className={`d-flex align-items-center rounded-pill px-3 py-1 gap-2 ${
            theme === 'light' ? 'border border-secondary' : 'border border-light'
          }`}
        >
          <button className={`btn btn-sm ${theme === 'light' ? 'btn-light' : 'btn-secondary'}`}>+</button>
          <span className="fw-bold">A</span>
          <button className={`btn btn-sm ${theme === 'light' ? 'btn-light' : 'btn-secondary'}`}>−</button>
        </div>

        {/* Theme Toggle */}
        <button
          className="btn btn-sm rounded-pill px-3 py-1"
          style={{
            backgroundColor: theme === 'light' ? '#e7f1ff' : '#343a40',
            color: theme === 'light' ? '#0d6efd' : '#f8f9fa',
            border: theme === 'light' ? '1px solid #cfe2ff' : '1px solid #adb5bd'
          }}
          onClick={toggleTheme}
        >
          {theme === 'light' ? '🌞 Light Mode' : '🌙 Dark Mode'}
        </button>

        {/* Language Switch */}
        <div className="fw-semibold">हिंदी | English</div>

        {/* Profile and Bell */}
        <div className="d-flex align-items-center gap-2">
          <i className={`bi bi-bell ${theme === 'light' ? '' : 'text-light'}`}></i>
          
         
        </div>
      </div>
    </div>
  );
};

export default Topbar;
