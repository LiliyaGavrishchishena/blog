import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const AppNav = ({ items = [] }) => (
  <ul className={styles.list}>
    {items.map(({ name, path }) => (
      <li key={name}>
        <NavLink className={styles.link} exact to={path}>
          {name}
        </NavLink>
      </li>
    ))}
  </ul>
);

export default AppNav;
