import React from 'react';
import {
  FaHome,
  FaUser,
  FaUsers,
  FaFileAlt,
  FaRupeeSign,
  FaBullhorn,
  FaCommentDots,
  FaSignOutAlt,
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div
      className="text-black d-flex flex-column justify-content-between position-relative margin-top-5"
      style={{
        width: '250px',
        height: '80vh',
        background: 'linear-gradient(180deg, #4b55c3 0%, #6b70d6 100%)',
        borderTopRightRadius: '20px',
        borderBottomRightRadius: '20px',
        padding: '20px',
        overflow: 'hidden',
      }}
    >
      {/* Background Logo (Watermark style) */}
      <img
        src="https://media.9curry.com/uploads/organization/image/388/moil-limited.png"
        alt="MOIL Logo"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: 0.08,
          width: '80%',
          zIndex: 0,
        }}
      />

      {/* Menu */}
      <div className="d-flex flex-column gap-3 position-relative" style={{ zIndex: 1 }}>
        <SidebarLink to="/" icon={<FaHome />} label="Home" />
        <SidebarLink to="/my-details" icon={<FaUser />} label="My Details" />
        <SidebarLink to="/dependents" icon={<FaUsers />} label="Dependents Details" />
        <SidebarLink to="/life-certificates" icon={<FaFileAlt />} label="Life Certificates" hasArrow />
        <SidebarLink to="/final-settlements" icon={<FaRupeeSign />} label="Final Settlements" />
        <SidebarLink to="/circulars" icon={<FaBullhorn />} label="Circulars" />
        <SidebarLink to="/grievance" icon={<FaCommentDots />} label="Grievance" badge="1" />
      </div>

      {/* Logout */}
      <div className="text-center position-relative" style={{ zIndex: 1 }}>
        <button
          className="btn"
          style={{
            backgroundColor: '#f25c05',
            color: 'white',
            width: '100%',
            borderRadius: '10px',
            fontWeight: 'bold',
          }}
        >
          Log Out <FaSignOutAlt className="ms-2" />
        </button>
      </div>
    </div>
  );
};

// Reusable sidebar item component
const SidebarLink = ({ to, icon, label, hasArrow, badge }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `d-flex align-items-center justify-content-between px-3 py-2 rounded text-decoration-none ${
        isActive ? 'bg-white bg-opacity-25' : ''
      }`
    }
    style={{ cursor: 'pointer', color: 'white' }}
  >
    <div className="d-flex align-items-center gap-2">
      {icon}
      <span>{label}</span>
    </div>
    <div className="d-flex align-items-center gap-1">
      {badge && (
        <span
          className="badge rounded-circle bg-danger"
          style={{ fontSize: '10px', minWidth: '16px', height: '16px', padding: 0 }}
        >
          {badge}
        </span>
      )}
      {hasArrow && <span style={{ fontSize: '12px' }}>{'>'}</span>}
    </div>
  </NavLink>
);

export default Sidebar;