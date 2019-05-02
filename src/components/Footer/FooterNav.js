import React from 'react';
import { NavLink } from 'react-router-dom';
// styles
import styles from './Footer.module.css';

const FooterNav = ({ items = [] }) => (
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

export default FooterNav;
