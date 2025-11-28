import React, { useState } from "react";
import "../styles/Calendar.css";
import { useNavigate } from "react-router-dom";
import SideBar from "../components/SideBar";

function Calendar() {
  const navigate = useNavigate();

  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const days = [
    { short: "M", full: "Monday" },
    { short: "Tu", full: "Tuesday" },
    { short: "W", full: "Wednesday" },
    { short: "Th", full: "Thursday" },
    { short: "F", full: "Friday" },
    { short: "S", full: "Saturday" },
    { short: "Su", full: "Sunday" }
  ];

  const months = [
    "Jan", "Fev", "Mar", "Apr", "Mai", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const times = ["8AM", "9AM", "10AM", "11AM", "12AM", "13PM", "14PM"];

  const handleConfirm = () => {
    if (!selectedDay || !selectedMonth || !selectedTime) {
      alert("Please select a day, month, and time.");
      return;
    }

    // Save user choices
    localStorage.setItem("selectedDay", selectedDay);
    localStorage.setItem("selectedMonth", selectedMonth);
    localStorage.setItem("selectedTime", selectedTime);

    // Redirect to final page
    navigate("/booking-informations");
  };

  return (
    <div className="booking-container-calendar">
      <SideBar/>
      <h2 className="text-center mb-5">Booking Meeting Room</h2>

      <div className="day-month-time-container">

        {/* DAY */}
        <div className="day-selector">
          <p className="selector-title">Select Day</p>
          <div className="selector-options">
            {days.map((day, index) => (
              <div
                key={index}
                className={`day ${selectedDay === day.short ? "selected" : ""}`}
                onClick={() => setSelectedDay(day.short)}
              >
                {day.short}
              </div>
            ))}
          </div>
        </div>

        {/* MONTH */}
        <div className="month-selector">
          <p className="selector-title">Select Month</p>
          <div className="month-grid">
            {months.map((month, index) => (
              <div
                key={index}
                className={`month ${selectedMonth === month ? "selected" : ""}`}
                onClick={() => setSelectedMonth(month)}
              >
                {month}
              </div>
            ))}
          </div>
        </div>

        {/* TIME */}
        <div className="time-selector">
          <p className="selector-title">Select Time</p>
          <div className="selector-options">
            {times.map((time, index) => (
              <div
                key={index}
                className={`time ${selectedTime === time ? "selected" : ""}`}
                onClick={() => setSelectedTime(time)}
              >
                {time}
              </div>
            ))}
          </div>
        </div>

      </div>

      <button className="confirm-button" onClick={handleConfirm}>
        CONFIRM
      </button>
    </div>
  );
}

export default Calendar;
