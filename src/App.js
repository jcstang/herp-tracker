import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Card, Loading } from './components';
// import { Home } from './views';

function App() {
  const { isLoading } = useAuth0();

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

  // Loading image if busy
  if (isLoading) {
    return <Loading />;
  }

  // TODO: Set this up like a SPA. with a switch and routes.
  return (
    <Container className='App container-fluid'>
      <h1>Herp-Tracker</h1>
      <h5>A place to keep track of your reptiles.</h5>

      <div className='container pet-container'>
        {petList.map((pet, index) => (
          <div className='row'>
            <Card petName={pet.name} />
          </div>
        ))}
        <div className='card'>
          <p>Add new pet</p>
          <a href='/' className='btn' onClick={plusBtnClicked}>
            <i className='fas fa-plus fa-4x'></i>
          </a>
        </div>
      </div>
    </Container>
  );
}

export default App;
