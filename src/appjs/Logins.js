// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';

// // const Login = () => {
// //   const [username, setUsername] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [userType, setUserType] = useState('patient'); // Default user type is patient
// //   const navigate = useNavigate();

// //   const handleLogin = async () => {
// //     try {
// //       // Make a POST request to the login endpoint on your server
// //       const response = await fetch('http://localhost:2000/api/login', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify({ username, password }),
// //       });

// //       if (response.ok) {
// //         // Redirect based on user type on successful login
// //         const data = await response.json();
// //         alert(data.message); // Display a success message
// //         if (userType === 'doctor') {
// //           // If the user is a doctor, redirect to DoctorManagement
// //           navigate('/doctormanagement');
// //         } else {
// //           // Default: If the user is a patient or userType is not specified, redirect to PatientAppointments
// //           navigate('/patientappointments');
// //         }
// //       } else {
// //         // Handle login failure, show an error message
// //         const errorData = await response.json();
// //         alert(errorData.error); // Display an error message
// //       }
// //     } catch (error) {
// //       console.error('Error during login:', error);
// //       alert('Login failed. Please try again.'); // Generic error message
// //     }
// //   };

// //   return (
// //     <div>
// //       <h2>Login</h2>
// //       <form>
// //         <div className="form-group">
// //           <label htmlFor="username">Username</label>
// //           <input
// //             type="text"
// //             id="username"
// //             value={username}
// //             onChange={(e) => setUsername(e.target.value)}
// //             required
// //           />
// //         </div>
// //         <div className="form-group">
// //           <label htmlFor="password">Password</label>
// //           <input
// //             type="password"
// //             id="password"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //             required
// //           />
// //         </div>
// //         <div className="form-group">
// //           <label>User Type</label>
// //           <select
// //             value={userType}
// //             onChange={(e) => setUserType(e.target.value)}
// //           >
// //             <option value="patient">Patient</option>
// //             <option value="doctor">Doctor</option>
// //           </select>
// //         </div>
// //         <button type="button" onClick={handleLogin}>
// //           Log In
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Login;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [userType, setUserType] = useState('patient');
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     try {
//       const response = await fetch('http://localhost:1000/api/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username, password }),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         alert(data.message);
//         if (userType === 'doctor') {
//           navigate('/doctormanagement');
//         } else {
//           navigate('/patientappointments');
//         }
//       } else {
//         const errorData = await response.json();
//         alert(errorData.error);
//       }
//     } catch (error) {
//       console.error('Error during login:', error);
//       alert('Login failed. Please try again.');
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form>
//         <div className="form-group">
//           <label htmlFor="username">Username</label>
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>User Type</label>
//           <select
//             value={userType}
//             onChange={(e) => setUserType(e.target.value)}
//           >
//             <option value="patient">Patient</option>
//             <option value="doctor">Doctor</option>
//           </select>
//         </div>
//         <button type="button" onClick={handleLogin}>
//           Log In
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-hot-toast'; // Import toast from react-hot-toast
// import './css/Login.css';
// import doct2 from './images/Rejs.png';

// const Login = ({ setUser }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [userType, setUserType] = useState('patient');
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     try {
//       const response = await fetch('https://arogyaconnectdemo.onrender.com/api/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username, password }),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         toast.success(data.message); // Display success toast
//         setUser({ isAuthenticated: true, type: userType });
//         navigate(userType === 'doctor' ? '/doctormanagement' : '/patientappointments');
//       } else {
//         const errorData = await response.json();
//         toast.error(errorData.error); // Display error toast
//       }
//     } catch (error) {
//       console.error('Error during login:', error);
//       toast.error('Login failed. Please try again.'); // Display error toast
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="form-container2">
//         <h2>Login</h2>
//         <form>
//           <div className="form-group2">
//             <label htmlFor="username">Username</label>
//             <input
//               type="text"
//               id="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group2">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group2">
//             <label>User Type</label>
//             <select
//               value={userType}
//               onChange={(e) => setUserType(e.target.value)}
//             >
//               <option value="patient">Patient</option>
//               <option value="doctor">Doctor</option>
//             </select>
//           </div>
//           <button type="button" onClick={handleLogin}>
//             Log In
//           </button>
//           <a href='/register'>New User? Register Now</a>
//         </form>
//       </div>
//       <div className="login-image">
//         <img src={doct2} alt="Healthcare Illustration" />
//       </div>
//     </div>
//   );
// };

// export default Login;


import { Button, Form, Input } from "antd";
import React from "react";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { hideLoading, showLoading } from "../redux/alertsSlice";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      dispatch(showLoading());
      const response = await axios.post("/api/user/login", values);
      dispatch(hideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        localStorage.setItem("token", response.data.data);
        navigate("/");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="authentication">
      <div className="authentication-form card p-3">
        <h1 className="card-title">Welcome Back</h1>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item label="Email" name="email">
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input placeholder="Password" type="password" />
          </Form.Item>

          
          <Button className="primary-button my-2 full-width-button" htmlType="submit">
            LOGIN
          </Button>

          <Link to="/register" className="anchor mt-2">
            CLICK HERE TO REGISTER
          </Link>
         
        </Form>
      </div>
    </div>
  );
}

export default Login;
