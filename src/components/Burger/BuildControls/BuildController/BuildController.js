import React from 'react';
import styles from './BuildController.module.css'

const buildController = (props) => (
  <div className={styles.BuildControl}>
    <div className={styles.Label}>{props.label}</div>
    <button className={styles.Less}>less</button>
    <button className={styles.More}>more</button>
  </div>
);

export default buildController;