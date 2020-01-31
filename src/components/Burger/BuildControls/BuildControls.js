import React from 'react';
import BuildController from './BuildController/BuildController'
import styles from './BuildControls.module.css'

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
]

const buildControls = (props) => (
  <div className={styles.BuildControls}>
    {controls.map(ctrl => (
      <BuildController 
        key={ctrl.label} 
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
  </div>
);

export default buildControls;