import React, { useState } from 'react';
import './BookingList.css';

const BookingList = ({ bookings, onCancelBooking }) => {
  const [cancellationMessage, setCancellationMessage] = useState('');

  const handleCancel = (index) => {
    onCancelBooking(index); // Remove the booking
    setCancellationMessage('Service cancelled successfully!');

    // Clear the message after 3 seconds
    setTimeout(() => {
      setCancellationMessage('');
    }, 3000);
  };

  return (
    <div className="booking-list-container">
      <h2>Booked Services</h2>
      {cancellationMessage && (
        <p className="cancellation-message">{cancellationMessage}</p>
      )}
      {bookings.length === 0 ? (
        <p>No services booked yet.</p>
      ) : (
        <ul className="booking-list">
          {bookings.map((booking, index) => (
            <li key={index}>
              <span>{booking.vehicleType}</span> - <span>{booking.serviceType}</span>
              <span className="booking-date"> on {booking.date}</span>
              <button className="cancel-button" onClick={() => handleCancel(index)}>
                Cancel
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookingList;
