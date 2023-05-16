import React, { useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import {
  StyledModalBackground,
  StyledModalContent,
  StyledError,
} from './ModificationModal.styled';

const DB_ENDPOINT = process.env.DB_ENDPOINT;

export default function ModificationModal({ user, onClose, show }) {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [registrationDate, setRegistrationDate] = useState(
    moment(user.registrationDate).format('YYYY-MM-DDTHH:mm')
  );
  const [error, setError] = useState('');

  async function handleSave() {
    if (!email || !registrationDate) {
      setError('Email and registration date fields are required *.');
      return;
    }
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

  const errorVisibility = () => {
    setError('');
  };

  return (
    <>
      {show && (
        <StyledModalBackground>
          <StyledModalContent onSubmit={handleSave}>
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
              Email: *
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  errorVisibility();
                }}
                required
              />
            </label>
            <label>
              Registration Date: *
              <input
                type="datetime-local"
                value={registrationDate}
                onChange={(e) => {
                  setRegistrationDate(e.target.value);
                  errorVisibility();
                }}
                required
              />
            </label>
            {error && <StyledError>{error}</StyledError>}
            <button type="submit">Save</button>
            <button onClick={onClose}>Cancel</button>
          </StyledModalContent>
        </StyledModalBackground>
      )}
    </>
  );
}
