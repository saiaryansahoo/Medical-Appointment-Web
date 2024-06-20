import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AppointmentList() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5000/appointments', {
        headers: { Authorization: token }
      });
      setAppointments(response.data);
    };

    fetchAppointments();
  }, []);

  return (
    <div>
      <h2>Your Appointments</h2>
      <ul>
        {appointments.map(appointment => (
          <li key={appointment._id}>{appointment.date} - {appointment.time} with Dr. {appointment.doctor} for {appointment.purpose}</li>
        ))}
      </ul>
    </div>
  );
}

export default AppointmentList;
