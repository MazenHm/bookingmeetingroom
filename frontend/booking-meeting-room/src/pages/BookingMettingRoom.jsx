import React, { useEffect, useState } from "react";
import "../styles/BookingMettingRoom.css";
import { getAllRooms } from "../services/RoomService";
import { useNavigate } from "react-router-dom";
import SideBar from "../components/SideBar";

const BookingMettingRoom = () => {
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState("");
  const [duration, setDuration] = useState("");
  const [collaborators, setCollaborators] = useState(""); // NEW FIELD

  const navigate = useNavigate();

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const data = await getAllRooms();
        setRooms(data);
      } catch (err) {
        console.error("Error loading rooms:", err);
      }
    };

    fetchRooms();
  }, []);

  const handleContinue = () => {
    if (!selectedRoom) {
      alert("Please select a room");
      return;
    }

    if (!duration || duration <= 0) {
      alert("Please enter a valid duration");
      return;
    }

    if (!collaborators || collaborators <= 0) {
      alert("Please enter collaborators number");
      return;
    }

    // Save user choices
    localStorage.setItem("selectedRoom", selectedRoom);
    localStorage.setItem("duration", duration);
    localStorage.setItem("collaborators", collaborators); // NEW FIELD

    // Navigate to the next page
    navigate("/calendar");
  };

  return (
    <div className="booking">
      <SideBar/>
      <div className="booking-container">
        <h1 className="text-center">Booking Meeting Room</h1>

        <div className="booking-form">

          {/* ROOM SELECTION */}
          <div className="d-flex flex-column mb-3">
            <label htmlFor="options">Available rooms</label>

            <select
              id="options"
              name="options"
              value={selectedRoom}
              onChange={(e) => setSelectedRoom(e.target.value)}
            >
              <option value="" disabled>
                Room Name
              </option>

              {rooms.length > 0 ? (
                rooms.map((room) => (
                  <option key={room._id} value={room._id}>
                    {room.name} — {room.capacity} People
                  </option>
                ))
              ) : (
                <option disabled>No rooms available</option>
              )}
            </select>
          </div>

          {/* DURATION */}
          <input
            type="number"
            placeholder="Duration (Hours)"
            className="mb-3"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />

          {/* COLLABORATOR NUMBER */}
          <input
            type="number"
            placeholder="Collaborators Number"
            className="mb-5"
            value={collaborators}
            onChange={(e) => setCollaborators(e.target.value)}
          />

          {/* BUTTON */}
          <button className="mb-2" onClick={handleContinue}>
            CONTINUE
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingMettingRoom;
