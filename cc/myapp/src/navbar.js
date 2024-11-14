import React from 'react';

const Navbar = ({ currentView, setView }) => {
  return (
    <nav style={{ backgroundColor: '#333', padding: '10px' }}>
      <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'space-around', margin: 0, padding: 0 }}>
        <li>
          <button
            style={{ color: '#fff', background: 'none', border: 'none', cursor: 'pointer' }}
            onClick={() => setView('home')}
          >
            Home
          </button>
        </li>
        <li>
          <button
            style={{ color: '#fff', background: 'none', border: 'none', cursor: 'pointer' }}
            onClick={() => setView('book')}
          >
            Book Service
          </button>
        </li>
        <li>
          <button
            style={{ color: '#fff', background: 'none', border: 'none', cursor: 'pointer' }}
            onClick={() => setView('list')}
          >
            Booking List
          </button>
        </li>
        <li>
          <button
            style={{ color: '#fff', background: 'none', border: 'none', cursor: 'pointer' }}
            onClick={() => setView('progress')}
          >
            Progress Tracking
          </button>
        </li>
        <li>
          <button
            style={{ color: '#fff', background: 'none', border: 'none', cursor: 'pointer' }}
            onClick={() => setView('reviews')}
          >
            Reviews
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
