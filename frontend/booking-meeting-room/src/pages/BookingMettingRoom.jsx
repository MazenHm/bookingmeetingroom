import React from "react";
import "../styles/BookingMettingRoom.css";
const BookingMettingRoom = () => {
  return (
    <div className="booking">
      <div className="booking-container">
        <h1 className="text-center">Booking Meeting Room</h1>
        <div className="booking-form">
          <div className="d-flex flex-column mb-3">
            <label for="options">Available rooms</label>
            <select id="options" name="options">
              <option value="option1" disabled selected>
                Room Name
              </option>
              <option value="option2">Option 2</option>
            </select>
          </div>
          <input type="number" placeholder="Duration" className="mb-5" />
          <button className="mb-2">CONTINUE</button>
        </div>
      </div>
    </div>
  );
};

export default BookingMettingRoom;
