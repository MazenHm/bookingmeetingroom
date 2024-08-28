import React, { useState } from "react";
import "../styles/Calendar.css";

function Calendar() {
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  // Updated days array with unique identifiers
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

  const handleDaySelect = (day) => {
    setSelectedDay(day.short);
  };

  const handleMonthSelect = (month) => {
    setSelectedMonth(month);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleConfirm = () => {
    if (selectedDay && selectedMonth && selectedTime) {
      const fullDay = days.find((day) => day.short === selectedDay).full;
      alert(
        `Booking confirmed for ${fullDay} in ${selectedMonth} at ${selectedTime}`
      );
    } else {
      alert("Please select a day, month, and time.");
    }
  };

  return (
    <div className="booking-container-calendar">
      <h2 className="text-center mb-5">Booking Meeting Room</h2>
      <div className="day-month-time-container">
        <div className="day-selector">
          <p className="selector-title">Select Day</p>
          <div className="selector-options">
            {days.map((day, index) => (
              <div
                key={index}
                className={`day ${selectedDay === day.short ? "selected" : ""}`}
                onClick={() => handleDaySelect(day)}
              >
                {day.short}
              </div>
            ))}
          </div>
        </div>
        <div className="month-selector">
          <p className="selector-title">Select Month</p>
          <div className="month-grid">
            {months.map((month, index) => (
              <div
                key={index}
                className={`month ${selectedMonth === month ? "selected" : ""}`}
                onClick={() => handleMonthSelect(month)}
              >
                {month}
              </div>
            ))}
          </div>
        </div>
        <div className="time-selector">
          <p className="selector-title">Select Time</p>
          <div className="selector-options">
            {times.map((time, index) => (
              <div
                key={index}
                className={`time ${selectedTime === time ? "selected" : ""}`}
                onClick={() => handleTimeSelect(time)}
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
