import React from 'react';
import { Link } from 'react-router-dom';
import { StyledNav } from './Navigation.styled';

export default function Navigation() {
  function handleLogout() {
    localStorage.removeItem('isAuthenticated');
    window.location.assign('/');
  }

  return (
    <StyledNav>
      <Link to="/clients">Clients List</Link>
      <Link to="/register">Register New Client</Link>
      <Link onClick={handleLogout}>Log Out</Link>
    </StyledNav>
  );
}
