import React from 'react';
import { Route } from 'react-router-dom';

// This class is explained here:
// https://serverless-stack.com/chapters/add-the-session-to-the-state.html

export default ({ component: C, props: cProps, ...rest }) => (
    <Route {...rest} render={(props) => <C {...props} {...cProps} />} />
);
