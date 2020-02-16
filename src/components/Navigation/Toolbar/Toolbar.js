import React from 'react';
import styles from './Toolbar.module.css'
import Logo from '../../Logo/Logo';

const Toolbar = (props) => (
  <header className={styles.Toolbar}>
    <div>MENU</div>
    <Logo />
    <nav>
      <ul>...</ul>
    </nav>
  </header>
);

export default Toolbar;