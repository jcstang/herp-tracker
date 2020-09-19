import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function Card(props) {
  return (
    <div className='card col-sm-12'>
      <div className='card-body'>
        <a className='edit-btn btn' href='/'>
          <i className='fas fa-edit'></i>
        </a>
        <h5 className='card-title'>{props.petName}</h5>
        <p className='card-text'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href='/' className='btn btn-primary'>
          click - modal pop-up???
        </a>
      </div>
    </div>
  );
}

export default Card;
