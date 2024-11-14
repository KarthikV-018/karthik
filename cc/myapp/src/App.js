import React, { useState } from 'react';
import Header from './header';
import Navbar from './navbar';
import ServiceForm from './form';
import BookingList from './list';
import LoginPage from './LoginPage';
import RegistrationPage from './RegistrationPage';
import ReviewPage from './ReviewPage';
import ProgressPage from './ProgressPage'; // Import ProgressPage

function App() {
  const [currentView, setCurrentView] = useState('login');
  const [bookings, setBookings] = useState([]);

  const addBooking = (booking) => {
    setBookings([...bookings, { ...booking, status: 'Scheduled' }]);
  };

  const updateBookingStatus = (index, status) => {
    const updatedBookings = bookings.map((booking, i) =>
      i === index ? { ...booking, status } : booking
    );
    setBookings(updatedBookings);
  };

  // New function to cancel a booking
  const cancelBooking = (index) => {
    const updatedBookings = bookings.filter((_, i) => i !== index);
    setBookings(updatedBookings);
  };

  const renderView = () => {
    switch (currentView) {
      case 'login':
        return (
          <LoginPage 
            onLoginSuccess={() => setCurrentView('home')} 
            onRegisterClick={() => setCurrentView('register')}
          />
        );
      case 'register':
        return <RegistrationPage onRegisterSuccess={() => setCurrentView('login')} />;
      case 'home':
        return <h2>Welcome to the Vehicle Service Booking System</h2>;
      case 'book':
        return <ServiceForm onAddBooking={addBooking} />;
      case 'list':
        return <BookingList bookings={bookings} onCancelBooking={cancelBooking} />;
      case 'reviews':
        return <ReviewPage bookings={bookings} onAddReview={() => {}} />;
      case 'progress':
        return <ProgressPage bookings={bookings} onUpdateStatus={updateBookingStatus} />;
      default:
        return <h2>Welcome to the Vehicle Service Booking System</h2>;
    }
  };

  return (
    <div className="App">
      {currentView !== 'login' && currentView !== 'register' && (
        <>
          <Header />
          <Navbar currentView={currentView} setView={setCurrentView} />
        </>
      )}
      <div style={{ padding: '20px' }}>
        {renderView()}
      </div>
    </div>
  );
}

export default App;
