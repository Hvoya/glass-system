import React from 'react';
import { Route, Switch } from 'react-router';

import MainPage from './components/pages/MainPage';
import BaseLayout from './components/layouts/BaseLayout';

const Router = () => {
  return (
    <BaseLayout>
      <Switch>
        <Route path="/" component={MainPage} />
      </Switch>
    </BaseLayout>
  );
};

export default Router;
