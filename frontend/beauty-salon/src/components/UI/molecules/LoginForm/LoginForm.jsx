import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import {
  ErrorMessage,
  FormGroup,
  ShowButton,
  StyledForm,
  StyledShowButtonDiv,
  StyledWrapper,
  SubmitButton,
  StyledLoader,
} from './LoginForm.styled';
import { loginAdmin } from '../../../../api calls/admin';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    try {
      await loginAdmin(email, password);
      localStorage.setItem('isAuthenticated', 'true');
      window.location.assign('/clients');
    } catch (error) {
      console.log(error);
      setPassword('');
      setErrorMessage('Entered password is invalid');
    } finally {
      setIsLoading(false);
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

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
          <StyledShowButtonDiv>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
                setErrorMessage('');
              }}
              required
            />
            <ShowButton type="button" onClick={togglePasswordVisibility}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </ShowButton>
          </StyledShowButtonDiv>

          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </FormGroup>
        {isLoading ? (
          <StyledLoader />
        ) : (
          <SubmitButton type="submit">Sign In</SubmitButton>
        )}
        <p>
          Don't have an account?{' '}
          <Link to="/admin-register">Click here to register</Link>
        </p>
      </StyledForm>
    </StyledWrapper>
  );
}
