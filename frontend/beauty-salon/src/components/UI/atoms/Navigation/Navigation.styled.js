import styled from 'styled-components';

export const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  margin: 2em auto;

  a {
    margin: 0 10px;
    font-weight: bold;
    text-decoration: none;
    color: #333;
    border-radius: 10px;
    padding: 1em;
    background-color: var(--background-color);
    box-shadow: var(--box-shadow);
    transition: background-color 0.3s, box-shadow 0.3s;

    :hover {
      background-color: #eee;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    }
    :active {
      background-color: #ccc;
      box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
    }
    :last-child {
      :hover {
        background-color: darkred;
        color: whitesmoke;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
      }
    }
  }
`;
