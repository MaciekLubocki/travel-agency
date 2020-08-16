import {connect} from 'react-redux';
import OrderForm from './OrderForm';
import {getOrderOptions, setOrderOption} from '../../../redux/orderRedux';

//mapując w nim selektor getOrderOptions z pliku orderRedux.js do propsa options,
const mapStateToProps = state => ({
  options: getOrderOptions(state),
});

//mapowanie dispatchera akcji setOrderOption, z orderRedux.js, do propsa o tej samej nazwie, 
//ma przyjmować jeden argument i przekazywać go do kreatora akcji (czyli funkcji setOrderOption).
const mapDispatchToProps = dispatch => ({
  setOrderOption: orderOption => dispatch(setOrderOption(orderOption)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);