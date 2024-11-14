import React from 'react'; // Removed useState since it's not used
import './ProgressPage.css'; // Optional: Add styles for better UI

const ProgressPage = ({ bookings, onUpdateStatus }) => {
  return (
    <div className="progress-page-container">
      <h2>Service Progress Tracking</h2>
      {bookings.length === 0 ? (
        <p>No services to track.</p>
      ) : (
        <ul className="progress-list">
          {bookings.map((booking, index) => (
            <li key={index} className="progress-item">
              <div>
                <strong>{booking.vehicleType}</strong> - {booking.serviceType} 
                <span className="booking-date"> on {booking.date}</span>
              </div>
              <div>
                <label>Status: </label>
                <select
                  value={booking.status}
                  onChange={(e) => onUpdateStatus(index, e.target.value)}
                >
                  <option value="Scheduled">Scheduled</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProgressPage;
