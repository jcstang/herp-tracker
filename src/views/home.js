import React from 'react';

const Home = () => {
  return (
    <div>
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
    </div>
  );
};
