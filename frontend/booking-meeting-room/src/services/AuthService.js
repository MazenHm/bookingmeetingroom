import axios from "axios";

const API_URL = "http://localhost:8080/api/auth";

export const login = async (email, password) => {
  try {
    const res = await axios.post(`${API_URL}/login`, { email, password });
    return res.data;
  } catch {
    return { error: true };
  }
};

export const signup = async (name, email, password) => {
  try {
    const res = await axios.post("http://localhost:8080/api/auth/signup", {
      name,
      email,
      password
    });
    return res.data;
  } catch (err) {
    return { error: true };
  }
};

