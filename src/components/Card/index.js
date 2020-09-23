import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Col, Card as BootCard, Button } from 'react-bootstrap';

function Card(props) {
  return (
    <Col sm={6}>
      <BootCard>
        <BootCard.Body>
          <Button>
            <i className='fas fa-edit' />
          </Button>
          <BootCard.Title>{props.petName}</BootCard.Title>
          <BootCard.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </BootCard.Text>
          <Button>click - modal pop-up???</Button>
        </BootCard.Body>
      </BootCard>
      {/* <div className='card col-sm-12'>
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
      </div> */}
    </Col>
  );
}

export default Card;
