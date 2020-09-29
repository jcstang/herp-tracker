import React from 'react';
import { Container, Row } from 'react-bootstrap';
// import { Card } from '../components';
import { Card } from './index';

const Pets = (props) => {
  const { petList, children } = props;
  return (
    <Container className='pet-container' fluid>
      <Row>
        {petList.map((pet, index) => (
          <Card petName={pet.name} key={index} />
        ))}
      </Row>
      {children}
    </Container>
  );
};

export default Pets;
