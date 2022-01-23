import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import {useGlobalContext} from '../Context';

const PrivateRoute = ({children, ...rest}) => {

  const {token} = useGlobalContext();

  return (
    <Route {...rest} render={() => {
      return(
        token ? children : <Redirect to='/login'></Redirect>
      );
    }}></Route>
  );
};
export default PrivateRoute;
