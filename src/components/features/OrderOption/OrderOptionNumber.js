import React from 'react';
import PropTypes from 'prop-types';

import styles from './OrderOption.scss';

const OrderOptionNumber = ({currentValue, setOptionValue, price}) => (
  <div className={styles.number}>
    <input type="number"
      className={styles.inputSmall}
      value={currentValue}
      min='1'
      max='9'
      onChange={event => setOptionValue(event.currentTarget.value)}
    ></input>
    {price}
  </div>
);

OrderOptionNumber.propTypes = {
  currentValue: PropTypes.number,
  setOptionValue: PropTypes.func,
  price: PropTypes.string,
};  


export default OrderOptionNumber;

