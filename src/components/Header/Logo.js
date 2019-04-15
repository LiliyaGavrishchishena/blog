import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../configs/routes';

const Logo = ({ image = '' }) => (
  <Link to={routes.MAIN}>
    <img src={image} alt="Blog" />
  </Link>
);

export default Logo;
