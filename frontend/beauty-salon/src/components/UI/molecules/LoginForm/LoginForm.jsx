import React, { useState } from 'react';
import axios from 'axios';
import {
  ErrorMessage,
  FormGroup,
  StyledForm,
  StyledWrapper,
  SubmitButton,
} from './LoginForm.styled';

const DB_ENDPOINT = process.env.DB_ENDPOINT;

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const resp = await axios.post(DB_ENDPOINT + '/admin/sign-in', {
        email,
        password,
      });
      console.log(resp.data);
      alert('Successfully logged in');
      localStorage.setItem('isAuthenticated', 'true');
      window.location.assign('/clients');
    } catch (error) {
      console.log(error);
      setPassword('');
      setEmail('');
      if (error.response && error.response.status === 404) {
        setErrorMessage('Entered email does not exist');
      } else {
        setErrorMessage('Entered password is invalid');
      }
    }
  }

  return (
    <StyledWrapper>
      <StyledForm onSubmit={handleSubmit}>
        <h2>Login Form</h2>
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
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
              setErrorMessage('');
            }}
            required
          />
          {errorMessage && (
            <ErrorMessage style={{ color: 'red' }}>{errorMessage}</ErrorMessage>
          )}
        </FormGroup>
        <SubmitButton type="submit">Sign In</SubmitButton>
      </StyledForm>
    </StyledWrapper>
  );
}
