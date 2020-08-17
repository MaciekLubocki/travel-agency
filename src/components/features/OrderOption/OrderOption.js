import React from 'react';
//import PropTypes from 'prop-types';
import OrderOptionDropdown from '../OrderOption/OrderOptionDropdown';
import OrderOptionIcons from '../OrderOption/OrderOptionIcons';
import OrderOptionCheckboxes from '../OrderOption/OrderOptionCheckboxes';
import OrderOptionNumber from '../OrderOption/OrderOptionNumber';
import OrderOptionText from '../OrderOption/OrderOptionText';
import OrderOptionDate from '../OrderOption/OrderOptionDate';

import styles from './OrderOption.scss';

const optionTypes = {
  dropdown: OrderOptionDropdown,
  icons: OrderOptionIcons,
  checkboxes: OrderOptionCheckboxes,
  number: OrderOptionNumber,
  text: OrderOptionText,
  date: OrderOptionDate,
};

const OrderOption = ({id, setOrderOption, name, type, ...otherProps}) => {
  const OptionComponent = optionTypes[type];
  if(!OptionComponent){
    return null;
  } else {
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{name}</h3>
        <OptionComponent 
          setOptionValue={value => setOrderOption({[id]: value})}
          {...otherProps}
        />
      </div>
    );
  }
};


export default OrderOption;