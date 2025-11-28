import React, { useEffect, useState } from "react";
import "../styles/BookingInformations.css";
import { getAllRooms } from "../services/RoomService";
import { useNavigate } from "react-router-dom";
import SideBar from "../components/SideBar";

const BookingInformations = () => {
  const navigate = useNavigate();

  const [room, setRoom] = useState(null);
  const [duration, setDuration] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [endTime, setEndTime] = useState("");

  useEffect(() => {
    const roomId = localStorage.getItem("selectedRoom");
    const dur = localStorage.getItem("duration");
    const day = localStorage.getItem("selectedDay");
    const month = localStorage.getItem("selectedMonth");
    const time = localStorage.getItem("selectedTime");

    if (!roomId) {
      alert("No room selected");
      navigate("/booking");
      return;
    }

    setDuration(dur);
    setSelectedDay(day);
    setSelectedMonth(month);
    setSelectedTime(time);

    // Load room info
    const fetchRoom = async () => {
      const allRooms = await getAllRooms();
      const foundRoom = allRooms.find((r) => r._id === roomId);
      setRoom(foundRoom);
    };

    fetchRoom();

    // Compute END time
    if (time && dur) {
      const formatted = computeEndTime(time, dur);
      setEndTime(formatted);
    }
  }, [navigate]);

  const computeEndTime = (start, duration) => {
    // Example: "14PM" → 14
    let hour = parseInt(start);
    let endHour = hour + parseInt(duration);

    // Display in same AM/PM style
    if (endHour >= 24) endHour -= 24;

    return endHour + (start.includes("PM") ? "PM" : "AM");
  };

  if (!room) {
    return <div className="information-container">Loading...</div>;
  }

  return (
    <div className="information-container">
<SideBar/>
      {/* BACK BUTTON */}
      <div
        className="d-flex align-items-center gap-2 mb-5"
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/calendar")}
      >
        <i className="fas fa-arrow-left"></i>
        <h4>Booking Information</h4>
      </div>

      <div className="information-box">
        <h5 className="mb-5">Your Reservation</h5>

        <div className="d-flex align-items-center justify-content-between">
          <h6>Room Name</h6>
          <p>{room.name}</p>
        </div>

        <div className="d-flex align-items-center justify-content-between">
          <h6>Capacity</h6>
          <p>{room.capacity}</p>
        </div>

        <div className="d-flex align-items-center justify-content-between">
          <h6>Duration</h6>
          <p>{duration} Hours</p>
        </div>

        <div className="d-flex align-items-center justify-content-between">
          <h6>Day</h6>
          <p>{selectedDay}</p>
        </div>

        <div className="d-flex align-items-center justify-content-between">
          <h6>Month</h6>
          <p>{selectedMonth}</p>
        </div>

        <div className="d-flex align-items-center justify-content-between">
          <h6>Start</h6>
          <p>{selectedTime}</p>
        </div>

        <div className="d-flex align-items-center justify-content-between">
          <h6>End</h6>
          <p>{endTime}</p>
        </div>
      </div>
    </div>
  );
};

export default BookingInformations;
