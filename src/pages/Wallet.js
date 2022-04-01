import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import getCurrencies from '../services/awesomeAPI';
import { setCurrencies } from '../actions';

class Wallet extends React.Component {
  async componentDidMount() {
    const { getAllCurrencies } = this.props;
    getAllCurrencies(await getCurrencies());
  }

  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

Wallet.propTypes = {
  getAllCurrencies: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getAllCurrencies: (e) => dispatch(setCurrencies(e)),
});

export default connect(null, mapDispatchToProps)(Wallet);
