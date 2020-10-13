import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Orfanatos from './pages/Orfanatos';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/app" component={Orfanatos} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;