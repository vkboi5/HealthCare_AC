import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import QRCode from "qrcode.react";
import { Toaster, toast } from 'react-hot-toast'; // Import ToastContainer and toast from react-hot-toast
import "./css/Register.css";
import doct1 from "./images/Rejs2.png";

const Register = () => {
  // State variables to manage form input
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("patient");
  const [registrationNo, setRegistrationNo] = useState("");
  const [specialty, setSpecialty] = useState("");
  const navigate = useNavigate();
  const [showQRCode, setShowQRCode] = useState(false);

  // Function to handle registration
  const handleRegister = async () => {
    try {
      // Make a POST request to the registration endpoint on your server
      const response = await fetch(
        "https://arogyaconnectdemo.onrender.com/api/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            phoneNumber,
            username,
            password,
            userType,
            registrationNo,
            specialty,
          }),
        }
      );

      if (response.ok) {
        // Registration successful
        const data = await response.json();
        toast.success(data.message); // Show success message using toast
        // If the user is a doctor, show the QR code
        if (userType === "doctor") {
          setShowQRCode(true);
        }
      } else {
        // Registration failed, show an error message
        const errorData = await response.json();
        toast.error(errorData.error); // Show error message using toast
      }
    } catch (error) {
      console.error("Error during registration:", error);
      toast.error("Registration failed. Please try again."); // Show error message using toast
    }
  };

  // Function to download the QR code as an image
  const downloadQRCode = () => {
    const canvas = document.querySelector("canvas");
    const image = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    const link = document.createElement("a");
    link.setAttribute("download", "qr-code.png");
    link.setAttribute("href", image);
    link.click();
  };

  return (
    <div className="register-container">
      <div className="resistor">
        <h2 className="intro">Get Access to Simplified Healthcare Now !!</h2>
        <form>
          <div className="form_grp_contianer_main">
            <div className="form-grp-container1">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  className="form_grp_inputs"
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                className="form_grp_inputs"
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                className="form_grp_inputs"
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            </div>

            <div className="form-grp-container2">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                className="form_grp_inputs"
                  type="text"
                  id="username"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                className="form_grp_inputs"
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label>User Type</label>
                  <select className="form_grp_inputs" id="userType" name="userType" value={userType} onChange={(e) => setUserType(e.target.value)}>
                    <option value="patient">Patient</option>
                    <option value="doctor">Doctor</option>
                  </select>
              </div>
            </div>

          </div>

          {userType === "doctor" && (
              <div className="form_grp_contianer_main">
                <div className="form-grp-container1">
                  <label htmlFor="registrationNo">Registration Number</label>
                  <input
                    className="form_grp_inputs"
                    type="text"
                    id="registrationNo"
                    name="registrationNo"
                    value={registrationNo}
                    onChange={(e) => setRegistrationNo(e.target.value)}
                    required
                  />
                </div>

                <div className="form-grp-container2">
                  <label htmlFor="specialty">Specialty</label>
                  <input
                    className="form_grp_inputs"
                    type="text"
                    id="specialty"
                    name="specialty"
                    value={specialty}
                    onChange={(e) => setSpecialty(e.target.value)}
                    required
                  />
                </div>
              </div>
            )}

          <div className="btns_of_the_form">
          <button className="Reg_form_btn" type="button" onClick={handleRegister}>
            Register
          </button>

          <button className="Reg_form_btn" type="button" onClick={() => navigate("/login")}>
            Go to Login
          </button>
          </div>

          {showQRCode && userType === "doctor" && (
            <div className="QR_code_container">
              <div className="OR_code_items">
                <h3>Your QR Code</h3>
                <QRCode
                  value={`Name: ${name}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nUsername: ${username}\nRegistration No: ${registrationNo}\nSpecialty: ${specialty}`}
                  size={128}
                />
                <button className="Download_QR_code_btn" type="button" onClick={downloadQRCode}>
                  Download QR Code
                </button>
              </div>
            </div>
          )}
        </form>
        <Toaster /> {/* Add ToastContainer at the root level */}
      </div>
      <div className="register-image">
        <img src={doct1} alt="fsa"></img>
      </div>
    </div>
  );
};
export default Register;


