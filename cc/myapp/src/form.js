import React, { useState } from 'react';
import './ServiceForm.css';

const ServiceForm = ({ onAddBooking }) => {
  const [vehicleType, setVehicleType] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [date, setDate] = useState('');
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const today = new Date().toISOString().split('T')[0];

  const onSubmit = (e) => {
    e.preventDefault();

    if (!vehicleType || !serviceType || !date) {
      alert('Please fill in all fields');
      return;
    }

    onAddBooking({ vehicleType, serviceType, date });

    setConfirmationMessage('Service booked successfully!');
    setVehicleType('');
    setServiceType('');
    setDate('');

    setTimeout(() => {
      setConfirmationMessage('');
    }, 3000);
  };

  return (
    <div>
      <form className="service-form-container" onSubmit={onSubmit}>
        <div>
          <label>Vehicle Type:</label>
          <select
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
            required
          >
            <option value="">Select Vehicle Type</option>
            <option value="Car">Car</option>
            <option value="Motorcycle">Motorcycle</option>
            <option value="Truck">Truck</option>
          </select>
        </div>
        <div>
          <label>Service Type:</label>
          <select
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
            required
          >
            <option value="">Select Service Type</option>
            <option value="Oil Change">Oil Change</option>
            <option value="Tire Replacement">Tire Replacement</option>
            <option value="Brake Inspection">Brake Inspection</option>
          </select>
        </div>
        <div>
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            min={today}
            required
          />
        </div>
        <button type="submit">Book Service</button>
      </form>

      {confirmationMessage && (
        <p className="confirmation-message">{confirmationMessage}</p>
      )}
    </div>
  );
};

export default ServiceForm;
