import React, { useState } from 'react';
import "./Booking.css";

function Booking() {
  const [fullname, setfullname] = useState('');
  const [contact, setcontact] = useState('');
  const [email, setemail] = useState('');
  const [destination, setdestination] = useState(null);
  const [customDestination, setCustomDestination] = useState('');
  const [customPrice, setCustomPrice] = useState('');
  const [days, setDays] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const destinations = [
    { title: 'Taj Mahal', price: 5000 },
    { title: 'Harmandir Sahib', price: 1500 },
    { title: 'Gateway of India', price: 1200 },
    { title: 'Manikarnika Ghat', price: 800 },
    { title: 'Unveiling India', price: 5000 },
    { title: 'Eiffel Tower', price: 15000 },
    { title: 'Buckingham Palace', price: 12000 },
    { title: 'Sacré-Cœur', price: 8000 },
    { title: 'Sydney Opera House', price: 15000 },
    { title: 'Colosseum', price: 5000 },
    { title: 'Statue of Liberty', price: 12000 },
    { title: 'Great Wall of China', price: 2000 },
    { title: 'Mount Fuji', price: 7000 },
    { title: 'Machu Picchu', price: 10000 },
    { title: 'Chichen Itza', price: 4000 },
    { title: 'Pyramids of Giza', price: 12000 },
    { title: 'Stonehenge', price: 8000 },
    { title: 'Acropolis of Athens', price: 9000 },
    { title: 'Angkor Wat', price: 15000 },
    { title: 'Petra', price: 11000 }
  ];

  const handleDestinationChange = (e) => {
    const selectedDestination = destinations.find(
      (dest) => dest.title === e.target.value
    );
    setdestination(selectedDestination || null);
    setCustomDestination(''); // Clear custom destination when selecting a predefined one
    setCustomPrice(''); // Clear custom price when selecting a predefined one
  };

  const handleCustomDestinationChange = (e) => {
    setCustomDestination(e.target.value);
    setdestination(null); // Clear destination when entering custom destination
  };

  const handleCustomPriceChange = (e) => {
    setCustomPrice(e.target.value);
  };

const sendData = async (e) => {
    e.preventDefault();

    // Get the token from localStorage (or wherever you are storing it)
    const token = localStorage.getItem('token'); // or use a state/context to get the token

    // If the token is not available, show an error or redirect to login
    if (!token) {
        console.log('No token found, please log in');
        return;
    }

    const totalCost = (destination?.price || customPrice) * days;
    
    try {
      // console.log("line 71",token.toString())
      // console.log("line 72",JSON.parse(token))
        const response = await fetch('http://holiday-backend-delta.vercel.app/api/booking/bookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
                fullname,
                contact,
                email,
                destination: destination?.title || customDestination,
                price: destination?.price || customPrice,
                days,
                totalCost,
            }),
        });

        const data = await response.json();

        if (response.ok) {
            console.log('Booking successful:', data);
        } else {
            console.log('Booking failed:', data.message || data);
        }
    } catch (error) {
        console.error('Error during booking:', error);
    }
};


  const isCustomDestinationSelected = customDestination.trim() !== '';

  // Avoid duplicating custom destination in the predefined list
  const filteredDestinations = destinations.filter(
    (dest) => dest.title.toLowerCase() !== customDestination.toLowerCase()
  );

  return (
    <center>
      <div>
        <form
          onSubmit={sendData}
          className="booking-form"
        >
          <label className="form-label">Full Name:</label>
          <input
            type="text"
            placeholder="Enter the name"
            onChange={(e) => setfullname(e.target.value)}
            className="form-input"
          />

          <label className="form-label">Contact No:</label>
          <input
            type="text"
            onChange={(e) => setcontact(e.target.value)}
            className="form-input"
          />

          <label className="form-label">E-mail:</label>
          <input
            type="email"
            onChange={(e) => setemail(e.target.value)}
            className="form-input"
          />

          <label className="form-label">Select Destination:</label>
          <select
            onChange={handleDestinationChange}
            className="form-input"
            disabled={isCustomDestinationSelected}
          >
            <option value="">Select a destination</option>
            {filteredDestinations.map((dest, index) => (
              <option key={index} value={dest.title}>
                {dest.title} - ₹{dest.price}
              </option>
            ))}
          </select>

          {destination && (
            <div className="destination-info">
              <h3>{destination.title} - ₹{destination.price}</h3>
            </div>
          )}

          <label className="form-label">Or Enter Custom Destination:</label>
          <input
            type="text"
            placeholder="Enter custom destination"
            onChange={handleCustomDestinationChange}
            value={customDestination}
            disabled={destination !== null}
            className="form-input"
          />

          <label className="form-label">Custom Destination Price:</label>
          <input
            type="number"
            placeholder="Enter custom price"
            onChange={handleCustomPriceChange}
            value={customPrice}
            disabled={destination !== null}
            className="form-input"
          />

          <label className="form-label">Number of Days:</label>
          <input
            type="number"
            value={days}
            min="1"
            onChange={(e) => setDays(e.target.value)}
            className="form-input"
          />

          <div className="price-summary">
            <h3>
              Total Price: ₹
              {(destination?.price || customPrice) * days}
            </h3>
          </div>

          {error && <div className="error-message">{error}</div>}

          <button
            type="submit"
            className="submit-button"
            disabled={loading}
          >
            {loading ? 'Processing...' : 'Confirm Booking'}
          </button>
        </form>
      </div>
    </center>
  );
}

export default Booking;
