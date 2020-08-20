import React from 'react';
import PropTypes from 'prop-types';
import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';
import pricing from '../../../data/pricing.json';
import Button from '../../common/Button/Button';
import settings from '../../../data/settings';
import {formatPrice} from '../../../utils/formatPrice';
import {calculateTotal} from '../../../utils/calculateTotal';

import {Row, Col} from 'react-flexbox-grid';

const sendOrder = (options, tripCost, tripName, tripId) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const {contact, name} = options;

  if (name.length < 3) {
    window.alert('Fill in correct name, please');
    return;
  }
  if (contact.length < 7) {
    window.alert('Fill in correct contact, please');
    return;
  }

  const payload = {
    ...options,
    totalCost,
    tripName,
    tripId,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(url, fetchOptions)
    .then(function(response){
      return response.json();
    }).then(function(parsedResponse){
      console.log('parsedResponse', parsedResponse);
    });
};

const OrderForm = ({tripCost, options, setOrderOption, tripName, tripId}) => (
  <Row>
    {pricing.map(option =>
      <Col md={4} key={option.id}>
        <OrderOption currentValue={options[option.id]} setOrderOption={setOrderOption} {...option}/>
      </Col>
    )}
    <Col xs={12}>
      <OrderSummary tripCost={tripCost} options={options} />
      <Button onClick={() => sendOrder(options, tripCost, tripName, tripId, setOrderOption)}>Order now!</Button>
    </Col>
  </Row>
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
  tripId: PropTypes.string,
  tripName: PropTypes.string,
};


export default OrderForm;