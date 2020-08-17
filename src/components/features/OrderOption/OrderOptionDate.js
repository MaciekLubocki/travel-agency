import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

import styles from './OrderOption.scss';

const OrderOptionDate = ({currentValue, setOptionValue}) => (
  <DatePicker
    className={styles.input}
    type="date"
    value={currentValue}
    selected={currentValue}
    onChange={setOptionValue} 
    placeholderText={'Select a date'} />
);

OrderOptionDate.propTypes = {
  currentValue: PropTypes.any,
  setOptionValue: PropTypes.func,
};

export default OrderOptionDate;