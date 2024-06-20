import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AppointmentManagement() {
  const [appointments, setAppointments] = useState([]);
  const [newAppointment, setNewAppointment] = useState({ date: '', time: '', doctor: '', purpose: '' });

  useEffect(() => {
    const fetchAppointments = async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5000/admin/appointments', {
        headers: { Authorization: token }
      });
      setAppointments(response.data);
    };

    fetchAppointments();
  }, []);

  const handleDelete = async (id) => {
    const token = localStorage.getItem('token');
    await axios.delete(`http://localhost:5000/admin/appointments/${id}`, {
      headers: { Authorization: token }
    });
    setAppointments(appointments.filter(app => app._id !== id));
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const response = await axios.post('http://localhost:5000/admin/appointments', newAppointment, {
      headers: { Authorization: token }
    });
    setAppointments([...appointments, response.data]);
  };

  return (
    <div>
      <h2>Manage Appointments</h2>
      <form onSubmit={handleCreate}>
        <input type="date" value={newAppointment.date} onChange={(e) => setNewAppointment({ ...newAppointment, date: e.target.value })} required />
        <input type="time" value={newAppointment.time} onChange={(e) => setNewAppointment({ ...newAppointment, time: e.target.value })} required />
        <input type="text" placeholder="Doctor" value={newAppointment.doctor} onChange={(e) => setNewAppointment({ ...newAppointment, doctor: e.target.value })} required />
        <input type="text" placeholder="Purpose" value={newAppointment.purpose} onChange={(e) => setNewAppointment({ ...newAppointment, purpose: e.target.value })} required />
        <button type="submit">Add Appointment</button>
      </form>
      <ul>
        {appointments.map(app => (
          <li key={app._id}>
            {app.date} - {app.time} with Dr. {app.doctor} for {app.purpose}
            <button onClick={() => handleDelete(app._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AppointmentManagement;
