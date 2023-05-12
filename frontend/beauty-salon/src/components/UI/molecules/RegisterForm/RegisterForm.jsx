import React, { useState } from 'react';
import axios from 'axios';
import {
  FormGroup,
  StyledForm,
  StyledWrapper,
  SubmitButton,
} from './RegisterForm.styled';

const DB_ENDPOINT = 'http://localhost:4000';

export default function RegisterForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [registrationDate, setRegistrationDate] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const resp = await axios.post(DB_ENDPOINT + '/register', {
        firstName,
        lastName,
        email,
        registrationDate,
      });
      console.log(resp.data);
      alert('User created successfully!');
    } catch (error) {
      console.log(error);
      alert('Error creating user!');
    }

    setFirstName('');
    setLastName('');
    setEmail('');
    setRegistrationDate('');
  }

  return (
    <StyledWrapper>
      <h2>Register Form</h2>
      <StyledForm onSubmit={handleSubmit}>
        <FormGroup>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="registrationDate">Registration Date:</label>
          <input
            type="datetime-local"
            id="registrationDate"
            value={
              registrationDate
                ? new Date(registrationDate).toISOString().slice(0, -8)
                : ''
            }
            onChange={(event) => setRegistrationDate(event.target.value)}
            required
          />
        </FormGroup>
        <SubmitButton type="submit">Register</SubmitButton>
      </StyledForm>
    </StyledWrapper>
  );
}
