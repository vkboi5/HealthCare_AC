import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './css/App.css';
import Navbar from './Navbar.js';
import { StatusProvider } from './StatusContext';
import { useSelector } from "react-redux";
import ProtectedRoute from "../components/ProtectedRoute"; 
import PublicRoute from "../components/PublicRoute";
import { Toaster } from "react-hot-toast";

// Import components from the first file
import Login from './Logins.js';
import Register from './Register.js';
import Home from './Home';
import ApplyDoctor from './ApplyDoctor';
import Notifications from './Notifications';
import Userslist from '../Admin/Userslist';
import DoctorsList from '../Admin/DoctorsList';
import Profile from '../Doctor/Profile';
import BookAppointment from './BookAppointment';
import Appointments from './Appointments';
import DoctorAppointments from '../Doctor/DoctorAppointments';

// Import components from the second file
// import PatientAppointments from './PatientAppointments';
import DoctorManagement from './DoctorManagement';
import Homepage from './Homepage.js';
import About from './About.js';
import Dashboard from './EmployeeManagement.js';
import Ecom from './Ecom.js';
import QRscan from './qr.js';

function App() {
  const { loading } = useSelector((state) => state.alerts);

  const mainContentStyle = {
    marginTop: "65px",
  };

  return (
    <StatusProvider>
      <Router>
        <Navbar />
        {loading && (
          <div className="spinner-parent">
            <div className="spinner-border" role="status"></div>
          </div>
        )}
        <Toaster position="top-center" reverseOrder={false} />
        <div className="App" style={mainContentStyle}>
          <Routes>
            {/* Routes from the first file */}
            <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
            <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
            <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/apply-doctor" element={<ProtectedRoute><ApplyDoctor /></ProtectedRoute>} />
            <Route path="/notifications" element={<ProtectedRoute><Notifications /></ProtectedRoute>} />
            <Route path="/admin/userslist" element={<ProtectedRoute><Userslist /></ProtectedRoute>} />
            <Route path="/admin/doctorslist" element={<ProtectedRoute><DoctorsList /></ProtectedRoute>} />
            <Route path="/profile/" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path="/book-appointment/:doctorId" element={<ProtectedRoute><BookAppointment /></ProtectedRoute>} />
            <Route path="/patientappointments" element={<ProtectedRoute><BookAppointment /></ProtectedRoute>} />
            <Route path="/appointments" element={<ProtectedRoute><Appointments /></ProtectedRoute>} />
            <Route path="/doctor/appointments" element={<ProtectedRoute><DoctorAppointments /></ProtectedRoute>} />
            
            {/* Routes from the second file */}
            {/* <Route path="/patientappointments" element={<PatientAppointments />} /> */}
            <Route path="/doctormanagement" element={<DoctorManagement />} />
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/employemanagement" element={<Dashboard />} />
            <Route path="/ecommerce" element={<Ecom />} />
            <Route path="/qr" element={<QRscan />} />
          </Routes>
        </div>
      </Router>
    </StatusProvider>
  );
}

export default App;



