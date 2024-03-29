// // // // // // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // // // // // import { useNavigate } from 'react-router-dom';

// // // // // // // // // // // // function PatientAppointments({ patientID }) {
// // // // // // // // // // // //   const [selectedSpecialty, setSelectedSpecialty] = useState('');
// // // // // // // // // // // //   const [availableTimings, setAvailableTimings] = useState([]);
// // // // // // // // // // // //   const [selectedTiming, setSelectedTiming] = useState('');
// // // // // // // // // // // //   const [appointmentConfirmed, setAppointmentConfirmed] = useState(false);
// // // // // // // // // // // //   const navigate = useNavigate();

// // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // //     if (patientID) {
// // // // // // // // // // // //       fetch(`http://localhost:1000/api/patients/${patientID}`)
// // // // // // // // // // // //         .then((response) => response.json())
// // // // // // // // // // // //         .then((data) => {
// // // // // // // // // // // //           // Set patient phone number logic remains unchanged
// // // // // // // // // // // //         })
// // // // // // // // // // // //         .catch((error) => {
// // // // // // // // // // // //           console.error('Error fetching patient phone number:', error);
// // // // // // // // // // // //         });
// // // // // // // // // // // //     }
// // // // // // // // // // // //   }, [patientID]);

// // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // //     if (selectedSpecialty) {
// // // // // // // // // // // //       fetch(`http://localhost:1000/api/available-timings?specialty=${selectedSpecialty}`)
// // // // // // // // // // // //         .then((response) => response.json())
// // // // // // // // // // // //         .then((data) => {
// // // // // // // // // // // //           setAvailableTimings(data);
// // // // // // // // // // // //         })
// // // // // // // // // // // //         .catch((error) => {
// // // // // // // // // // // //           console.error('Error fetching available timings:', error);
// // // // // // // // // // // //         });
// // // // // // // // // // // //     } else {
// // // // // // // // // // // //       setAvailableTimings([]);
// // // // // // // // // // // //     }
// // // // // // // // // // // //   }, [selectedSpecialty]);

// // // // // // // // // // // //   const handleConfirmAppointment = () => {
// // // // // // // // // // // //     if (patientID && selectedTiming && selectedSpecialty) {
// // // // // // // // // // // //       const appointmentData = {
// // // // // // // // // // // //         patientID: patientID, // Pass patientID
// // // // // // // // // // // //         doctorID: 'REPLACE_WITH_DOCTOR_ID',
// // // // // // // // // // // //         specialty: selectedSpecialty,
// // // // // // // // // // // //         timing: selectedTiming,
// // // // // // // // // // // //       };
  
// // // // // // // // // // // //       fetch('http://localhost:1000/api/appointments', {
// // // // // // // // // // // //         method: 'POST',
// // // // // // // // // // // //         headers: {
// // // // // // // // // // // //           'Content-Type': 'application/json',
// // // // // // // // // // // //         },
// // // // // // // // // // // //         body: JSON.stringify(appointmentData),
// // // // // // // // // // // //       })
// // // // // // // // // // // //         .then((response) => response.json())
// // // // // // // // // // // //         .then((data) => {
// // // // // // // // // // // //           // Display a simple confirmation message
// // // // // // // // // // // //           alert('Appointment Confirmed');
  
// // // // // // // // // // // //           setAppointmentConfirmed(true);
  
// // // // // // // // // // // //           console.log('Appointment confirmed:', data.message);
// // // // // // // // // // // //         })
// // // // // // // // // // // //         .catch((error) => {
// // // // // // // // // // // //           console.error('Error confirming appointment:', error);
// // // // // // // // // // // //         });
// // // // // // // // // // // //     } else {
// // // // // // // // // // // //       console.error('Patient ID, timing, or specialty is missing.');
// // // // // // // // // // // //     }
// // // // // // // // // // // //   };
  

// // // // // // // // // // // //   const handleLogout = () => {
// // // // // // // // // // // //     navigate('/login');
// // // // // // // // // // // //   };

// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <div>
// // // // // // // // // // // //       <h2>Patient Appointments</h2>
// // // // // // // // // // // //       <div className="form-group">
// // // // // // // // // // // //         <label>Select Specialty</label>
// // // // // // // // // // // //         <select
// // // // // // // // // // // //           value={selectedSpecialty}
// // // // // // // // // // // //           onChange={(e) => setSelectedSpecialty(e.target.value)}
// // // // // // // // // // // //         >
// // // // // // // // // // // //           <option value="">Select Specialty</option>
// // // // // // // // // // // //           <option value="Cardiology">Cardiology</option>
// // // // // // // // // // // //           <option value="Dermatology">Dermatology</option>
// // // // // // // // // // // //           <option value="Orthopedics">Orthopedics</option>
// // // // // // // // // // // //           {/* Add more specialties here */}
// // // // // // // // // // // //         </select>
// // // // // // // // // // // //       </div>
// // // // // // // // // // // //       <div className="form-group">
// // // // // // // // // // // //         <label>Select Timing</label>
// // // // // // // // // // // //         <select
// // // // // // // // // // // //           value={selectedTiming}
// // // // // // // // // // // //           onChange={(e) => setSelectedTiming(e.target.value)}
// // // // // // // // // // // //         >
// // // // // // // // // // // //           <option value="">Select Timing</option>
// // // // // // // // // // // //           {availableTimings.map((timing) => (
// // // // // // // // // // // //             <option key={timing} value={timing}>
// // // // // // // // // // // //               {timing}
// // // // // // // // // // // //             </option>
// // // // // // // // // // // //           ))}
// // // // // // // // // // // //         </select>
// // // // // // // // // // // //       </div>
// // // // // // // // // // // //       <button onClick={handleConfirmAppointment}>Confirm Appointment</button>
// // // // // // // // // // // //       {appointmentConfirmed && <p>Appointment Confirmed Successfully</p>}
// // // // // // // // // // // //       <button onClick={handleLogout}>Logout</button>
// // // // // // // // // // // //     </div>
// // // // // // // // // // // //   );
// // // // // // // // // // // // }

// // // // // // // // // // // // export default PatientAppointments;












// // // // // // // // // // // // PatientAppointments.js
// // // // // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // // // // import { useNavigate } from 'react-router-dom';

// // // // // // // // // // // function PatientAppointments({ patientID }) {
// // // // // // // // // // //   const [selectedSpecialty, setSelectedSpecialty] = useState('');
// // // // // // // // // // //   const [availableTimings, setAvailableTimings] = useState([]);
// // // // // // // // // // //   const [selectedTiming, setSelectedTiming] = useState('');
// // // // // // // // // // //   const [appointmentConfirmed, setAppointmentConfirmed] = useState(false);
// // // // // // // // // // //   const navigate = useNavigate();

// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     if (patientID) {
// // // // // // // // // // //       // You can fetch patient data here if needed
// // // // // // // // // // //       // Replace with your logic
// // // // // // // // // // //     }
// // // // // // // // // // //   }, [patientID]);

// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     if (selectedSpecialty) {
// // // // // // // // // // //       fetch(`http://localhost:3000/api/available-timings?specialty=${selectedSpecialty}`)
// // // // // // // // // // //         .then((response) => response.json())
// // // // // // // // // // //         .then((data) => {
// // // // // // // // // // //           setAvailableTimings(data);
// // // // // // // // // // //         })
// // // // // // // // // // //         .catch((error) => {
// // // // // // // // // // //           console.error('Error fetching available timings:', error);
// // // // // // // // // // //         });
// // // // // // // // // // //     } else {
// // // // // // // // // // //       setAvailableTimings([]);
// // // // // // // // // // //     }
// // // // // // // // // // //   }, [selectedSpecialty]);

