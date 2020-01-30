import React from 'react';
import styles from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';


const burger = (props) => {
  return (
    <div className={styles.Burger}>
      <BurgerIngredient type="bread-top" /> {/* need type because of prop-type test*/}
      <BurgerIngredient type="cheese" /> {/* need type because of prop-type test*/}
      <BurgerIngredient type="meat" /> {/* need type because of prop-type test*/}
      <BurgerIngredient type="bread-bottom" /> {/* need type because of prop-type test*/}
    </div>
  );
};

export default burger;