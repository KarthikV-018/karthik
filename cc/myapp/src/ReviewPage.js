import React, { useState } from 'react';
import './ReviewPage.css'; // Optional: Add some styles

const ReviewPage = ({ bookings, onAddReview }) => {
  const [selectedBooking, setSelectedBooking] = useState('');
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedBooking || rating === 0 || !review) {
      alert('Please fill out all fields');
      return;
    }

    // Call the parent function to store the review
    onAddReview({ bookingId: selectedBooking, rating, review });

    // Show confirmation message
    setConfirmationMessage('Review submitted successfully!');
    
    // Clear the form
    setSelectedBooking('');
    setRating(0);
    setReview('');

    // Hide confirmation message after a few seconds
    setTimeout(() => setConfirmationMessage(''), 3000);
  };

  return (
    <div className="review-page-container">
      <h2>Leave a Review</h2>
      {confirmationMessage && <p className="confirmation-message">{confirmationMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Select Booking:</label>
          <select
            value={selectedBooking}
            onChange={(e) => setSelectedBooking(e.target.value)}
            required
          >
            <option value="">--Select a Booking--</option>
            {bookings.map((booking, index) => (
              <option key={index} value={index}>
                {booking.vehicleType} - {booking.serviceType} on {booking.date}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Rating:</label>
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            min="1"
            max="5"
            required
          />
        </div>
        <div>
          <label>Review:</label>
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Write your review here"
            required
          />
        </div>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default ReviewPage;
