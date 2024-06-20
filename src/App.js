import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import RegistrationForm from './components/RegistraionForm';
import LoginForm from './components/LoginForm';
import AppointmentBookingForm from './components/AppointmentBookingForm';
import AppointmentList from './components/AppointmentList';
import AppointmentManagement from './components/AppointmentManagement';


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/register" component={RegistrationForm} />
          <Route path="/login" component={LoginForm} />
          <Route path="/book-appointment" component={AppointmentBookingForm} />
          <Route path="/appointments" component={AppointmentList} />
          <Route path="/admin/appointments" component={AppointmentManagement} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
