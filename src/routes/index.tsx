import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import BookListByCategory from '../pages/Category';
import AddBook from '../pages/Book/Add';
import EditBook from '../pages/Book/Edit';
import ViewDetailBook from '../pages/Book/Detail';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route
      path="/booklistbycategory/:id/:title"
      component={BookListByCategory}
    />
    <Route path="/addbook" component={AddBook} />
    <Route path="/editbook/:id" component={EditBook} />
    <Route path="/viewdetailbook/:id" component={ViewDetailBook} />
  </Switch>
);

export default Routes;
