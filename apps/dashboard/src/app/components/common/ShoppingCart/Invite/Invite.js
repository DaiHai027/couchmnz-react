import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {PropTypes} from 'prop-types';
import translate from 'redux-polyglot/translate';

import validateEmails from '../../../../validators/common/emails';

import {shoppingCartCheckout, fetchCountries, fetchBillingInvite, updateBillingInvite, inviteFriends} from '../../../../actions';
import {FULFILLED, PENDING} from '../../../../constants/ActionTypes';
import {notNull, isValidEmail, isNonEmptyArray} from '../../../../validators/common/util';

class Invite extends Component {
  constructor(props) {
    super(props);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleRenderEmailInput = this.handleRenderEmailInput.bind(this);
    this.handleRenderNameInput = this.handleRenderNameInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRenderError = this.handleRenderError.bind(this);
    this.handleAddInvite = this.handleAddInvite.bind(this);
    this.handleRemoveInvite = this.handleRemoveInvite.bind(this);
    this.handleRecipientList = this.handleRecipientList.bind(this);
    this.state = {
      recipients: [],
      invites: [0, 1, 2],
      submitted: false
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    if (this.props.countries.status !== FULFILLED && this.props.countries.status !== PENDING) {
      this.props.fetchCountries();
    }
  }

  handlePush() {

  }

  handleEmailChange(e) {
    const {value, name} = e.target;
    const {recipients} = this.state;
    const recipient = recipients[name];
    if (recipient) {
      recipient.email = value;
      recipients[name] = recipient;
      this.setState({recipients});
    } else {
      recipients[name] = {
        name: '',
        email: value
      };
      this.setState({recipients});
    }
  }

  handleNameChange(e) {
    const {value, name} = e.target;
    const {recipients} = this.state;
    const recipient = recipients[name];
    if (recipient) {
      recipient.name = value;
      recipients[name] = recipient;
      this.setState({recipients});
    } else {
      recipients[name] = {
        name: value,
        email: ''
      };
      this.setState({recipients});
    }
  }

  handleRenderEmailInput(index) {
    const {recipients} = this.state;
    return <input type="text" placeholder="patriciasmith32@email.com" onChange={this.handleEmailChange} name={index} value={recipients[index] && recipients[index].email ? recipients[index].email : ''}/>;
  }

  handleRenderNameInput(index) {
    const {recipients} = this.state;
    return (
      <input type="text" placeholder="Patricia Smith" onChange={this.handleNameChange} name={index} value={recipients[index] && recipients[index].name ? recipients[index].name : ''}/>
    );
  }

  handleSubmit() {
    const {recipients} = this.state;
    const validation = validateEmails(recipients);
    this.setState({validation, submitted: true});
    if (validation.valid === true) {
      const recipientList = this.handleRecipientList();
      if (isNonEmptyArray(recipientList)) {
        this.props.inviteFriends(recipientList, 'profileId', 'scheduledSessionId');
      }
    }
  }

  handleRenderError(e, index) {
    const {recipients} = this.state;
    const email = recipients[index] && recipients[index].email ? recipients[index].email : '';
    return isValidEmail(email) ? <p/> : <p style={{color: 'red'}}>{(recipients[index] && recipients[index].email ? recipients[index].email : '')}</p>;
  }

  handleAddInvite() {
    const {invites} = this.state;
    this.setState({invites: invites.concat(Math.max(...invites) + 1)});
  }

  handleRemoveInvite(e) {
    const {invites} = this.state;
    const {name} = e.target;
    this.setState({invites: invites.filter((i, index) => index !== name)});
  }

  handleRecipientFilter(object) {
    if (object) {
      return notNull(object.email) && isValidEmail(object.email);
    }
    return false;
  }

  handleRecipientList() {
    const {recipients} = this.state;
    return recipients.filter(this.handleRecipientFilter);
  }

  render() {
    const {p} = this.props;
    const {invites, recipients, submitted} = this.state;
    const validation = validateEmails(recipients);
    return (
      <section className="cl-invite-friends-sections">
        <div className="uk-container-fluid">
          <div className="uk-grid cl-bs-subheader">
            <div className="uk-width-small-1 uk-width-medium-2-10 uk-width-large-2-10 uk-width-xlarge-2-10"/>
            <div className="uk-width-small-1 uk-width-medium-6-10 uk-width-large-6-10 uk-width-xlarge-6-10">
              <div className="cl-bs-topnav">
                <h2>{p.t('ShoppingCartInvite.title')}</h2>
                <p>{p.t('ShoppingCartInvite.forSessions', {session: 'Sessions'})}<a>{'Coach Barry J.'}</a></p> {/* To be modified */}
              </div>
            </div>
            <div className="uk-width-small-1 uk-width-medium-2-10 uk-width-large-2-10 uk-width-xlarge-2-10"/>
          </div>
        </div>
        <div className="cl-invite-friends-bodycontent">
          <div className="uk-container-fluid uk-container-center">
            <div className="uk-grid">
              <div className="uk-width-small-1-1 uk-width-medium-2-10 uk-width-large-2-10 uk-width-xlarge-2-10"/>
              <div className="uk-width-small-1-1 uk-width-medium-6-10 uk-width-large-6-10 uk-width-xlarge-6-10">
                <div className="uk-grid">
                  <div className="uk-width-small-1-1 uk-width-medium-4-10 uk-width-large-4-10 uk-width-xlarge-4-10">
                    <div className="cl-invite-friendsTrainingSession">
                      <div className="invitefriends-topsection">
                        <h3>{p.t('ShoppingCartInvite.inviteFriend', {session: 'Session'})}</h3>
                        <p>{p.t('ShoppingCartInvite.sessionDetail', {subSSPType: 'Group', sport: 'Soccer', session: 'Session', coach: 'Gary', date: 'Friday, December 16, 2018', startTime: '7AM', endTime: '8AM'})}<a>{'Sanborn Park'}</a>. {p.t('ShoppingCartInvite.sessionLevel', {level: 'Advanced'})}</p> {/* To be modified */}
                        <div className="cl-invitefriendicon">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-12641 -21395.742 341 98.889">
                            <g data-name="Symbol 41 – 1" transform="translate(-13052 -21850)">
                              <path className="cl-invite-icon-1" d="M688.625,444.254a.627.627,0,0,1,0-1.254h11.859a.627.627,0,0,1,0,1.254Z" transform="translate(-4.059 97.435)"/>
                              <g transform="translate(693.317 474.804)">
                                <path className="cl-invite-icon-1" d="M39.552,43.228c.061.552.564,2.258,1.525,5.477,1.429,4.79,3.588,12.028,4.7,17.475a12.838,12.838,0,0,0,1.885,3.46c.584.873,1.564,2.331,1.485,2.682a.878.878,0,0,1-.464.073c-1.947,0-4.7-2.553-5.137-4.4L32.824,43.487a.626.626,0,0,0-.573-.375.638.638,0,0,0-.594.43c-.066.2-6.758,20.482-9.559,26.231a4.217,4.217,0,0,1-3.071,2.176c-.467-.03-.769-.134-.854-.292-.219-.406.226-1.593,1.322-3.522,3.6-6.335,4.738-17.912,5.223-22.854.1-.984.173-1.762.233-2.044l2.188-17.651a.627.627,0,0,0-.351-.643C18.442,20.952,10.251,9.895,10.251,2.617a2.739,2.739,0,0,1,.338-1.366s.437.107,1.2,1.677c.045.138,4.634,13.8,17.549,15.084l.418.043c.524.054,1.135.107,1.732.135.193.019.385.029.578.029a7.874,7.874,0,0,1,5.313,2.376c.146.135.48.4.97.79,1.443,1.144,4.444,3.525,8.014,6.882a.625.625,0,0,0,.808.043C49.461,26.55,51.1,25.2,52.3,24.217c2.288-1.876,2.98-2.418,3.751-2.418.265,0,.378.059.392.087.094.207-.085,1.235-2.024,3.482-1.561,1.813-7.195,8.236-8.442,9.656a34.248,34.248,0,0,1-4.091-2.638A22.165,22.165,0,0,0,39.2,30.619a.629.629,0,0,0-.617.073.619.619,0,0,0-.251.568ZM37.393,9.658c0,4.912-1.739,7.3-5.321,7.306h-.034c-3.094-.015-4.942-2.676-4.942-7.129,0-3.613.612-7.3,5.156-7.3C36.725,2.529,37.393,7,37.393,9.658Zm9.279,26.475s6.935-7.9,8.7-9.944c1.943-2.255,2.667-3.832,2.214-4.824a1.517,1.517,0,0,0-1.529-.819c-1.252,0-2.147.735-4.541,2.7-1.12.919-2.626,2.154-4.686,3.744-3.437-3.2-6.3-5.475-7.7-6.588-.457-.362-.767-.607-.9-.732a10.983,10.983,0,0,0-3.16-2.084c1.969-.954,3.584-3.178,3.584-7.928,0-2.519-.623-8.383-6.392-8.383-6.407,0-6.407,6.442-6.407,8.558,0,3.269.9,5.416,2.192,6.721C17.027,14.537,13.015,2.659,12.943,2.461c-.563-1.172-1.456-2.682-2.6-2.434C9.358.253,9,1.7,9,2.617c0,7.7,8.128,18.871,16.842,23.257L23.719,43.023c-.064.283-.125.894-.248,2.133-.477,4.864-1.6,16.253-5.064,22.358-1.231,2.168-1.884,3.716-1.337,4.736a2.078,2.078,0,0,0,1.872.949,5.448,5.448,0,0,0,4.28-2.877c2.412-4.948,7.474-19.932,9.111-24.84L42.36,68.392c.517,2.246,3.736,5.257,6.319,5.257a1.6,1.6,0,0,0,1.549-.712c.508-.958-.392-2.3-1.531-4a12.6,12.6,0,0,1-1.7-3.038c-1.112-5.475-3.282-12.747-4.716-17.558-.767-2.571-1.429-4.789-1.48-5.249L39.7,32.387c.439.3.957.665,1.468,1.024,2.931,2.069,4.277,2.934,5.036,2.934A.621.621,0,0,0,46.672,36.133Z" transform="translate(0.376 0)"/>
                                <path className="cl-invite-icon-1" d="M35.331,12.719c.027-.346.271-1.694-.074-1.719-.318-.046-1.144,1.277-1.173,1.624a1.738,1.738,0,0,1-1.913,1.6,2.087,2.087,0,0,1-1.927-1.682c-.071-.339-.9-1.619-1.238-1.541s-.057,1.461.013,1.8a3.291,3.291,0,0,0,3.151,2.677A2.993,2.993,0,0,0,35.331,12.719Z" transform="translate(1.205 0.459)"/>
                                <path className="cl-invite-icon-2" d="M28,27.163a4.152,4.152,0,1,1,4.152,4.162A4.158,4.158,0,0,1,28,27.163Z" transform="translate(1.169 0.961)"/>
                                <path className="cl-invite-icon-1" d="M29.251,26.789a3.527,3.527,0,1,0,3.527-3.535A3.535,3.535,0,0,0,29.251,26.789Zm-1.251,0a4.778,4.778,0,1,1,4.778,4.79A4.788,4.788,0,0,1,28,26.789Z" transform="translate(1.169 0.919)"/>
                                <path className="cl-invite-icon-1" d="M.626,59.254A.627.627,0,0,1,.626,58h12.8a.627.627,0,0,1,0,1.254Z" transform="translate(0 2.422)"/>
                                <path className="cl-invite-icon-1" d="M56.136,75.254H46.626a.627.627,0,0,1,0-1.254h9.511a.627.627,0,0,1,0,1.254" transform="translate(1.921 3.09)"/>
                                <path className="cl-invite-icon-1" d="M22.575,74.254H7.626a.627.627,0,0,1,0-1.254H22.575a.627.627,0,0,1,0,1.254" transform="translate(0.292 3.049)"/>
                              </g>
                              <g transform="translate(411 496.681)">
                                <path className="cl-invite-icon-3" d="M42.378,8V19.262L25.509,28.835,8,18.94V8Z" transform="translate(0.334 0.334)"/>
                                <path className="cl-invite-icon-4" d="M50,45.156h0V14.724h0l-.076-.076-.076-.076-.076-.076h0l-7.111-4.239V7.532a.719.719,0,0,0-.765-.757H36.471L25.385.114a.7.7,0,0,0-.765,0L13.38,6.775H7.569a.719.719,0,0,0-.765.757v2.952L.229,14.5h0a.075.075,0,0,0-.076.076l-.076.076L0,14.724H0V45.308c0,.076,0,.076.076.151v.076l.076.076h0c.076.076.153.076.229.151H.459c.076,0,.153.076.229.076H49.469c.076,0,.076,0,.153-.076.076,0,.076-.076.153-.076a.074.074,0,0,0,.076-.076l.076-.076v-.076c0-.076.076-.076.076-.151ZM48.475,16.39V43.642l-22.1-14.913Zm-25,12.339L1.223,43.642V16.39Zm23.32,15.595H2.982L24.926,29.562ZM6.652,12.226v5.45L1.988,15.1ZM33.489,6.7H16.209l8.64-5.148Zm7.569,1.514v10.6L24.926,27.82,8.181,18.509V8.214Zm1.529,3.709,5.2,3.1-5.2,2.877ZM24.008,21.84,24.62,20.4l.076-.076c.076,0,.076,0,.076.076l.765,1.363,1.529.151a.075.075,0,0,1,.076.076v.076L26.073,23.2l.306,1.514v.076H26.3l-1.376-.681-1.3.757h-.153l-.076-.076.153-1.514-1.07-.984s-.076-.076,0-.076a.074.074,0,0,0,.076-.076Zm12.157-8.024H12.692a.757.757,0,1,1,0-1.514h23.55a.719.719,0,0,1,.765.757A.783.783,0,0,1,36.165,13.816Zm0,3.861H12.692a.757.757,0,1,1,0-1.514h23.55a.719.719,0,0,1,.765.757A.783.783,0,0,1,36.165,17.676Z" transform="translate(0 0)"/>
                              </g>
                              <g transform="translate(461.004 454.757)">
                                <path data-name="Path 78" className="cl-invite-icon-5" d="M474,403.754q38.536-35.306,110.943-41.63t121.369,16.6" transform="translate(-474 -360.757)"/>
                                <path data-name="Path 79" className="cl-invite-icon-5" d="M474,403.754q38.536-35.306,110.943-41.63t121.369,16.6" transform="translate(-474 -360.757)"/>
                              </g>
                            </g>
                          </svg>
                        </div>
                        <a>{p.t('ShoppingCartInvite.learnMore')}</a>
                      </div>
                    </div>
                  </div>
                  <div className="uk-width-small-1-1 uk-width-medium-6-10 uk-width-large-6-10 uk-width-xlarge-6-10">
                    <div className="cl-invitesfriends-form uk-grid">
                      <div className="uk-width-small-1-1 uk-width-medium-1-2 invite-friendsinput-details">
                        <form className="uk-form">
                          <fieldset>
                            <label>{p.t('ShoppingCartInvite.email')}</label>
                            {
                              invites.map(this.handleRenderEmailInput)
                            }
                          </fieldset>
                          {
                            submitted === true && validation.valid === false && isNonEmptyArray(recipients) &&
                            <p>{p.t('ShoppingCartInvite.validation_messages.emails')}</p>
                          }
                          {submitted === true &&
                            validation.emails.map(this.handleRenderError)
                          }
                          <p/>
                        </form>
                      </div>
                      <div className="uk-width-small-1-1 uk-width-medium-1-2 invite-friendsinput-details">
                        <form className="uk-form">
                          <fieldset>
                            <label>{p.t('ShoppingCartInvite.name')}</label>
                            {
                              invites.map(this.handleRenderNameInput)
                            }
                          </fieldset>
                        </form>
                      </div>
                      <a onClick={this.handleAddInvite}>{p.t('ShoppingCartInvite.addFriend')}</a>
                    </div>
                    <div className="messageto-invitesfriends">
                      <p>{p.t('ShoppingCartInvite.message')}</p>
                      <div className="text-area">
                        <p>{p.t('ShoppingCartInvite.namePlaceholder')}, </p>
                        <p>{p.t('ShoppingCartInvite.p1')}</p>
                        <p><a>{p.t('ShoppingCartInvite.clickHere')}</a>, {p.t('ShoppingCartInvite.p2')}</p>
                      </div>
                      <div className="invite"><a data-uk-modal onClick={this.handleSubmit}>{p.t('ShoppingCartInvite.invite')}</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="uk-width-small-1-1 uk-width-medium-2-10 uk-width-large-2-10 uk-width-xlarge-2-10"/>
            </div>
          </div>
        </div>
      </section>

    );
  }
  static get propTypes() {
    return {
      p: PropTypes.shape({t: PropTypes.func}).isRequired,
      fetchCountries: PropTypes.func.isRequired,
      inviteFriends: PropTypes.func.isRequired,
      // FetchShippingInvite: PropTypes.func.isRequired,
      // updateShippingInvite: PropTypes.func.isRequired,
      countries: PropTypes.object.isRequired
    };
  }
}

const mapStateToProps = state => {
  const {countries, states, shoppingCart, userProfiles, cities, profile} = state;
  const {cartData, billingInvite} = shoppingCart;
  return {
    countries,
    states,
    billingInvite,
    // ShippingInvite,
    cities,
    profile,
    profileId: userProfiles.selectedProfile.id,
    cartItems: cartData.data.cartItems,
    shoppingCartGetStatus: cartData.status ? cartData.status : '',
    userProfiles
  };
};

const mapDispatchToProps = dispatch => {
  return {
    shoppingCartCheckout: () => dispatch(shoppingCartCheckout()),
    fetchCountries: () => dispatch(fetchCountries()),
    // FetchShippingInvite: id => dispatch(fetchShippingInvite(id)),
    fetchBillingInvite: id => dispatch(fetchBillingInvite(id)),
    // UpdateShippingInvite: (id, data) => dispatch(updateShippingInvite(id, data)),
    inviteFriends: (data, profileId, scheduledSessionId) => dispatch(inviteFriends(data, profileId, scheduledSessionId)),
    updateBillingInvite: (id, data) => dispatch(updateBillingInvite(id, data))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(translate(Invite)));
/* eslint react/no-deprecated: 0 */
/* eslint complexity: 0 */
