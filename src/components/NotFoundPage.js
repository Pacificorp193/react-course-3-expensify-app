import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    404! - <NavLink to = "/" activeClassName = "is-active">Go home</NavLink>
  </div>
);

export default NotFoundPage;