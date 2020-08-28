import React, { useState } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Card from './component/Card';

function App() {

  const [petList, setPetList] = useState([
    {
      name: 'Zelda'
    },
    {
      name: 'Ted'
    },
    {
      name: 'Gimli'
    },
    {
      name: 'Dharma'
    },
    {
      name: 'Bun-Bun'
    }
  ]);

  const plusBtnClicked = (event) => {
    event.preventDefault();
    console.log('plus button clicked');
    const newList = [...petList];
    newList.push( {name: 'Snek'} );
    setPetList(newList);
  }


  return (
    <div className='App container-fluid'>
      <h1>Herp-Tracker</h1>
      <h5>A place to keep track of your reptiles.</h5>

      <div className='container pet-container'>
        {
          petList.map((pet, index) => (
            <div className="row"><Card petName={pet.name}/></div>
          ))
        }
        <div className="card">
          <p>Add new pet</p>
          <a href="/" className="btn" onClick={plusBtnClicked}>
            <i className="fas fa-plus fa-4x"></i>
          </a>
        </div>
      </div>

    </div>
  );
}

export default App;
