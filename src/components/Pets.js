import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import { Card } from '../components';
import { Card } from './index';

const Pets = (props) => {
  const { petList, children } = props;
  return (
    <Container className='pet-container' fluid>
      <Container>
        <Row>
          <Col sm={8} style={{ border: '2px solid pink' }}>
            sm=8
          </Col>
          <Col sm={4} style={{ border: '2px solid red' }}>
            sm=4
          </Col>
        </Row>
        <Row>
          <Col sm style={{ border: '2px solid green' }}>
            sm=true
          </Col>
          <Col sm style={{ border: '2px solid orange' }}>
            sm=true
          </Col>
          <Col sm style={{ border: '2px solid purple' }}>
            sm=true
          </Col>
        </Row>
      </Container>
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
