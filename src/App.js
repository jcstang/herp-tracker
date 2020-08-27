import React, { useState } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Card from './component/Card';

function App() {

  const [petList, setPetList] = useState([
    {
      title: 'Zelda'
    },
    {
      title: 'Zelda'
    },
    {
      title: 'Zelda'
    },
    {
      title: 'Zelda'
    },
    {
      title: 'Zelda'
    }
  ]);

  const plusBtnClicked = (event) => {
    event.preventDefault();
    console.log('plus button clicked');
  }

  return (
    <div className='App container-fluid'>
      <h1>Herpa Tracker</h1>
      <h5>A place to keep track of your reptile.</h5>

      <div className='container pet-container'>
        {
          petList.map((pet, index) => (
            <Card />
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
