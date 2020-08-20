import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Card from './component/Card';

function App() {
  return (
    <div className='App container-fluid'>
      <h1>Herpa Tracker</h1>
      <h5>A place to keep track of your reptile.</h5>

      <div className='container pet-container'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <div className="card">
          <p>Add new pet</p>
        </div>
      </div>

    </div>
  );
}

export default App;
