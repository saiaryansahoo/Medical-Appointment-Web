// File: models/Appointment.js
const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  date: Date,
  time: String,
  doctor: String,
  purpose: String,
});

module.exports = mongoose.model('Appointment', appointmentSchema);
