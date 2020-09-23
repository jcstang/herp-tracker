import React, { useState } from 'react';
import { Container, Col, Button, Row } from 'react-bootstrap';
import { Card } from '../components';
import AddIcon from '@material-ui/icons/Add';

const Home = (props) => {
  const [petList, setPetList] = useState([
    {
      name: 'Zelda',
    },
    {
      name: 'Ted',
    },
    {
      name: 'Gimli',
    },
    {
      name: 'Dharma',
    },
    {
      name: 'Bun-Bun',
    },
  ]);

  const plusBtnClicked = (event) => {
    event.preventDefault();
    console.log('plus button clicked');
    const newList = [...petList];
    newList.push({ name: 'Snek' });
    setPetList(newList);
  };

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

      {/* next section of card list */}
      <Row>
        {petList.map((pet, index) => (
          <Card petName={pet.name} key={index} />
        ))}
      </Row>
      {/* Floating action button */}
      <Button
        className='my-float-button'
        variant='warning'
        onClick={plusBtnClicked}
      >
        <AddIcon />
      </Button>
    </Container>
  );
};

export default Home;
