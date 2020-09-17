import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';
import './App.css';
import { Loading, MainPage, AppNavBar } from './components';

import { Home, Profile } from './views';

function App() {
  const { isLoading } = useAuth0();

  // Loading image if busy
  if (isLoading) {
    return <Loading />;
  }

  // TODO: Set this up like a SPA. with a switch and routes.
  return (
    <>
      <AppNavBar />
      <MainPage>
        <Container className=''>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/profile' exact component={Profile} />
          </Switch>
        </Container>
      </MainPage>
    </>
  );
}

export default App;
