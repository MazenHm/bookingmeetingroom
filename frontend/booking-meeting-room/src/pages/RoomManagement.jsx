import React, { useState } from "react";
import "../styles/BookingHistory.css";
import SideBarAdmin from "../components/SideBarAdmin";
import Modal from "../components/Modal"; // Import the Modal component

const RoomManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNewRoomClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="history-container">
      <SideBarAdmin />
      <div className="booking-history">
        <div className="booking-header">
          <h1>Rooms</h1>
          <div className="new-booking-button">
            <button className="add-booking-btn" onClick={handleNewRoomClick}>
              <i className="fas fa-plus"></i> New Room
            </button>
          </div>
        </div>
        <div className="search-bar">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Search" />
        </div>
        <table className="booking-table">
          <thead>
            <tr>
              <th>Nbr°</th>
              <th>Room Name</th>
              <th>Capacity</th>
              <th>Availability</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01</td>
              <td>Room A</td>
              <td>20</td>
              <td>11 DEC 14PM</td>
              <td>
                <i className="fa fa-clipboard mx-1"></i>
                <i className="fas fa-trash"></i>
              </td>
            </tr>
            <tr>
              <td>01</td>
              <td>Room A</td>
              <td>20</td>
              <td>11 DEC 14PM</td>
              <td>
                <i className="fa fa-clipboard mx-1"></i>
                <i className="fas fa-trash"></i>
              </td>
            </tr>
            <tr>
              <td>01</td>
              <td>Room A</td>
              <td>20</td>
              <td>11 DEC 14PM</td>
              <td>
                <i className="fa fa-clipboard mx-1"></i>
                <i className="fas fa-trash"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Modal for New Room */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2>New Room</h2>
        <form>
          <div className="form-group">
            <label>Room Name:</label>
            <input type="text" placeholder="Enter room name" />
          </div>
          <div className="form-group">
            <label>Capacity:</label>
            <input type="number" placeholder="Enter capacity" />
          </div>
          <div className="form-group">
            <label>Availability:</label>
            <input type="text" placeholder="Enter availability" />
          </div>
          <button type="submit" className="confirm-button">Add Room</button>
        </form>
      </Modal>
    </div>
  );
};

export default RoomManagement;
