import React, { useState } from 'react';
import './DoctorManagement.css'; // Make sure to import your CSS file
import dtlogo from './dtlogo.jpg';
import Popup from './Popup';

function DoctorManagement() {
  const [showPopup, setShowPopup] = useState(false);
  const [prescriptions, setPrescriptions] = useState([
    "Paracetamol",
    "Ibuprofen",
    "Aspirin",
    "Amoxicillin",
    "Lisinopril"
  ]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleEndAppointment = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredPrescriptions = prescriptions.filter((prescription) =>
    prescription.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      <nav className='navv'>
        <ul>
          <li>
            <a href="#" className="logo2">
              <img src={dtlogo} alt="logo" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-menorah"></i>
              <span className="nav-item">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-comment"></i>
              <span className="nav-item">Message</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-database"></i>
              <span className="nav-item">Report</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-chart-bar"></i>
              <span className="nav-item">Attendance</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-cog"></i>
              <span className="nav-item">Setting</span>
            </a>
          </li>
          <li>
            <a href="#" className="logout">
              <i className="fas fa-sign-out-alt"></i>
              <span className="nav-item">Log out</span>
            </a>
          </li>
        </ul>
      </nav>
      <section className="main">
        <div className="main-top">
          <h1>Doctor Name</h1>
          <i className="fas fa-user-cog"></i>
        </div>
        <section className="attendance">
          <div className="attendance-list">
            <h1>Today's Appointment</h1>
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Depart</th>
                  <th>Date</th>
                  <th>Join Time</th>
                  <th>Logout Time</th>
                  <th>Patient History</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01</td>
                  <td>Sam David</td>
                  <td>Design</td>
                  <td>03-24-22</td>
                  <td>8:00AM</td>
                  <td>3:00PM</td>
                  <td><button className='ClicktoView'>Click <br/> To <br/> View</button></td>
                  <td><button className='end-appointment' onClick={handleEndAppointment}>End <br /> Appointment</button></td>
                </tr>
                <tr className="active">
                  <td>02</td>
                  <td>Balbina Kherr</td>
                  <td>Coding</td>
                  <td>03-24-22</td>
                  <td>9:00AM</td>
                  <td>4:00PM</td>
                  <td><button className='ClicktoView'>Click <br/> To <br/> View</button></td>
                  <td><button className='end-appointment'>End <br/> Appointment</button></td>
                </tr>
                <tr>
                  <td>03</td>
                  <td>Badan John</td>
                  <td>testing</td>
                  <td>03-24-22</td>
                  <td>8:00AM</td>
                  <td>3:00PM</td>
                  <td><button className='ClicktoView'>Click <br/> To <br/> View</button></td>
                  <td><button className='end-appointment'>End <br/> Appointment</button></td>
                </tr>
                <tr>
                  <td>04</td>
                  <td>Sara David</td>
                  <td>Design</td>
                  <td>03-24-22</td>
                  <td>8:00AM</td>
                  <td>3:00PM</td>
                  <td><button className='ClicktoView'>Click <br/> To <br/> View</button></td>
                  <td><button className='end-appointment'>End <br/> Appointment</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </section>
      {showPopup && (
        <Popup prescriptions={prescriptions} onClose={closePopup} />
      )}
    </div>
  );
}

export default DoctorManagement;
