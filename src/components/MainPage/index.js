import React from 'react';

const MainPage = (props) => {
  return (
    <div className='App container-fluid'>
      {props.children}
    </div>
  );
};

export default MainPage;
