import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Card } from '../components';

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
      <Container className='' fluid>
        <h1>Herp-Tracker</h1>
        <h5>A place to keep track of your reptiles.</h5>
        {/* <div className='container pet-container'> */}
        <div className='pet-container container-fluid'>
          {petList.map((pet, index) => (
            <Card petName={pet.name} key={index} />
          ))}
          <div className='card'>
            <p>Add new pet</p>
            <a href='/' className='btn' onClick={plusBtnClicked}>
              <i className='fas fa-plus fa-4x'></i>
            </a>
          </div>
        </div>
      </Container>
      {/* <div className='container'> */}
      {/* </div>{' '} */}
      {/* pet-container */}
      {/* </div>{' '} */}
      {/* div container */}
    </>
  );
};

export default Home;
