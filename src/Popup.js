import React, { useState } from 'react';
import './Popup.css';

const Popup = ({ onClose }) => {
  const [prescriptionNames, setPrescriptionNames] = useState('');
  const [inputHeight, setInputHeight] = useState(40); // Initial height of the input field

  const handlePrescriptionNamesChange = (event) => {
    setPrescriptionNames(event.target.value);
    // Calculate the number of lines in the textarea
    const lines = event.target.value.split('\n').length;
    // Set the height of the textarea based on the number of lines (minimum 40px)
    setInputHeight(Math.max(40, lines * 20));
  };

  const handleSendPrescriptions = () => {
    const prescriptionsArray = prescriptionNames.split(',').map(prescription => prescription.trim());
    if (prescriptionsArray.length > 0 && prescriptionsArray[0] !== '') {
      alert(`Prescriptions sent for: ${prescriptionsArray.join(', ')}`);
      setPrescriptionNames('');
      setInputHeight(40); // Reset input field height after sending prescriptions
    } else {
      alert('Please enter at least one prescription name.');
    }
  };

  return (
    <div className="popup">
      <div className="popup-content">
        <textarea
          placeholder="Enter prescription names separated by commas..."
          value={prescriptionNames}
          onChange={handlePrescriptionNamesChange}
          style={{ height: `${inputHeight}px`}} // Set a fixed width
        />
        <button className="PopSend"onClick={handleSendPrescriptions}>Send</button>
        <button className="PopClose"onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Popup;