// // // // // // // // // // //   const handleConfirmAppointment = () => {
// // // // // // // // // // //     if (!patientID) {
// // // // // // // // // // //       console.error('Patient ID is missing.');
// // // // // // // // // // //     }
// // // // // // // // // // //     if (!selectedSpecialty) {
// // // // // // // // // // //       console.error('Selected Specialty is missing.');
// // // // // // // // // // //     }
// // // // // // // // // // //     if (!selectedTiming) {
// // // // // // // // // // //       console.error('Selected Timing is missing.');
// // // // // // // // // // //     }
  
// // // // // // // // // // //     if (patientID && selectedSpecialty && selectedTiming) {
// // // // // // // // // // //       const appointmentData = {
// // // // // // // // // // //         patientID,
// // // // // // // // // // //         specialty: selectedSpecialty,
// // // // // // // // // // //         timing: selectedTiming,
// // // // // // // // // // //       };
  
// // // // // // // // // // //       fetch('http://localhost:3000/api/appointments', {
// // // // // // // // // // //         method: 'POST',
// // // // // // // // // // //         headers: {
// // // // // // // // // // //           'Content-Type': 'application/json',
// // // // // // // // // // //         },
// // // // // // // // // // //         body: JSON.stringify(appointmentData),
// // // // // // // // // // //       })
// // // // // // // // // // //         .then((response) => response.json())
// // // // // // // // // // //         .then((data) => {
// // // // // // // // // // //           alert('Appointment Confirmed');
// // // // // // // // // // //           setAppointmentConfirmed(true);
// // // // // // // // // // //           console.log('Appointment confirmed:', data.message);
// // // // // // // // // // //         })
// // // // // // // // // // //         .catch((error) => {
// // // // // // // // // // //           console.error('Error confirming appointment:', error);
// // // // // // // // // // //         });
// // // // // // // // // // //     }
// // // // // // // // // // //   };

// // // // // // // // // // //   const handleLogout = () => {
// // // // // // // // // // //     navigate('/login');
// // // // // // // // // // //   };

// // // // // // // // // // //   return (
// // // // // // // // // // //     <div>
// // // // // // // // // // //       <h2>Patient Appointments</h2>
// // // // // // // // // // //       <div className="form-group">
// // // // // // // // // // //         <label>Select Specialty</label>
// // // // // // // // // // //         <select
// // // // // // // // // // //           value={selectedSpecialty}
// // // // // // // // // // //           onChange={(e) => setSelectedSpecialty(e.target.value)}
// // // // // // // // // // //         >
// // // // // // // // // // //           <option value="">Select Specialty</option>
// // // // // // // // // // //           <option value="Cardiology">Cardiology</option>
// // // // // // // // // // //           <option value="Dermatology">Dermatology</option>
// // // // // // // // // // //           <option value="Orthopedics">Orthopedics</option>
// // // // // // // // // // //           {/* Add more specialties here */}
// // // // // // // // // // //         </select>
// // // // // // // // // // //       </div>
// // // // // // // // // // //       <div className="form-group">
// // // // // // // // // // //         <label>Select Timing</label>
// // // // // // // // // // //         <select
// // // // // // // // // // //           value={selectedTiming}
// // // // // // // // // // //           onChange={(e) => setSelectedTiming(e.target.value)}
// // // // // // // // // // //         >
// // // // // // // // // // //           <option value="">Select Timing</option>
// // // // // // // // // // //           {availableTimings.map((timing) => (
// // // // // // // // // // //             <option key={timing} value={timing}>
// // // // // // // // // // //               {timing}
// // // // // // // // // // //             </option>
// // // // // // // // // // //           ))}
// // // // // // // // // // //         </select>
// // // // // // // // // // //       </div>
// // // // // // // // // // //       <button onClick={handleConfirmAppointment}>Confirm Appointment</button>
// // // // // // // // // // //       {appointmentConfirmed && <p>Appointment Confirmed Successfully</p>}
// // // // // // // // // // //       <button onClick={handleLogout}>Logout</button>
// // // // // // // // // // //     </div>
// // // // // // // // // // //   );
// // // // // // // // // // // }

// // // // // // // // // // // export default PatientAppointments;





// // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // import { useNavigate } from 'react-router-dom';

// // // // // // // function PatientAppointments({ patientName }) {
// // // // // // //   const [selectedSpecialty, setSelectedSpecialty] = useState('');
// // // // // // //   const [availableTimings, setAvailableTimings] = useState([]);
// // // // // // //   const [selectedTiming, setSelectedTiming] = useState('');
// // // // // // //   const [appointmentConfirmed, setAppointmentConfirmed] = useState(false);
// // // // // // //   const navigate = useNavigate();

// // // // // // //   useEffect(() => {
// // // // // // //     if (patientName) {
// // // // // // //       // You can fetch patient data here if needed
// // // // // // //       // Replace with your logic
// // // // // // //     }
// // // // // // //   }, [patientName]);

// // // // // // //   useEffect(() => {
// // // // // // //     if (selectedSpecialty) {
// // // // // // //       fetch(`http://localhost:1000/api/available-timings?specialty=${selectedSpecialty}`)
// // // // // // //         .then((response) => response.json())
// // // // // // //         .then((data) => {
// // // // // // //           setAvailableTimings(data);
// // // // // // //         })
// // // // // // //         .catch((error) => {
// // // // // // //           console.error('Error fetching available timings:', error);
// // // // // // //         });
// // // // // // //     } else {
// // // // // // //       setAvailableTimings([]);
// // // // // // //     }
// // // // // // //   }, [selectedSpecialty]);

// // // // // // //   const handleConfirmAppointment = () => {
// // // // // // //     if (!selectedSpecialty) {
// // // // // // //       console.error('Selected Specialty is missing.');
// // // // // // //     }
// // // // // // //     if (!selectedTiming) {
// // // // // // //       console.error('Selected Timing is missing.');
// // // // // // //     }

// // // // // // //     if (selectedSpecialty && selectedTiming) {
// // // // // // //       const appointmentData = {
// // // // // // //         patientName, // Include patient's name
// // // // // // //         specialty: selectedSpecialty,
// // // // // // //         timing: selectedTiming,
// // // // // // //       };

