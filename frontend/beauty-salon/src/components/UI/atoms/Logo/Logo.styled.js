import styled from 'styled-components';

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: var(--background-color);
  margin: 1em auto;
  padding: 0.5em;
  box-shadow: var(--box-shadow);
`;

export const StyledImg = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
`;

export const StyledH1 = styled.h1`
  margin-top: 10px;
  text-align: center;
`;
