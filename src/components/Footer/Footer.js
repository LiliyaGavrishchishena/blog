import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.wrap}>
      <div className={styles.clearFloat}>
        <div className={styles.left}>
          <div className={styles.copyright}>
            &copy; 2018 The cat blog. All Rights Reserved.
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.footer_nav}>
            <ul className={styles.list}>
              <li>
                <Link className={styles.link} to="/policies/terms">
                  Terms and conditions
                </Link>
              </li>
              <li>
                <Link className={styles.link} to="/policies/privacy">
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link className={styles.link} to="/policies/cookies">
                  Cookies policy
                </Link>
              </li>
              <li>
                <Link className={styles.link} to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.social_icons}>
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/SimpleTut"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={styles.fab_fa_facebook_f} />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/reactjs-starter-kit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={styles.fab_fa_github} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
