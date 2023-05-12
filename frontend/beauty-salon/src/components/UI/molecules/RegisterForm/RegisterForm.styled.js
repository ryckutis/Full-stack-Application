import styled from 'styled-components';

export const StyledWrapper = styled.div`
  max-width: 600px;
  text-align: center;
  background-color: var(--background-color);
  border-radius: 10px;
  box-shadow: var(--box-shadow);
  margin: 0 auto;

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 3rem;
    padding-top: 2rem;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  width: 60%;
  max-width: 500px;

  label {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  input {
    padding: 0.5rem;
    font-size: 1rem;
    border: none;
    border-radius: 10px;
    border-bottom: 2px solid #ccc;
    outline: none;
    transition: border-bottom-color 0.3s ease;

    &:focus {
      border-bottom-color: #333;
    }
  }
`;

export const SubmitButton = styled.button`
  background-color: #0077cc;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #005fa3;
  }
`;
