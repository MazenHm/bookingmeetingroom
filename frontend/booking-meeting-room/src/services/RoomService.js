import axios from "axios";

const API_URL = "https://bookingmeetingroom.onrender.com/api/rooms";

const getAuthHeader = () => {
  const token = localStorage.getItem("token");
  return {
    headers: { Authorization: `Bearer ${token}` }
  };
};

export const getAllRooms = async () => {
  try {
    const res = await axios.get(`${API_URL}/getAllRooms`, getAuthHeader());
    return res.data;
  } catch (err) {
    console.error("Error fetching rooms:", err);
    return [];
  }
};

export const addRoom = async (room) => {
  try {
    const res = await axios.post(`${API_URL}/addRoom`, room, getAuthHeader());
    return res.data;
  } catch (err) {
    console.error("Error adding room:", err);
    return { err };
  }
};

export const deleteRoom = async (id) => {
  try {
    const res = await axios.delete(`${API_URL}/deleteRoom/${id}`, getAuthHeader());
    return res.data;
  } catch (err) {
    console.error("Error deleting room:", err);
    return null;
  }
};

export const updateRoom = async (id, room) => {
  try {
    const res = await axios.put(`${API_URL}/updateRoom/${id}`, room, getAuthHeader());
    return res.data;
  } catch (err) {
    console.error("Error updating room:", err);
    return { err };
  }
};
