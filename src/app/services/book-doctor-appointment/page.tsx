'use client'
import React, { useState } from 'react';

const BookDoctorAppointment = () => {
  const [formData, setFormData] = useState({
    patientName: '',
    patientAge: '',
    doctorName: '',
    appointmentTime: '',
    category: '',
    department: '',
    emergency: false,
    insurance: false,
    paymentMethod: ''
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <h2>Book Doctor Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="patientName">Patient Name:</label>
          <input type="text" id="patientName" name="patientName" value={formData.patientName} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="patientAge">Patient Age:</label>
          <input type="number" id="patientAge" name="patientAge" value={formData.patientAge} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="doctorName">Doctor Name:</label>
          <input type="text" id="doctorName" name="doctorName" value={formData.doctorName} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="appointmentTime">Appointment Time:</label>
          <input type="datetime-local" id="appointmentTime" name="appointmentTime" value={formData.appointmentTime} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <select id="category" name="category" value={formData.category} onChange={handleInputChange}>
            <option value="">Select category</option>
            <option value="General Practitioner (GP)">General Practitioner (GP)</option>
            <option value="Internal Medicine Physician">Internal Medicine Physician</option>
            <option value="Pediatrician">Pediatrician</option>
            <option value="Cardiologist">Cardiologist</option>
            <option value="Dermatologist">Dermatologist</option>
          </select>
        </div>
        <div>
          <label htmlFor="department">Department:</label>
          <select id="department" name="department" value={formData.department} onChange={handleInputChange}>
            <option value="">Select department</option>
            <option value="Primary Care">Primary Care</option>
            <option value="Specialty Care">Specialty Care</option>
            <option value="Emergency Medicine">Emergency Medicine</option>
            <option value="Radiology">Radiology</option>
            <option value="Surgery">Surgery</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" name="emergency" checked={formData.emergency} onChange={handleInputChange} /> Emergency
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" name="insurance" checked={formData.insurance} onChange={handleInputChange} /> Insurance
          </label>
        </div>
        <div>
          <label>
            <input type="radio" name="paymentMethod" value="cash" checked={formData.paymentMethod === 'cash'} onChange={handleInputChange} /> Cash
          </label>
          <label>
            <input type="radio" name="paymentMethod" value="card" checked={formData.paymentMethod === 'card'} onChange={handleInputChange} /> Card
          </label>
        </div>
        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
};

export default BookDoctorAppointment;

