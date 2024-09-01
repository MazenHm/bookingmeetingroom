import React from "react";
import "../styles/BookingHistory.css";
import { Link } from "react-router-dom";
import SideBar from "../components/SideBar";

const BookingHistory = () => {
  return (
    <div className="history-container">
      <SideBar />
      <div className="booking-history">
        <div className="booking-header">
          <h1>Bookings</h1>
          <div className="new-booking-button">
            <Link to="/booking">
              <button className="add-booking-btn">
                <i className="fas fa-plus"></i> New Booking
              </button>
            </Link>
          </div>
        </div>
        <div className="search-bar">
          <i class="fas fa-search"></i>
          <input type="text" placeholder="Search" />
        </div>
        <table className="booking-table">
          <thead>
            <tr>
              <th>Nbr°</th>
              <th>Room Name</th>
              <th>Attendance</th>
              <th>Start</th>
              <th>End</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01</td>
              <td>Room A</td>
              <td>20</td>
              <td>11 DEC 14PM</td>
              <td>11 DEC 14PM</td>
              <td>
                <i className="fas fa-trash"></i>
              </td>
            </tr>
            <tr>
              <td>01</td>
              <td>Room A</td>
              <td>20</td>
              <td>11 DEC 14PM</td>
              <td>11 DEC 14PM</td>
              <td>
                <i className="fas fa-trash"></i>
              </td>
            </tr>
            <tr>
              <td>01</td>
              <td>Room A</td>
              <td>20</td>
              <td>11 DEC 14PM</td>
              <td>11 DEC 14PM</td>
              <td>
                <i className="fas fa-trash"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingHistory;
