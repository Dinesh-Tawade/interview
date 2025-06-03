import React from 'react';
import { BiBell } from 'react-icons/bi';

const Navbar = () => {
  return (
    <nav className="px-4 py5 border-bottom bg-white d-flex justify-content-between align-items-center shadow-sm">
      {/* Left Section */}
      <div className="d-flex align-items-center gap-3">
        <img
          src="https://media.9curry.com/uploads/organization/image/388/moil-limited.png"
          alt="MOIL Logo"
          style={{ height: '40px', width: '40px', borderRadius: '50%' }}
        />
        <div>
          <div style={{ color: '#F25C05', fontWeight: 'bold', fontSize: '18px' }}>एक अटूट बंधन</div>
          <div className="text-muted" style={{ fontSize: '13px' }}>Ex-Employee Portal</div>
        </div>
      </div>

      {/* Right Section */}
      <div className="d-flex align-items-center gap-3">
        {/* Notification Bell */}
        <div
          className="rounded-circle d-flex justify-content-center align-items-center"
          style={{
            height: '35px',
            width: '35px',
            backgroundColor: '#e6e9ff',
          }}
        >
          <BiBell size={20} color="#5a5a5a" />
        </div>

        {/* Profile & Info */}
        <div className="d-flex align-items-center gap-2">
          {/* Avatar */}
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="Profile"
            style={{ height: '40px', width: '40px', borderRadius: '50%' }}
          />
          <div>
            <div
              className="px-3 py-1 rounded-pill text-white"
              style={{ backgroundColor: '#3a3c8f', fontSize: '12px' }}
            >
              Employee No: XXXXX
            </div>
            <div style={{ fontWeight: 'bold' }}>XXXXXXXXXX</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
