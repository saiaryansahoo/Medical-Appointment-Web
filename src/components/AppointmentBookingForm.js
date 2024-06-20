import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AppointmentBookingForm() {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [doctor, setDoctor] = useState('');
  const [purpose, setPurpose] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    await axios.post('http://localhost:5000/appointments', { date, time, doctor, purpose }, {
      headers: { Authorization: token }
    });
    alert('Appointment booked');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
      <input type="text" placeholder="Doctor" value={doctor} onChange={(e) => setDoctor(e.target.value)} required />
      <input type="text" placeholder="Purpose" value={purpose} onChange={(e) => setPurpose(e.target.value)} required />
      <button type="submit">Book Appointment</button>
    </form>
  );
}

export default AppointmentBookingForm;
