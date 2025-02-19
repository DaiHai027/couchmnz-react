import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import translate from 'redux-polyglot/translate';
import {PropTypes} from 'prop-types';
import config from '../../../../config';
import appConstants from '../../../../constants/appConstants';
import pathToRegExp from 'path-to-regexp';
import QueryString from 'query-string';
import {PAYMENT_REDIRECT_ROUTE} from '../../../../constants/pathConstants';

const {payment, shoppingCart} = appConstants;
const {queryStrings, types, saveCardFlags} = payment;
const {currencyDecimals} = shoppingCart;

function isTrue(flag) {
  return flag ? saveCardFlags.yes : saveCardFlags.no;
}

class Wallet extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.getQueryString = this.getQueryString.bind(this);
    this.handlePay = this.handlePay.bind(this);
    this.renderCheckbox = this.renderCheckbox.bind(this);
  }

  getQueryString() {
    const query = {
      [queryStrings.canUseWallet]: isTrue(this.props.canUseWallet)
    };
    return '?' + QueryString.stringify(query);
  }

  handlePay() {
    const toPath = pathToRegExp.compile(PAYMENT_REDIRECT_ROUTE);
    const returnUrl = toPath({type: types.wallet});
    this.props.history.push({
      pathname: returnUrl,
      search: this.getQueryString()
    });
  }

  renderCheckbox() {
    const {paymentDetailsData, p} = this.props;
    if (paymentDetailsData.walletBalance > 0) {
      return (
        <div className="tandc">
          <input type="checkbox" name="" id="point1" onChange={this.props.handleWalletOptionChange} checked={this.props.canUseWallet}/>
          <label htmlFor="point1"><span>{p.t('wallet.walletDesc')}</span></label>
        </div>
      );
    }
  }

  render() {
    const {paymentDetailsData, remainingAmount, p, canUseWallet} = this.props;
    const remainingAmt = remainingAmount();
    // Const maxAmountToRedeem = paymentDetailsData.rewardPoints;
    return (
      <div>
        <div className={remainingAmt > 0 ? 'cl-sd-shoppingContent-general cl-sd-wallet-paymentOuter mb30' : 'cl-sd-shoppingContent-general cl-sd-wallet-paymentOuter'}>
          <div className="cl-sd-row cl-sd-row-custom">
            {/*             <div className="cl-sd-wallet-left">
              <h3>{p.t('wallet.reedemPoints')}</h3>
              <span className="cl-sd-infoSvg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="-905 -5144 16 16">
                  <g id="icon-help" transform="translate(11581 382)">
                    <path id="BOOKING_SUMMARY" data-name="BOOKING SUMMARY" className="cl-sc-helpicon" d="M9.167-2.976V-1.31a.324.324,0,0,1-.094.24.324.324,0,0,1-.24.094H7.167a.324.324,0,0,1-.24-.094.324.324,0,0,1-.094-.24V-2.976a.324.324,0,0,1,.094-.24.324.324,0,0,1,.24-.094H8.833a.324.324,0,0,1,.24.094A.324.324,0,0,1,9.167-2.976Zm2.667-5.167a2.655,2.655,0,0,1-.156.937,1.9,1.9,0,0,1-.474.719,4.9,4.9,0,0,1-.542.458q-.224.156-.62.375-.333.188-.484.292a1.317,1.317,0,0,0-.271.25.472.472,0,0,0-.12.3v.333a.324.324,0,0,1-.094.24.324.324,0,0,1-.24.094H7.167a.324.324,0,0,1-.24-.094.324.324,0,0,1-.094-.24v-.708a1.991,1.991,0,0,1,.109-.672,1.873,1.873,0,0,1,.25-.495,1.715,1.715,0,0,1,.406-.37,4.277,4.277,0,0,1,.427-.266q.161-.083.464-.219a4.049,4.049,0,0,0,.781-.448.624.624,0,0,0,.229-.51.889.889,0,0,0-.453-.745,1.735,1.735,0,0,0-.995-.307,1.7,1.7,0,0,0-.99.281,4.765,4.765,0,0,0-.833.865.307.307,0,0,1-.26.125.321.321,0,0,1-.2-.063L4.646-8.862a.3.3,0,0,1-.125-.208.318.318,0,0,1,.052-.24,4.061,4.061,0,0,1,3.635-2,3.844,3.844,0,0,1,2.484.932A2.8,2.8,0,0,1,11.833-8.143Zm-1.245-4.135A6.48,6.48,0,0,0,8-12.81a6.48,6.48,0,0,0-2.589.531,6.732,6.732,0,0,0-2.125,1.422A6.732,6.732,0,0,0,1.865-8.731a6.48,6.48,0,0,0-.531,2.589,6.48,6.48,0,0,0,.531,2.589A6.732,6.732,0,0,0,3.286-1.429,6.732,6.732,0,0,0,5.411-.007,6.48,6.48,0,0,0,8,.524a6.48,6.48,0,0,0,2.589-.531,6.732,6.732,0,0,0,2.125-1.422,6.732,6.732,0,0,0,1.422-2.125,6.48,6.48,0,0,0,.531-2.589,6.48,6.48,0,0,0-.531-2.589,6.732,6.732,0,0,0-1.422-2.125A6.732,6.732,0,0,0,10.589-12.278Zm4.339,2.12A7.826,7.826,0,0,1,16-6.143a7.826,7.826,0,0,1-1.073,4.016A7.964,7.964,0,0,1,12.016.784,7.826,7.826,0,0,1,8,1.857,7.826,7.826,0,0,1,3.984.784,7.964,7.964,0,0,1,1.073-2.127,7.826,7.826,0,0,1,0-6.143a7.826,7.826,0,0,1,1.073-4.016A7.964,7.964,0,0,1,3.984-13.07,7.826,7.826,0,0,1,8-14.143a7.826,7.826,0,0,1,4.016,1.073A7.964,7.964,0,0,1,14.927-10.158Z" transform="translate(-12486 -5511.857)"/>
                  </g>
                </svg>
              </span>
              <div className="rewardsbg">
                <h4>{paymentDetailsData.rewardPoints}</h4>
                <p>{p.t('wallet.points')}</p>
              </div>
              <div className="tandc">
                <input type="checkbox" name="" id="point" onChange={this.props.handleReedemChange} checked={this.props.useRewardPoint}/>
                <label htmlFor="point"><span>{p.t('wallet.reedemPointsDesc')}</span></label>
              </div>
              {
                this.props.useRewardPoint &&
                <div className="cl-sd-pointcollapse">
                  <label>{p.t('wallet.pointsAmount')}</label>
                  <input type="number" name="" value={this.props.rewardPoints} max={maxAmountToRedeem} min={0} onChange={this.props.handleRewardValueChange}/>
                </div>
              }
            </div> */}
            <div className="cl-sd-wallet-right">
              <h3>{p.t('wallet.walletBalance')}</h3>
              <h4>{p.t('ShoppingCart.currency')}{paymentDetailsData.walletBalance.toFixed(currencyDecimals)}</h4>
              {
                this.renderCheckbox()
              }
            </div>
          </div>
        </div>
        {
          remainingAmt <= 0 &&  
            <div className="btn-grp">
              <a className="general_btn" onClick={this.handlePay}>{p.t('wallet.payNow')}</a>
              <p>{p.t('SavedCards.p')} <a href={config.tosUrl} target="_blank">{p.t('SavedCards.tos')}</a></p>
            </div>
        }
        {
          remainingAmt > 0 && paymentDetailsData.walletBalance > 0 && canUseWallet &&
          <h3>{p.t('wallet.remainingBalance', {remainingAmount: remainingAmt.toFixed(currencyDecimals), currency: p.t('ShoppingCart.currency')})}</h3>
        }
      </div>

    );
  }
  static get propTypes() {
    return {
      p: PropTypes.object.isRequired,
      paymentDetailsData: PropTypes.object.isRequired,
      canUseWallet: PropTypes.bool.isRequired,
      handleWalletOptionChange: PropTypes.func.isRequired,
      remainingAmount: PropTypes.func.isRequired,
      history: PropTypes.object.isRequired
    };
  }
}
const mapDispatchToProps = dispatch => {
  return {

  };
};

const mapStateToProps = state => {
  const {payment, userProfiles} = state;
  const {paymentDetails} = payment;
  return {
    paymentDetailsStatus: paymentDetails.status,
    paymentDetailsData: paymentDetails.data
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(translate(Wallet)));
