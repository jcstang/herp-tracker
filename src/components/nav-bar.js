import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import styles from './navbar.module.css';

import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './login-button';
import LogoutButton from './logout-button';

const MainNav = () => {
  return (
    <Nav className='mr-auto'>
      <Nav.Link
        as={RouterNavLink}
        to='/'
        exact
        activeClassName='router-link-exact-active'
      >
        Home
      </Nav.Link>
      <Nav.Link
        as={RouterNavLink}
        to='/profile'
        exact
        activeClassName='router-link-exact-active'
      >
        Profile
      </Nav.Link>
    </Nav>
  );
};

const AuthNav = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <Nav className='justify-content-end'>
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
    </Nav>
  );
};

const AppNavBar = () => {
  return (
    <Navbar bg='light' expand='md' className={styles.topnav}>
      <Container
        className={'d-flex justify-content-start' + styles.topnav}
        fluid
      >
        <Navbar.Brand as={RouterNavLink} className='logo' to='/'>
          <img
            src='herp-tracker-logo.png'
            width='160'
            height='80'
            className='d-inline-block align-top'
            alt='React Bootstrap logo'
          />
        </Navbar.Brand>
        <h1 className={styles.bigblue}>Herp-Tracker-test</h1>
        <MainNav />
        <AuthNav /> {/* decide whether to give a login or logout button */}
      </Container>
    </Navbar>
  );
};

export default AppNavBar;
