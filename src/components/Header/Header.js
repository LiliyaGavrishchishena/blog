import React, { Component } from 'react';
import Logo from './Logo';
import Nav from './Nav';
import appLogo from '../../assets/graphics/logo_orange.svg';
import navItems from '../../configs/main-nav';
import styles from './Header.module.css';

export default class Header extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenScrollEvent);
  }

  render() {
    return (
      <header className={styles.header} onScroll={this.handleScroll}>
        <div className={styles.wrap}>
          <div className={styles.logo}>
            <Logo image={appLogo} />
          </div>

          <div className={styles.nav}>
            <Nav items={navItems} />
          </div>
        </div>
      </header>
    );
  }
}
