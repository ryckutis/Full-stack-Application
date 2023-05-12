import React, { useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import {
  StyledModalBackground,
  StyledModalContent,
} from './ModificationModal.styled';

const DB_ENDPOINT = 'http://localhost:4000';

export default function ModificationModal({ user, onClose, show }) {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [registrationDate, setRegistrationDate] = useState(
    moment(user.registrationDate).format('YYYY-MM-DDTHH:mm')
  );

  async function handleSave() {
    try {
      const resp = await axios.put(DB_ENDPOINT + `/user-update/${user._id}`, {
        firstName,
        lastName,
        email,
        registrationDate: moment(registrationDate).toDate(),
      });
      console.log(resp.data);
      window.location.reload();
      onClose();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div show={show}>
      <StyledModalBackground>
        <StyledModalContent>
          <h2>Modify User Information</h2>
          <label>
            First Name:
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
          <label>
            Last Name:
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Registration Date:
            <input
              type="datetime-local"
              value={registrationDate}
              onChange={(e) => setRegistrationDate(e.target.value)}
            />
          </label>

          <button onClick={handleSave}>Save</button>
          <button onClick={onClose}>Cancel</button>
        </StyledModalContent>
      </StyledModalBackground>
    </div>
  );
}
