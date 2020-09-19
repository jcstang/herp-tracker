import React from 'react';
import { Container } from 'react-bootstrap';

const MainPage = (props) => {
  return (
    <Container className='App' fluid>
      {props.children}
    </Container>
  );
};

export default MainPage;
