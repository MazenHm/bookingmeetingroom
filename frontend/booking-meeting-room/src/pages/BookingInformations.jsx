import React from "react";
import "../styles/BookingInformations.css";
const BookingInformations = () => {
  return (
    <div className="information-container">
      <div className="d-flex align-items-center gap-2 mb-5">
        <i class="fas fa-arrow-left"></i>
        <h4>Booking Information</h4>
      </div>
      <div className="information-box">
        <h5 className="mb-5">Your Reservertion</h5>
        <div className="d-flex align-items-center justify-content-between">
          <h6>Room Name</h6>
          <p>Room A</p>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <h6>Capacity</h6>
          <p>30</p>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <h6>Duration</h6>
          <p>2 Hours</p>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <h6>Collaborators Number</h6>
          <p>25</p>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <h6>Star</h6>
          <p>15 DEC 2024 | 14PM</p>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <h6>End</h6>
          <p>15 DEC 2024 | 16PM</p>
        </div>
      </div>
    </div>
  );
};

export default BookingInformations;
