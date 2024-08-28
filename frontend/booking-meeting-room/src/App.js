import "./App.css";
import Navbar from "./components/Navbar";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import BookingInformations from "./pages/BookingInformations";
import BookingMettingRoom from "./pages/BookingMettingRoom";
import SignInAdmin from "./pages/SignInAdmin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditProfile from "./pages/EditProfile";
import EditAdmin from "./pages/EditAdmin";
import BookingHistory from "./pages/BookingHistory";
import RoomManagement from "./pages/RoomManagement";
import Calendar from "./pages/Calendar";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin-admin" element={<SignInAdmin />} />
          <Route
            path="/booking-informations"
            element={<BookingInformations />}
          />
          <Route path="/booking" element={<BookingMettingRoom />} />
          <Route path="/edituser" element={<EditProfile />} />
          <Route path="/editadmin" element={<EditAdmin />} />
          <Route path="/bookinghistory" element={<BookingHistory />} />
          <Route path="/roommanagment" element={<RoomManagement />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
