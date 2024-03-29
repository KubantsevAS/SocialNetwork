import React from 'react';
import preloader from './../../../images/preloader.gif';
import styles from './Preloader.module.css';

const Preloader = () => {
  return (
    <div className={styles.preloader}>
      <img src={preloader} alt="preloader" />
    </div>
  );
};

export default Preloader;
