import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { Card } from '../components';
import Fab from '@material-ui/core/Fab';
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
    <>
      <Container className='pet-container row' fluid>
        {petList.map((pet, index) => (
          <Card petName={pet.name} key={index} />
        ))}

        <Fab color='secondary' aria-label='add' onClick={plusBtnClicked}>
          <AddIcon />
        </Fab>
        <Button className='my-float-button' variant='warning'>
          <AddIcon />
        </Button>
      </Container>
    </>
  );
};

export default Home;
