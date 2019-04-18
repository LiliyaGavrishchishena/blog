import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Banner.module.css';

const Banner = () => (
  <div className={styles.banner}>
    <div className={styles.overlay}>
      <div className={styles.hero}>
        <div className={styles.content_wrap}>
          <h1 className={styles.title}>The cat blog</h1>
          <span className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non illo,
            alias animi iusto neque, sint corrupti? Laudantium, dignissimos id
            excepturi facilis, facere saepe quasi placeat praesentium ipsa
            sapiente illo molestiae?
          </span>
          <Link className={styles.link} to="/about">
            <span className={styles.more}>Learn more</span>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Banner;
