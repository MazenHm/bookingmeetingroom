import React, { useEffect, useState } from "react";
import "../styles/BookingHistory.css";
import SideBarAdmin from "../components/SideBarAdmin";
import Modal from "../components/Modal";
import {
  getAllRooms,
  addRoom,
  deleteRoom,
  updateRoom,
} from "../services/RoomService";
import { showConfirmDialog } from "../components/ConfirmDeleteDialog";

const RoomManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [rooms, setRooms] = useState([]);
  const [filteredRooms, setFilteredRooms] = useState([]); // State to hold filtered rooms
  const [roomName, setRoomName] = useState("");
  const [capacity, setCapacity] = useState("");
  const [editingRoomId, setEditingRoomId] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); // State to hold the search term

  const handleNewRoomClick = () => setIsModalOpen(true);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setRoomName("");
    setCapacity("");
  };

  const handleCloseUpdateModal = () => {
    setIsUpdateModalOpen(false);
    setRoomName("");
    setCapacity("");
  };

  const handleRoomNameChange = (event) => setRoomName(event.target.value);

  const handleCapacityChange = (event) => setCapacity(event.target.value);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    filterRooms(event.target.value);
  };

  const filterRooms = (searchTerm) => {
    const lowerCaseTerm = searchTerm.toLowerCase();
    const filtered = rooms.filter((room) =>
      room.name.toLowerCase().includes(lowerCaseTerm)
    );
    setFilteredRooms(filtered);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newRoom = { name: roomName, capacity: parseInt(capacity, 10) };

    const response = await addRoom(newRoom);
    if (response.err) {
      console.error("Error adding room:", response.err);
    } else {
      console.log("Room added successfully:", response.data);
      getRooms();
      handleCloseModal();
    }
  };

  const handleUpdateSubmit = async (event) => {
    event.preventDefault();
    const updatedRoom = { name: roomName, capacity: parseInt(capacity, 10) };

    try {
      const response = await updateRoom(editingRoomId, updatedRoom);
      if (response.err) {
        console.error("Error updating room:", response.err);
      } else {
        console.log("Room updated successfully:", response.data);
        getRooms();
        handleCloseUpdateModal();
      }
    } catch (error) {
      console.error("Error updating room:", error);
    }
  };

  const handleDelete = (id) => {
    showConfirmDialog(async () => {
      const response = await deleteRoom(id);
      if (response) {
        console.log("Room deleted successfully");
        getRooms();
      } else {
        console.error("Error deleting room");
      }
    });
  };

  const handleEditClick = (room) => {
    setEditingRoomId(room._id);
    setRoomName(room.name);
    setCapacity(room.capacity);
    setIsUpdateModalOpen(true);
  };

  async function getRooms() {
    try {
      const data = await getAllRooms();
      console.log("Fetched rooms data:", data);
      if (Array.isArray(data)) {
        setRooms(data);
        setFilteredRooms(data);
      } else if (data && Array.isArray(data.rooms)) {
        setRooms(data.rooms);
        setFilteredRooms(data.rooms);
      } else {
        console.error("Expected an array but received:", data);
        setRooms([]);
        setFilteredRooms([]);
      }
    } catch (error) {
      console.error("Error fetching rooms:", error);
      setRooms([]);
      setFilteredRooms([]);
    }
  }

  useEffect(() => {
    getRooms();
  }, []);

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
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearchChange}
          />
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
            {filteredRooms.length > 0 ? (
              filteredRooms.map((room, index) => (
                <tr key={room._id || index}>
                  <td>{index + 1}</td>
                  <td>{room.name}</td>
                  <td>{room.capacity}</td>
                  <td>{room.availability ? "Available" : "Not Available"}</td>
                  <td>
                    <i
                      className="fa fa-clipboard mx-1"
                      onClick={() => handleEditClick(room)}
                    ></i>
                    <i
                      className="fas fa-trash"
                      onClick={() => handleDelete(room._id)}
                    ></i>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No rooms available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2 className="room-modal-title">New Room</h2>
        <form className="modal-form" onSubmit={handleSubmit}>
          <div className="form-group gap-2 d-flex flex-column mb-2">
            <label>Room Name:</label>
            <input
              type="text"
              value={roomName}
              onChange={handleRoomNameChange}
              placeholder="Enter room name"
              required
            />
          </div>
          <div className="form-group gap-2 d-flex flex-column mb-4">
            <label>Capacity:</label>
            <input
              type="number"
              value={capacity}
              onChange={handleCapacityChange}
              placeholder="Enter capacity"
              required
            />
          </div>

          <button type="submit" className="confirm-button">
            ADD ROOM
          </button>
        </form>
      </Modal>

      <Modal isOpen={isUpdateModalOpen} onClose={handleCloseUpdateModal}>
        <h2 className="room-modal-title">Update Room</h2>
        <form className="modal-form" onSubmit={handleUpdateSubmit}>
          <div className="form-group gap-2 d-flex flex-column mb-2">
            <label>Room Name:</label>
            <input
              type="text"
              value={roomName}
              onChange={handleRoomNameChange}
              placeholder="Enter room name"
              required
            />
          </div>
          <div className="form-group gap-2 d-flex flex-column mb-4">
            <label>Capacity:</label>
            <input
              type="number"
              value={capacity}
              onChange={handleCapacityChange}
              placeholder="Enter capacity"
              required
            />
          </div>

          <button type="submit" className="confirm-button">
            UPDATE ROOM
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default RoomManagement;
