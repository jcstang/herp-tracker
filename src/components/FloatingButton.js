import React from 'react';
import { Button } from 'react-bootstrap';
import AddIcon from '@material-ui/icons/Add';

const FloatingButton = (props) => {
  return (
    <Button
      className='my-float-button'
      variant='warning'
      onClick={props.btnClicked}
    >
      <AddIcon />
    </Button>
  );
};

export default FloatingButton;
