import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png'; //import and use because webpack will cause the filepath to change if you link directly in code.
import styles from './Logo.module.css';

const logo = (props) => (
  <div className={styles.Logo}>
    <img src={burgerLogo} alt="MyBurger"/>
  </div>
);

export default logo;