// // // // // // //       fetch('http://localhost:1000/api/appointments', {
// // // // // // //         method: 'POST',
// // // // // // //         headers: {
// // // // // // //           'Content-Type': 'application/json',
// // // // // // //         },
// // // // // // //         body: JSON.stringify(appointmentData),
// // // // // // //       })
// // // // // // //         .then((response) => response.json())
// // // // // // //         .then((data) => {
// // // // // // //           alert('Appointment Confirmed');
// // // // // // //           setAppointmentConfirmed(true);
// // // // // // //           console.log('Appointment confirmed:', data.message);
// // // // // // //         })
// // // // // // //         .catch((error) => {
// // // // // // //           console.error('Error confirming appointment:', error);
// // // // // // //         });
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handleLogout = () => {
// // // // // // //     navigate('/login');
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div>
// // // // // // //       <h2>Patient Appointments</h2>
// // // // // // //       <div className="form-group">
// // // // // // //         <label>Select Specialty</label>
// // // // // // //         <select
// // // // // // //           value={selectedSpecialty}
// // // // // // //           onChange={(e) => setSelectedSpecialty(e.target.value)}
// // // // // // //         >
// // // // // // //           <option value="">Select Specialty</option>
// // // // // // //           <option value="Cardiology">Cardiology</option>
// // // // // // //           <option value="Dermatology">Dermatology</option>
// // // // // // //           <option value="Orthopedics">Orthopedics</option>
// // // // // // //           {/* Add more specialties here */}
// // // // // // //         </select>
// // // // // // //       </div>
// // // // // // //       <div className="form-group">
// // // // // // //         <label>Select Timing</label>
// // // // // // //         <select
// // // // // // //           value={selectedTiming}
// // // // // // //           onChange={(e) => setSelectedTiming(e.target.value)}
// // // // // // //         >
// // // // // // //           <option value="">Select Timing</option>
// // // // // // //           {availableTimings.map((timing) => (
// // // // // // //             <option key={timing} value={timing}>
// // // // // // //               {timing}
// // // // // // //             </option>
// // // // // // //           ))}
// // // // // // //         </select>
// // // // // // //       </div>
// // // // // // //       <button onClick={handleConfirmAppointment}>Confirm Appointment</button>
// // // // // // //       {appointmentConfirmed && <p>Appointment Confirmed Successfully</p>}
// // // // // // //       <button onClick={handleLogout}>Logout</button>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }

// // // // // // // export default PatientAppointments;








// // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // import { useNavigate } from 'react-router-dom';

// // // // // // // // function PatientAppointments({ patientName }) {
// // // // // // // //   const [selectedSpecialty, setSelectedSpecialty] = useState('');
// // // // // // // //   const [availableTimings, setAvailableTimings] = useState([]);
// // // // // // // //   const [selectedTiming, setSelectedTiming] = useState('');
// // // // // // // //   const [appointmentConfirmed, setAppointmentConfirmed] = useState(false);
// // // // // // // //   const [chatInput, setChatInput] = useState('');
// // // // // // // //   const [chatResponse, setChatResponse] = useState('');
// // // // // // // //   const navigate = useNavigate();

// // // // // // // //   useEffect(() => {
// // // // // // // //     if (patientName) {
// // // // // // // //       // You can fetch patient data here if needed
// // // // // // // //       // Replace with your logic
// // // // // // // //     }
// // // // // // // //   }, [patientName]);

// // // // // // // //   useEffect(() => {
// // // // // // // //     if (selectedSpecialty) {
// // // // // // // //       fetch(`http://localhost:2000/api/available-timings?specialty=${selectedSpecialty}`)
// // // // // // // //         .then((response) => response.json())
// // // // // // // //         .then((data) => {
// // // // // // // //           setAvailableTimings(data);
// // // // // // // //         })
// // // // // // // //         .catch((error) => {
// // // // // // // //           console.error('Error fetching available timings:', error);
// // // // // // // //         });
// // // // // // // //     } else {
// // // // // // // //       setAvailableTimings([]);
// // // // // // // //     }
// // // // // // // //   }, [selectedSpecialty]);

// // // // // // // //   const handleConfirmAppointment = () => {
// // // // // // // //     if (!selectedSpecialty) {
// // // // // // // //       console.error('Selected Specialty is missing.');
// // // // // // // //     }
// // // // // // // //     if (!selectedTiming) {
// // // // // // // //       console.error('Selected Timing is missing.');
// // // // // // // //     }

// // // // // // // //     if (selectedSpecialty && selectedTiming) {
// // // // // // // //       // Assuming the cost is 1000 units (you should set the actual amount)
// // // // // // // //       const paymentAmount = 1000;

// // // // // // // //       // Create an order with Razorpay
// // // // // // // //       fetch('http://localhost:2000/api/create-order', {
// // // // // // // //         method: 'POST',
// // // // // // // //         headers: {
// // // // // // // //           'Content-Type': 'application/json',
// // // // // // // //         },
// // // // // // // //         body: JSON.stringify({ amount: paymentAmount }),
// // // // // // // //       })
// // // // // // // //         .then((response) => response.json())
// // // // // // // //         .then((order) => {
// // // // // // // //           // Initialize Razorpay
// // // // // // // //           const options = {
// // // // // // // //             key: 'o4JI90isorQhnSQx8SBUDdu7',
// // // // // // // //             amount: order.amount,
// // // // // // // //             currency: order.currency,
// // // // // // // //             name: 'Your Clinic Name',
// // // // // // // //             description: 'Appointment Fee',
// // // // // // // //             order_id: order.id,
// // // // // // // //             handler: (response) => {
// // // // // // // //               // This function will be called after a successful payment
// // // // // // // //               alert('Payment Successful');
// // // // // // // //               setAppointmentConfirmed(true);
// // // // // // // //             },
// // // // // // // //           };
// // // // // // // //           const rzp = new window.Razorpay(options);
// // // // // // // //           rzp.open();
// // // // // // // //         })
// // // // // // // //         .catch((error) => {
// // // // // // // //           console.error('Error creating Razorpay order:', error);
// // // // // // // //         });
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   const handleChatSubmit = async () => {
// // // // // // // //     if (chatInput.trim() === '') return;

// // // // // // // //     try {
// // // // // // // //       // Send user input to the ChatGPT API
// // // // // // // //       const response = await fetch('YOUR_CHATGPT_API_ENDPOINT', {
// // // // // // // //         method: 'POST',
// // // // // // // //         headers: {
// // // // // // // //           'Content-Type': 'application/json',
// // // // // // // //           Authorization: 'Bearer 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',
// // // // // // // //         },
// // // // // // // //         body: JSON.stringify({ input: chatInput }),
// // // // // // // //       });

// // // // // // // //       if (response.ok) {
// // // // // // // //         const data = await response.json();
// // // // // // // //         setChatResponse(data.output); // Display chatbot response
// // // // // // // //       }
// // // // // // // //     } catch (error) {
// // // // // // // //       console.error('Error with chatbot:', error);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   const handleLogout = () => {
// // // // // // // //     navigate('/login');
// // // // // // // //   };

// // // // // // // //   return (
// // // // // // // //     <div>
// // // // // // // //       <h2>Patient Appointments</h2>
// // // // // // // //       <div className="form-group">
// // // // // // // //         <label>Select Specialty</label>
// // // // // // // //         <select
// // // // // // // //           value={selectedSpecialty}
// // // // // // // //           onChange={(e) => setSelectedSpecialty(e.target.value)}
// // // // // // // //         >
// // // // // // // //           <option value="">Select Specialty</option>
// // // // // // // //           <option value="Cardiology">Cardiology</option>
// // // // // // // //           <option value="Dermatology">Dermatology</option>
// // // // // // // //           <option value="Orthopedics">Orthopedics</option>
// // // // // // // //           {/* Add more specialties here */}
// // // // // // // //         </select>
// // // // // // // //       </div>
// // // // // // // //       <div className="form-group">
// // // // // // // //         <label>Select Timing</label>
// // // // // // // //         <select
// // // // // // // //           value={selectedTiming}
// // // // // // // //           onChange={(e) => setSelectedTiming(e.target.value)}
// // // // // // // //         >
// // // // // // // //           <option value="">Select Timing</option>
// // // // // // // //           {availableTimings.map((timing) => (
// // // // // // // //             <option key={timing} value={timing}>
// // // // // // // //               {timing}
// // // // // // // //             </option>
// // // // // // // //           ))}
// // // // // // // //         </select>
// // // // // // // //       </div>
// // // // // // // //       <button onClick={handleConfirmAppointment}>Confirm Appointment</button>
// // // // // // // //       {appointmentConfirmed && (
// // // // // // // //         <div>
// // // // // // // //           <p>Appointment Confirmed Successfully</p>
// // // // // // // //           <button onClick={handlePayment}>Make Payment</button>
// // // // // // // //         </div>
// // // // // // // //       )}
// // // // // // // //       <div className="chatbot">
// // // // // // // //         <input
// // // // // // // //           type="text"
// // // // // // // //           value={chatInput}
// // // // // // // //           onChange={(e) => setChatInput(e.target.value)}
// // // // // // // //         />
// // // // // // // //         <button onClick={handleChatSubmit}>Ask</button>
// // // // // // // //         <div className="chat-response">{chatResponse}</div>
// // // // // // // //       </div>
// // // // // // // //       <button onClick={handleLogout}>Logout</button>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // // export default PatientAppointments;









// // // // // // import React, { useState, useEffect } from 'react';
// // // // // // import { useNavigate } from 'react-router-dom';
// // // // // // import DatePicker from 'react-datepicker'; // Import the date picker component
// // // // // // import 'react-datepicker/dist/react-datepicker.css'; // Import the date picker styles

// // // // // // function PatientAppointments({ patientName }) {
// // // // // //   const [selectedSpecialty, setSelectedSpecialty] = useState('');
// // // // // //   const [availableTimings, setAvailableTimings] = useState([]);
// // // // // //   const [selectedTiming, setSelectedTiming] = useState('');
// // // // // //   const [selectedDate, setSelectedDate] = useState(null); // State for the selected date
// // // // // //   const [appointmentConfirmed, setAppointmentConfirmed] = useState(false);
// // // // // //   const navigate = useNavigate();

// // // // // //   useEffect(() => {
// // // // // //     if (patientName) {
// // // // // //       // You can fetch patient data here if needed
// // // // // //       // Replace with your logic
// // // // // //     }
// // // // // //   }, [patientName]);

// // // // // //   useEffect(() => {
// // // // // //     if (selectedSpecialty) {
// // // // // //       fetch(`http://localhost:1000/api/available-timings?specialty=${selectedSpecialty}`)
// // // // // //         .then((response) => response.json())
// // // // // //         .then((data) => {
// // // // // //           setAvailableTimings(data);
// // // // // //         })
// // // // // //         .catch((error) => {
// // // // // //           console.error('Error fetching available timings:', error);
// // // // // //         });
// // // // // //     } else {
// // // // // //       setAvailableTimings([]);
// // // // // //     }
// // // // // //   }, [selectedSpecialty]);

// // // // // //   const handleConfirmAppointment = () => {
// // // // // //     if (!selectedSpecialty) {
// // // // // //       console.error('Selected Specialty is missing.');
// // // // // //     }
// // // // // //     if (!selectedTiming) {
// // // // // //       console.error('Selected Timing is missing.');
// // // // // //     }
// // // // // //     if (!selectedDate) {
// // // // // //       console.error('Selected Date is missing.');
// // // // // //     }

// // // // // //     if (selectedSpecialty && selectedTiming && selectedDate) {
// // // // // //       const appointmentData = {
// // // // // //         patientName,
// // // // // //         specialty: selectedSpecialty,
// // // // // //         timing: selectedTiming,
// // // // // //         date: selectedDate.toISOString(), // Include the selected date
// // // // // //       };

// // // // // //       fetch('http://localhost:1000/api/appointments', {
// // // // // //         method: 'POST',
// // // // // //         headers: {
// // // // // //           'Content-Type': 'application/json',
// // // // // //         },
// // // // // //         body: JSON.stringify(appointmentData),
// // // // // //       })
// // // // // //         .then((response) => response.json())
// // // // // //         .then((data) => {
// // // // // //           alert('Appointment Confirmed');
// // // // // //           setAppointmentConfirmed(true);
// // // // // //           console.log('Appointment confirmed:', data.message);
// // // // // //         })
// // // // // //         .catch((error) => {
// // // // // //           console.error('Error confirming appointment:', error);
// // // // // //         });
// // // // // //     }
// // // // // //   };

// // // // // //   const handleLogout = () => {
// // // // // //     navigate('/login');
// // // // // //   };

// // // // // //   return (
// // // // // //     <div>
// // // // // //       <h2>Patient Appointments</h2>
// // // // // //       <div className="form-group">
// // // // // //         <label>Select Specialty</label>
// // // // // //         <select
// // // // // //           value={selectedSpecialty}
// // // // // //           onChange={(e) => setSelectedSpecialty(e.target.value)}
// // // // // //         >
// // // // // //           <option value="">Select Specialty</option>
// // // // // //           <option value="Cardiology">Cardiology</option>
// // // // // //           <option value="Dermatology">Dermatology</option>
// // // // // //           <option value="Orthopedics">Orthopedics</option>
// // // // // //           {/* Add more specialties here */}
// // // // // //         </select>
// // // // // //       </div>
// // // // // //       <div className="form-group">
// // // // // //         <label>Select Timing</label>
// // // // // //         <select
// // // // // //           value={selectedTiming}
// // // // // //           onChange={(e) => setSelectedTiming(e.target.value)}
// // // // // //         >
// // // // // //           <option value="">Select Timing</option>
// // // // // //           {availableTimings.map((timing) => (
// // // // // //             <option key={timing} value={timing}>
// // // // // //               {timing}
// // // // // //             </option>
// // // // // //           ))}
// // // // // //         </select>
// // // // // //       </div>
// // // // // //       <div className="form-group">
// // // // // //         <label>Select Date</label>
// // // // // //         <DatePicker
// // // // // //           selected={selectedDate}
// // // // // //           onChange={(date) => setSelectedDate(date)} // Set the selected date
// // // // // //           dateFormat="dd/MM/yyyy" // Date format
// // // // // //         />
// // // // // //       </div>
// // // // // //       <button onClick={handleConfirmAppointment}>Confirm Appointment</button>
// // // // // //       {appointmentConfirmed && <p>Appointment Confirmed Successfully</p>}
// // // // // //       <button onClick={handleLogout}>Logout</button>
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // // export default PatientAppointments;












// // // // // import React, { useState, useEffect } from 'react';
// // // // // import { useNavigate } from 'react-router-dom';
// // // // // import DatePicker from 'react-datepicker'; // Import the date picker component
// // // // // import 'react-datepicker/dist/react-datepicker.css'; // Import the date picker styles

// // // // // function PatientAppointments({ patientName }) {
// // // // //   const [selectedSpecialty, setSelectedSpecialty] = useState('');
// // // // //   const [availableTimings, setAvailableTimings] = useState([]);
// // // // //   const [selectedTiming, setSelectedTiming] = useState('');
// // // // //   const [selectedDate, setSelectedDate] = useState(null); // State for the selected date
// // // // //   const [appointmentType, setAppointmentType] = useState('regular'); // State for appointment type
// // // // //   const [appointmentConfirmed, setAppointmentConfirmed] = useState(false);
// // // // //   const navigate = useNavigate();

// // // // //   useEffect(() => {
// // // // //     if (patientName) {
// // // // //       // You can fetch patient data here if needed
// // // // //       // Replace with your logic
// // // // //     }
// // // // //   }, [patientName]);

// // // // //   useEffect(() => {
// // // // //     if (selectedSpecialty) {
// // // // //       fetch(`http://localhost:1000/api/available-timings?specialty=${selectedSpecialty}`)
// // // // //         .then((response) => response.json())
// // // // //         .then((data) => {
// // // // //           setAvailableTimings(data);
// // // // //         })
// // // // //         .catch((error) => {
// // // // //           console.error('Error fetching available timings:', error);
// // // // //         });
// // // // //     } else {
// // // // //       setAvailableTimings([]);
// // // // //     }
// // // // //   }, [selectedSpecialty]);

// // // // //   const handleConfirmAppointment = () => {
// // // // //     if (!selectedSpecialty) {
// // // // //       console.error('Selected Specialty is missing.');
// // // // //       return;
// // // // //     }
// // // // //     if (!selectedTiming) {
// // // // //       console.error('Selected Timing is missing.');
// // // // //       return;
// // // // //     }
// // // // //     if (!selectedDate) {
// // // // //       console.error('Selected Date is missing.');
// // // // //       return;
// // // // //     }

// // // // //     const appointmentData = {
// // // // //       patientName,
// // // // //       specialty: selectedSpecialty,
// // // // //       timing: selectedTiming,
// // // // //       date: selectedDate.toISOString(), // Include the selected date
// // // // //       appointmentType, // Include the selected appointment type
// // // // //     };

// // // // //     fetch('http://localhost:1000/api/appointments', {
// // // // //       method: 'POST',
// // // // //       headers: {
// // // // //         'Content-Type': 'application/json',
// // // // //       },
// // // // //       body: JSON.stringify(appointmentData),
// // // // //     })
// // // // //       .then((response) => response.json())
// // // // //       .then((data) => {
// // // // //         alert('Appointment Confirmed');
// // // // //         setAppointmentConfirmed(true);
// // // // //         console.log('Appointment confirmed:', data.message);
// // // // //       })
// // // // //       .catch((error) => {
// // // // //         console.error('Error confirming appointment:', error);
// // // // //       });
// // // // //   };

// // // // //   const handleLogout = () => {
// // // // //     navigate('/login');
// // // // //   };

// // // // //   return (
// // // // //     <div>
// // // // //       <h2>Patient Appointments</h2>
// // // // //       <div className="form-group">
// // // // //         <label>Select Specialty</label>
// // // // //         <select
// // // // //           value={selectedSpecialty}
// // // // //           onChange={(e) => setSelectedSpecialty(e.target.value)}
// // // // //         >
// // // // //           <option value="">Select Specialty</option>
// // // // //           <option value="Cardiology">Cardiology</option>
// // // // //           <option value="Dermatology">Dermatology</option>
// // // // //           <option value="Orthopedics">Orthopedics</option>
// // // // //           {/* Add more specialties here */}
// // // // //         </select>
// // // // //       </div>
// // // // //       <div className="form-group">
// // // // //         <label>Select Timing</label>
// // // // //         <select
// // // // //           value={selectedTiming}
// // // // //           onChange={(e) => setSelectedTiming(e.target.value)}
// // // // //         >
// // // // //           <option value="">Select Timing</option>
// // // // //           {availableTimings.map((timing) => (
// // // // //             <option key={timing} value={timing}>
// // // // //               {timing}
// // // // //             </option>
// // // // //           ))}
// // // // //         </select>
// // // // //       </div>
// // // // //       <div className="form-group">
// // // // //         <label>Select Date</label>
// // // // //         <DatePicker
// // // // //           selected={selectedDate}
// // // // //           onChange={(date) => setSelectedDate(date)} // Set the selected date
// // // // //           dateFormat="dd/MM/yyyy" // Date format
// // // // //         />
// // // // //       </div>
// // // // //       <div className="form-group">
// // // // //         <label>Select Appointment Type</label>
// // // // //         <select
// // // // //           value={appointmentType}
// // // // //           onChange={(e) => setAppointmentType(e.target.value)}
// // // // //         >
// // // // //           <option value="regular">Regular</option>
// // // // //           <option value="emergency">Emergency</option>
// // // // //         </select>
// // // // //       </div>
// // // // //       <button onClick={handleConfirmAppointment}>Confirm Appointment</button>
// // // // //       {appointmentConfirmed && <p>Appointment Confirmed Successfully</p>}
// // // // //       <button onClick={handleLogout}>Logout</button>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default PatientAppointments;










// // // // import React, { useState, useEffect } from 'react';
// // // // import { useNavigate } from 'react-router-dom';
// // // // import DatePicker from 'react-datepicker'; // Import the date picker component
// // // // import 'react-datepicker/dist/react-datepicker.css'; // Import the date picker styles

// // // // function PatientAppointments({ patientName }) {
// // // //   const [selectedSpecialty, setSelectedSpecialty] = useState('');
// // // //   const [availableTimings, setAvailableTimings] = useState([]);
// // // //   const [selectedTiming, setSelectedTiming] = useState('');
// // // //   const [selectedDate, setSelectedDate] = useState(null); // State for the selected date
// // // //   const [appointmentType, setAppointmentType] = useState('regular'); // State for appointment type
// // // //   const [appointmentConfirmed, setAppointmentConfirmed] = useState(false);
// // // //   const navigate = useNavigate();

// // // //   useEffect(() => {
// // // //     if (patientName) {
// // // //       // You can fetch patient data here if needed
// // // //       // Replace with your logic
// // // //     }
// // // //   }, [patientName]);

// // // //   useEffect(() => {
// // // //     if (selectedSpecialty) {
// // // //       fetch(`http://localhost:1000/api/available-timings?specialty=${selectedSpecialty}`)
// // // //         .then((response) => response.json())
// // // //         .then((data) => {
// // // //           setAvailableTimings(data);
// // // //         })
// // // //         .catch((error) => {
// // // //           console.error('Error fetching available timings:', error);
// // // //         });
// // // //     } else {
// // // //       setAvailableTimings([]);
// // // //     }
// // // //   }, [selectedSpecialty]);

// // // //   const handleConfirmAppointment = () => {
// // // //     if (!selectedSpecialty) {
// // // //       console.error('Selected Specialty is missing.');
// // // //       return;
// // // //     }
// // // //     if (!selectedTiming) {
// // // //       console.error('Selected Timing is missing.');
// // // //       return;
// // // //     }
// // // //     if (!selectedDate) {
// // // //       console.error('Selected Date is missing.');
// // // //       return;
// // // //     }

// // // //     const appointmentData = {
// // // //       patientName,
// // // //       specialty: selectedSpecialty,
// // // //       timing: selectedTiming,
// // // //       date: selectedDate.toISOString(), // Include the selected date
// // // //       appointmentType, // Include the selected appointment type
// // // //     };

// // // //     fetch('http://localhost:1000/api/appointments', {
// // // //       method: 'POST',
// // // //       headers: {
// // // //         'Content-Type': 'application/json',
// // // //       },
// // // //       body: JSON.stringify(appointmentData),
// // // //     })
// // // //       .then((response) => response.json())
// // // //       .then((data) => {
// // // //         alert('Appointment Confirmed');
// // // //         setAppointmentConfirmed(true);
// // // //         console.log('Appointment confirmed:', data.message);
// // // //       })
// // // //       .catch((error) => {
// // // //         console.error('Error confirming appointment:', error);
// // // //       });
// // // //   };

// // // //   const handleHealthHistory = () => {
// // // //     navigate('/HealthRecord');
// // // //   };

// // // //   const handleLogout = () => {
// // // //     navigate('/login');
// // // //   };

// // // //   return (
// // // //     <div>
// // // //       <h2>Patient Appointments</h2>
// // // //       <div className="form-group">
// // // //         <label>Select Specialty</label>
// // // //         <select
// // // //           value={selectedSpecialty}
// // // //           onChange={(e) => setSelectedSpecialty(e.target.value)}
// // // //         >
// // // //           <option value="">Select Specialty</option>
// // // //           <option value="Cardiology">Cardiology</option>
// // // //           <option value="Dermatology">Dermatology</option>
// // // //           <option value="Orthopedics">Orthopedics</option>
// // // //           {/* Add more specialties here */}
// // // //         </select>
// // // //       </div>
// // // //       <div className="form-group">
// // // //         <label>Select Date</label>
// // // //         <DatePicker
// // // //           selected={selectedDate}
// // // //           onChange={(date) => setSelectedDate(date)} // Set the selected date
// // // //           dateFormat="dd/MM/yyyy" // Date format
// // // //         />
// // // //       </div>
// // // //       <div className="form-group">
// // // //         <label>Select Timing</label>
// // // //         <select
// // // //           value={selectedTiming}
// // // //           onChange={(e) => setSelectedTiming(e.target.value)}
// // // //         >
// // // //           <option value="">Select Timing</option>
// // // //           {availableTimings.map((timing) => (
// // // //             <option key={timing} value={timing}>
// // // //               {timing}
// // // //             </option>
// // // //           ))}
// // // //         </select>
// // // //       </div>
// // // //       <div className="form-group">
// // // //         <label>Select Appointment Type</label>
// // // //         <select
// // // //           value={appointmentType}
// // // //           onChange={(e) => setAppointmentType(e.target.value)}
// // // //         >
// // // //           <option value="regular">Regular</option>
// // // //           <option value="emergency">Emergency</option>
// // // //         </select>
// // // //       </div>
// // // //       <button onClick={handleConfirmAppointment}>Confirm Appointment</button>
// // // //       <button onClick={handleHealthHistory}>Add your Health History</button>
// // // //       {appointmentConfirmed && <p>Appointment Confirmed Successfully</p>}
// // // //       <button onClick={handleLogout}>Logout</button>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default PatientAppointments;













// // // import React, { useState, useEffect } from 'react';
// // // import { useNavigate } from 'react-router-dom';
// // // import DatePicker from 'react-datepicker'; // Import the date picker component
// // // import 'react-datepicker/dist/react-datepicker.css'; // Import the date picker styles
// // // import './PatientAppointments.css';
// // // import Photo from './doct1.png';


// // // function PatientAppointments({ patientName }) {
// // //   const [selectedSpecialty, setSelectedSpecialty] = useState('');
// // //   const [availableTimings, setAvailableTimings] = useState([]);
// // //   const [selectedTiming, setSelectedTiming] = useState('');
// // //   const [selectedDate, setSelectedDate] = useState(null); // State for the selected date
// // //   const [appointmentType, setAppointmentType] = useState('regular'); // State for appointment type
// // //   const [appointmentConfirmed, setAppointmentConfirmed] = useState(false);
// // //   const navigate = useNavigate();

// // //   useEffect(() => {
// // //     if (patientName) {
// // //       // You can fetch patient data here if needed
// // //       // Replace with your logic
// // //     }
// // //   }, [patientName]);

// // //   useEffect(() => {
// // //     if (selectedSpecialty) {
// // //       fetch(`http://localhost:1000/api/available-timings?specialty=${selectedSpecialty}`)
// // //         .then((response) => response.json())
// // //         .then((data) => {
// // //           setAvailableTimings(data);
// // //         })
// // //         .catch((error) => {
// // //           console.error('Error fetching available timings:', error);
// // //         });
// // //     } else {
// // //       setAvailableTimings([]);
// // //     }
// // //   }, [selectedSpecialty]);

// // //   const handleConfirmAppointment = () => {
// // //     if (!selectedSpecialty) {
// // //       console.error('Selected Specialty is missing.');
// // //       return;
// // //     }
// // //     if (!selectedTiming) {
// // //       console.error('Selected Timing is missing.');
// // //       return;
// // //     }
// // //     if (!selectedDate) {
// // //       console.error('Selected Date is missing.');
// // //       return;
// // //     }

// // //     const appointmentData = {
// // //       patientName,
// // //       specialty: selectedSpecialty,
// // //       timing: selectedTiming,
// // //       date: selectedDate.toISOString(), // Include the selected date
// // //       appointmentType, // Include the selected appointment type
// // //     };

// // //     fetch('http://localhost:1000/api/appointments', {
// // //       method: 'POST',
// // //       headers: {
// // //         'Content-Type': 'application/json',
// // //       },
// // //       body: JSON.stringify(appointmentData),
// // //     })
// // //       .then((response) => response.json())
// // //       .then((data) => {
// // //         alert('Appointment Confirmed');
// // //         setAppointmentConfirmed(true);
// // //         console.log('Appointment confirmed:', data.message);
// // //       })
// // //       .catch((error) => {
// // //         console.error('Error confirming appointment:', error);
// // //       });
// // //   };

// // //   const handleHealthHistory = () => {
// // //     navigate('/HealthRecord');
// // //   };

// // //   const handleLogout = () => {
// // //     navigate('/login');
// // //   };

// // //   return (
// // //     <div>
      
// // //       <h2>Patient Appointments</h2>
// // //       <div className="form-group">
// // //         <label>Select Specialty</label>
// // //         <select
// // //           value={selectedSpecialty}
// // //           onChange={(e) => setSelectedSpecialty(e.target.value)}
// // //         >
// // //           <option value="">Select Specialty</option>
// // //           <option value="Cardiology">Cardiology</option>
// // //           <option value="Dermatology">Dermatology</option>
// // //           <option value="Orthopedics">Orthopedics</option>
// // //           {/* Add more specialties here */}
// // //         </select>
// // //       </div>
// // //       <div className="form-group">
// // //         <label>Select Date</label>
// // //         <DatePicker
// // //           selected={selectedDate}
// // //           onChange={(date) => setSelectedDate(date)} // Set the selected date
// // //           dateFormat="dd/MM/yyyy" // Date format
// // //         />
// // //       </div>
// // //       <div className="form-group">
// // //         <label>Select Timing</label>
// // //         <select
// // //           value={selectedTiming}
// // //           onChange={(e) => setSelectedTiming(e.target.value)}
// // //         >
// // //           <option value="">Select Timing</option>
// // //           {availableTimings.map((timing) => (
// // //             <option key={timing} value={timing}>
// // //               {timing}
// // //             </option>
// // //           ))}
// // //         </select>
// // //       </div>
// // //       <div className="form-group">
// // //         <label>Select Appointment Type</label>
// // //         <select
// // //           value={appointmentType}
// // //           onChange={(e) => setAppointmentType(e.target.value)}
// // //         >
// // //           <option value="regular">Regular</option>
// // //           <option value="emergency">Emergency</option>
// // //         </select>
// // //       </div>
// // //       <button onClick={handleConfirmAppointment}>Confirm Appointment</button>
// // //       <button onClick={handleHealthHistory}>Add your Health History</button>
// // //       {appointmentConfirmed && <p>Appointment Confirmed Successfully</p>}
// // //       <button onClick={handleLogout}>Logout</button>
// // //       <div class="image-container">
// // //     <img src={Photo} alt="Describe the image here" className='docimg' />
// // //   </div>
// // //     </div>
// // //   );
// // // }

// // // export default PatientAppointments;










// // import React, { useState, useEffect } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import DatePicker from 'react-datepicker'; // Import the date picker component
// // import 'react-datepicker/dist/react-datepicker.css'; // Import the date picker styles
// // import './PatientAppointments.css';
// // import Photo from './papoint.png';


// // function PatientAppointments({ patientName }) {
// //   const [selectedSpecialty, setSelectedSpecialty] = useState('');
// //   const [availableTimings, setAvailableTimings] = useState([]);
// //   const [selectedTiming, setSelectedTiming] = useState('');
// //   const [selectedDate, setSelectedDate] = useState(null); // State for the selected date
// //   const [appointmentType, setAppointmentType] = useState('regular'); // State for appointment type
// //   const [appointmentConfirmed, setAppointmentConfirmed] = useState(false);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     if (patientName) {
// //       // You can fetch patient data here if needed
// //       // Replace with your logic
// //     }
// //   }, [patientName]);

// //   useEffect(() => {
// //     if (selectedSpecialty) {
// //       fetch(`http://localhost:1000/api/available-timings?specialty=${selectedSpecialty}`)
// //         .then((response) => response.json())
// //         .then((data) => {
// //           setAvailableTimings(data);
// //         })
// //         .catch((error) => {
// //           console.error('Error fetching available timings:', error);
// //         });
// //     } else {
// //       setAvailableTimings([]);
// //     }
// //   }, [selectedSpecialty]);

// //   const handleConfirmAppointment = () => {
// //     if (!selectedSpecialty) {
// //       console.error('Selected Specialty is missing.');
// //       return;
// //     }
// //     if (!selectedTiming) {
// //       console.error('Selected Timing is missing.');
// //       return;
// //     }
// //     if (!selectedDate) {
// //       console.error('Selected Date is missing.');
// //       return;
// //     }

// //     const appointmentData = {
// //       patientName,
// //       specialty: selectedSpecialty,
// //       timing: selectedTiming,
// //       date: selectedDate.toISOString(), // Include the selected date
// //       appointmentType, // Include the selected appointment type
// //     };

// //     fetch('http://localhost:1000/api/appointments', {
// //       method: 'POST',
// //       headers: {
// //         'Content-Type': 'application/json',
// //       },
// //       body: JSON.stringify(appointmentData),
// //     })
// //       .then((response) => response.json())
// //       .then((data) => {
// //         alert('Appointment Confirmed');
// //         setAppointmentConfirmed(true);
// //         console.log('Appointment confirmed:', data.message);
// //       })
// //       .catch((error) => {
// //         console.error('Error confirming appointment:', error);
// //       });
// //   };

// //   const handleHealthHistory = () => {
// //     navigate('/HealthRecord');
// //   };

// //   const handleLogout = () => {
// //     navigate('/login');
// //   };

// //   return (
// // <div className="appointments-container">
// //       <div className="appointments-form">
// //         <div className="greeting">
// //           <h1>Hi! {patientName},</h1>
// //           <h2>Book your next appointment</h2>
// //         </div>
// //         <div className="form-grid">
// //           <div className="form-group">
// //             <label>Specialty</label>
// //             <select
// //               value={selectedSpecialty}
// //               onChange={(e) => setSelectedSpecialty(e.target.value)}
// //             >
// //               {/* Options */}
// //             </select>
// //           </div>
// //           <div className="form-group">
// //             <label>Date</label>
// //             <DatePicker
// //               selected={selectedDate}
// //               onChange={(date) => setSelectedDate(date)}
// //               dateFormat="dd/MM/yyyy"
// //             />
// //           </div>
// //           <div className="form-group">
// //             <label>Available Timings</label>
// //             <select
// //               value={selectedTiming}
// //               onChange={(e) => setSelectedTiming(e.target.value)}
// //             >
// //               {/* Timing options */}
// //             </select>
// //           </div>
// //           <div className="form-group">
// //             <label>Appointment Type</label>
// //             <select
// //               value={appointmentType}
// //               onChange={(e) => setAppointmentType(e.target.value)}
// //             >
// //               {/* Appointment types */}
// //             </select>
// //           </div>
// //         </div>
// //         <div className="form-group2">
// //           <textarea placeholder="Write your problem"></textarea>
// //         </div>
// //         <div className="form-group">
// //           <button onClick={handleConfirmAppointment}>Set Appointment</button>
// //         </div>
// //       </div>
// //       <div className="appointments-image">
// //         <img src={Photo} alt="Doctor and patient" className="docimg" />
// //       </div>
// //     </div>
// //   );
// // }

// // export default PatientAppointments;









// //  import React, { useState, useEffect } from 'react';
// //  import { useNavigate } from 'react-router-dom';
// //  import DatePicker from 'react-datepicker'; // Import the date picker component
// //  import 'react-datepicker/dist/react-datepicker.css'; // Import the date picker styles
// //  import './css/PatientAppointments.css';
// //  import Photo from './images/papoint.png';
// //  import Chatbot from "./ChatBot.js";
// //  //import { TimingsProvider } from './TimingsContext';
// //  //import FetchTest from './FetchTest';
 
 
 
// //  function PatientAppointments({ patientName }) 
// //  {
// //    const [selectedSpecialty, setSelectedSpecialty] = useState('');
// //    const [availableTimings, setAvailableTimings] = useState([]);
// //    const [selectedTiming, setSelectedTiming] = useState('');
// //    const [selectedDate, setSelectedDate] = useState(new Date()); // State for the selected date
// //    const [appointmentType, setAppointmentType] = useState('regular'); // State for appointment type
// //    const [appointmentConfirmed, setAppointmentConfirmed] = useState(false);
// //    const [timings, setTimings] = useState([]);
// //   const navigate = useNavigate();
  
// //   useEffect(() => {
// //     if (patientName) {
// //       // You can fetch patient data here if needed
// //       // Replace with your logic
// //     }

// //    }, [patientName]);

// //        useEffect(() => {
// //      if (selectedSpecialty) {
// //       fetch(``)
// //         .then((response) => response.json())
// //         .then((data) => {
// //           setAvailableTimings(data);
// //         })
// //         .catch((error) => {
// //           console.error('Error fetching available timings:', error);
// //         });
// //     } else {
// //       setAvailableTimings([]);
// //     }
// //   }, [selectedSpecialty]);

// //     useEffect(() => {
// //         fetch('')
// //             .then(response => response.json())
// //             .then(data => {
// //                 setTimings(data.items);
// //             })
// //             .catch(error => console.error('Error:', error));
// //     }, []);



// //   const handleConfirmAppointment = () => {
// //     if (!selectedSpecialty) {
// //       console.error('Selected Specialty is missing.');
// //       return;
// //     }
// //     if (!selectedTiming) {
// //       console.error('Selected Timing is missing.');
// //       return;
// //     }
// //     if (!selectedDate) {
// //       console.error('Selected Date is missing.');
// //       return;
// //     }

// //     const appointmentData = {
// //       patientName,
// //       specialty: selectedSpecialty,
// //       timing: selectedTiming,
// //       date: selectedDate.toISOString(), // Include the selected date
// //       appointmentType, // Include the selected appointment type
// //     };

// //     fetch('', {
// //       method: 'POST',
// //       headers: {
// //         'Content-Type': 'application/json',
// //       },
// //       body: JSON.stringify(appointmentData),
// //     })
// //       .then((response) => response.json())
// //       .then((data) => {
// //         alert('Appointment Confirmed');
// //         setAppointmentConfirmed(true);
// //         console.log('Appointment confirmed:', data.message);
// //       })
// //       .catch((error) => {
// //         console.error('Error confirming appointment:', error);
// //       });
// //   };

// //   const handleHealthHistory = () => {
// //     navigate('/HealthRecord');
// //   };

// //   const handleLogout = () => {
// //     navigate('/login');
// //   };

// //   return (
// //     <div>
      
// //       <div className="appointments-container">
// //       <div className="appointments-form">
// //         <div className="greeting">
// //           <h1 className='book' >Hi! {patientName} Book your next appointment</h1>
// //         </div>
// //         <div className="form-grid">
// //       <div className="form-group">
// //          <label>Select Specialty</label>
// //          <select
// //           value={selectedSpecialty}
// //           onChange={(e) => setSelectedSpecialty(e.target.value)}
// //         >
// //           <option value="">Select Specialty</option>
// //           <option value="Cardiology">Cardiology</option>
// //           <option value="Dermatology">Dermatology</option>
// //           <option value="Orthopedics">Orthopedics</option>
// //           {/* Add more specialties here */}
// //         </select>
// //       </div>
// //       <div className="form-group">
// //         <label>Select Date</label>
// //         <DatePicker
// //           selected={selectedDate}
// //           onChange={(date) => setSelectedDate(date)} // Set the selected date
// //           dateFormat="dd/MM/yyyy" // Date format
// //           minDate={new Date()}
// //         />
// //       </div>
// //       <div className="form-group">
// //         <label>Select Timing</label>
// //         <select>
// //           <option>
// //             9:00
// //           </option>
// //           <option>
// //             10:00 
// //           </option>
// //           <option>
// //             11:00
// //           </option>
// //         </select>
// //       </div>
// //       <div className="form-group">
// //         <label>Select Appointment Type</label>
// //         <select
// //           value={appointmentType}
// //           onChange={(e) => setAppointmentType(e.target.value)}
// //         >
// //           <option value="regular">Regular</option>
// //           <option value="emergency">Emergency</option>
// //         </select>
// //       </div>
// //          </div>
// //         <div className="form-group2">
// //           <textarea placeholder="Write your problem"></textarea>
// //         </div>
// //         <div className="form-group">
// //         <div className="button-group">
// //   <button onClick={handleConfirmAppointment} className="button set-appointment">Set Appointment</button>
// //   <button onClick={handleLogout} className="button-logout-pat">Logout</button>
// // </div>
// //         </div>
// //       </div>
         
       
// //        {appointmentConfirmed && <p className='confirmation-message'></p>}
       
// //        <div className="appointments-image">
// //         <img src={Photo} alt="Doctor and patient" className="docimg" />
// //       </div>
// //      </div>
// //      <Chatbot/>        
// //      </div>
// //    );
// //  }

// //  export default PatientAppointments;


// import { Button, Col, DatePicker, Form, Input, Row, TimePicker } from "antd";
// import React, { useEffect, useState } from "react";
// import Layout from "../components/Layout";
// import { useDispatch, useSelector } from "react-redux";
// import { showLoading, hideLoading } from "../redux/alertsSlice";
// import { toast } from "react-hot-toast";
// import axios from "axios";
// import { Navigate, useNavigate, useParams } from "react-router-dom";
// import DoctorForm from "../components/DoctorForm";
// import moment from "moment";

// function BookAppointment() {
//   const [isAvailable, setIsAvailable] = useState(false);
//   const navigate = useNavigate();
//   const [date, setDate] = useState();
//   const [time, setTime] = useState();
//   const { user } = useSelector((state) => state.user);
//   const [doctor, setDoctor] = useState(null);
//   const params = useParams();
//   const dispatch = useDispatch();

//   const getDoctorData = async () => {
//     try {
//       dispatch(showLoading());
//       const response = await axios.post(
//         "/api/doctor/get-doctor-info-by-id",
//         {
//           doctorId: params.doctorId,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );

//       dispatch(hideLoading());
//       if (response.data.success) {
//         setDoctor(response.data.data);
//       }
//     } catch (error) {
//       console.log(error);
//       dispatch(hideLoading());
//     }
//   };
//   const checkAvailability = async () => {
//     try {
//       dispatch(showLoading());
//       const response = await axios.post(
//         "/api/user/check-booking-avilability",
//         {
//           doctorId: params.doctorId,
//           date: date,
//           time: time,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );
//       dispatch(hideLoading());
//       if (response.data.success) {
//         toast.success(response.data.message);
//         setIsAvailable(true);
//       } else {
//         toast.error(response.data.message);
//       }
//     } catch (error) {
//       toast.error("Error booking appointment");
//       dispatch(hideLoading());
//     }
//   };
//   const bookNow = async () => {
//     setIsAvailable(false);
//     try {
//       dispatch(showLoading());
//       const response = await axios.post(
//         "/api/user/book-appointment",
//         {
//           doctorId: params.doctorId,
//           userId: user._id,
//           doctorInfo: doctor,
//           userInfo: user,
//           date: date,
//           time: time,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         }
//       );

//       dispatch(hideLoading());
//       if (response.data.success) {
        
//         toast.success(response.data.message);
//         navigate('/appointments')
//       }
//     } catch (error) {
//       toast.error("Error booking appointment");
//       dispatch(hideLoading());
//     }
//   };

//   useEffect(() => {
//     getDoctorData();
//   }, []);
//   return (
//     <Layout>
//       {doctor && (
//         <div>
//           <h1 className="page-title">
//             {doctor.firstName} {doctor.lastName}
//           </h1>
//           <hr />
//           <Row gutter={20} className="mt-5" align="middle">

//             <Col span={8} sm={24} xs={24} lg={8}>
//               <img
//                 src="https://thumbs.dreamstime.com/b/finger-press-book-now-button-booking-reservation-icon-online-149789867.jpg"
//                 alt=""
//                 width="100%"
//                 height='400'
//               />
//             </Col>
//             <Col span={8} sm={24} xs={24} lg={8}>
//               <h1 className="normal-text">
//                 <b>Timings :</b> {doctor.timings[0]} - {doctor.timings[1]}
//               </h1>
//               <p>
//                 <b>Phone Number : </b>
//                 {doctor.phoneNumber}
//               </p>
//               <p>
//                 <b>Address : </b>
//                 {doctor.address}
//               </p>
//               <p>
//                 <b>Fee per Visit : </b>
//                 {doctor.feePerCunsultation}
//               </p>
//               <p>
//                 <b>Website : </b>
//                 {doctor.website}
//               </p>
//               <div className="d-flex flex-column pt-2 mt-2">
//                 <DatePicker
//                   format="DD-MM-YYYY"
//                   onChange={(value) => {
//                     setDate(moment(value).format("DD-MM-YYYY"));
//                     setIsAvailable(false);
//                   }}
//                 />
//                 <TimePicker
//                   format="HH:mm"
//                   className="mt-3"
//                   onChange={(value) => {
//                     setIsAvailable(false);
//                     setTime(moment(value).format("HH:mm"));
//                   }}
//                 />
//               {!isAvailable &&   <Button
//                   className="primary-button mt-3 full-width-button"
//                   onClick={checkAvailability}
//                 >
//                   Check Availability
//                 </Button>}

//                 {isAvailable && (
//                   <Button
//                     className="primary-button mt-3 full-width-button"
//                     onClick={bookNow}
//                   >
//                     Book Now
//                   </Button>
//                 )}
//               </div>
//             </Col>
           
//           </Row>
//         </div>
//       )}
//     </Layout>
//   );
// }

// export default BookAppointment;

