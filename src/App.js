import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import './App.css';
import { Loading, MainPage, AppNavBar } from './components';

import { Profile, Mobile } from './views';

function App() {
  const { isLoading } = useAuth0();

  // Loading image if busy
  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <AppNavBar />
      <MainPage>
        <Switch>
          <Route path='/' component={Mobile} />
          <Route path='/profile' exact component={Profile} />
        </Switch>
      </MainPage>
    </>
  );
}

export default App;
