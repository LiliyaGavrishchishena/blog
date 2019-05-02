import React from 'react';

// components
import FooterNav from './FooterNav';
// styles
import styles from './Footer.module.css';
// configs
import footerItems from '../../configs/footer-nav';

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
            <FooterNav items={footerItems} />
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
