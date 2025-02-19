import React, {Component} from 'react';
import {connect} from 'react-redux';
import translate from 'redux-polyglot/translate';
import {PropTypes} from 'prop-types';

class Completion extends Component {
  render() {
    const {index, short} = this.props;
    const {t} = this.props.p;
    const steps = [0, 1, 2];
    return (
      <section className="profileType athletetype">
        <div className="wrapper">
          <div className="uk-container-fluid uk-container-center">
            <div className="uk-grid">
              <div className="uk-width-xlarge-1-2 uk-width-large-1-2 uk-width-medium-1-1  uk-width-small-1-1">
                <div className="profileTypeInfo">
                  <svg className="cl-icon-athlete" xmlns="http://www.w3.org/2000/svg" viewBox="920.494 346.699 80.47 106.716">
                    <g data-name="Group 9" transform="translate(921 347)">
                      <g transform="translate(0)">
                        <path className="cl-icon-athlete-1" d="M1.157,81.972A141.534,141.534,0,0,0,32.366,87" transform="translate(0.246 16.45)"/>
                        <path className="cl-icon-athlete-1" d="M39.342,86.821a173.407,173.407,0,0,0,31.129-4.364" transform="translate(8.382 16.554)"/>
                        <path className="cl-icon-athlete-1" d="M79.224,100.258S80.89,80.33,75.1,73.083c-5.017-6.287-15.313-9.77-26.68-10.738a27.707,27.707,0,0,1-.993-4.707,24.629,24.629,0,0,1,.879-4.3c8.871-3.846,15.2-13.709,15.2-25.3C63.507,13.109,53.028,1,40.1,1S16.7,13.109,16.7,28.042c0,11.585,6.315,21.442,15.178,25.291a26.7,26.7,0,0,1,.816,4.3,33.629,33.629,0,0,1-1,5.037C20.672,64.019,10.548,67.569,5.1,73.083-1.408,79.672-.325,99.338,1.018,99.338" transform="translate(0 -0.801)"/>
                        <path className="cl-icon-athlete-2" d="M79.224,88.716S80.89,68.788,75.1,61.541c-5.017-6.287-10.323-8.527-21.69-9.494-.134-.479-1.572,11.737-13.233,11.737s-12.991-11.4-13.038-11.214S10.548,56.027,5.1,61.541C-1.408,68.13-.325,87.8,1.018,87.8c0,0,25.631,5.982,38.705,6.136C52.718,94.084,79.224,88.716,79.224,88.716Z" transform="translate(0 10.072)"/>
                        <path className="cl-icon-athlete-3" d="M60.637,27.468A29.08,29.08,0,0,0,53.854,8.879l.029-.012c-.325-.381-.676-.73-1.022-1.088-.1-.1-.186-.2-.284-.3-.448-.452-.917-.873-1.4-1.285-.1-.083-.191-.173-.291-.253-.494-.412-1.006-.795-1.53-1.161-.087-.064-.176-.13-.266-.191-.545-.37-1.1-.709-1.671-1.028L47.2,3.433q-.889-.481-1.816-.879c-.056-.023-.112-.048-.168-.07a20.09,20.09,0,0,0-1.954-.709c-.037-.012-.074-.021-.112-.033a19.524,19.524,0,0,0-2.079-.51c-.02-.006-.041-.008-.06-.012a20.536,20.536,0,0,0-2.19-.287h-.007C38.3.89,37.779.836,37.251.836c-12.658,0-22.942,11.619-23.364,26.125l33.77-15.28Z" transform="translate(2.959 -0.836)"/>
                        <g id="Rectangle" transform="translate(16.443 14.872)">
                          <path data-name="Path 3" className="cl-icon-athlete-4" d="M14.9,14.115A1.62,1.62,0,0,1,16.517,13.1s9.876,1.09,20.961,1.09A202.254,202.254,0,0,0,57.783,13.1a1.571,1.571,0,0,1,1.585,1.022,26.95,26.95,0,0,1,1.089,4.095,15.465,15.465,0,0,1,.394,3.265A1.3,1.3,0,0,1,59.692,22.8s-10.45,1.1-22.1,1.1c-12.02,0-22.828-1.1-22.828-1.1a1.345,1.345,0,0,1-1.2-1.321,17.077,17.077,0,0,1,.352-3.646A18.65,18.65,0,0,1,14.9,14.115Z" transform="translate(-13.555 -13.096)"/>
                          <path data-name="Path 4" className="cl-icon-athlete-5" d="M15.362,14.214l-.014.035c-.042.1-.122.307-.227.63-.179.55-.359,1.214-.527,1.991q-.1.463-.191.962a17.617,17.617,0,0,0-.346,3.453c0,.046,0,.046,0,.1a.74.74,0,0,0,.66.707l.483.047c.4.037.86.079,1.384.124,1.5.128,3.182.257,5.017.377,5.243.343,10.638.548,15.882.548,5.081,0,10.3-.205,15.377-.547,1.776-.12,3.406-.248,4.854-.376.506-.045.954-.086,1.338-.124l.473-.047a.708.708,0,0,0,.611-.739s0,0,0-.01a16.013,16.013,0,0,0-.384-3.108q-.073-.371-.151-.727c-.2-.921-.416-1.735-.631-2.433-.127-.414-.225-.695-.288-.861a.967.967,0,0,0-.94-.61l-.437.047c-.355.037-.768.079-1.235.124-1.334.128-2.836.256-4.474.375-4.679.341-9.509.546-14.228.546-4.865,0-9.848-.205-14.68-.547-1.691-.119-3.242-.248-4.621-.376-.483-.045-.909-.086-1.276-.124L16.35,13.6A1.017,1.017,0,0,0,15.362,14.214Z" transform="translate(-13.448 -12.989)"/>
                        </g>
                        <path className="cl-icon-athlete-1" d="M32.932,71.308l4.254,6.686" transform="translate(7.016 14.178)"/>
                        <path className="cl-icon-athlete-6" d="M37.187,82.076,55.612,54.041a53.264,53.264,0,0,0-7.388-1.891L32.933,75.39" transform="translate(7.016 10.097)"/>
                        <path className="cl-icon-athlete-7" d="M41.018,82.992,22.272,53.541a62.5,62.5,0,0,0-7.324,1.978L32.786,82.992Z" transform="translate(3.185 10.393)"/>
                        <path className="cl-icon-athlete-8" d="M41.832,83.24a7.474,7.474,0,1,1-7.474-7.565A7.519,7.519,0,0,1,41.832,83.24Z" transform="translate(5.728 15.109)"/>
                        <path className="cl-icon-athlete-9" d="M37.561,82.594a3.841,3.841,0,1,1-3.84-3.887,3.862,3.862,0,0,1,3.84,3.887" transform="translate(6.366 15.754)"/>
                      </g>
                    </g>
                  </svg>
                  <h5>{t('ProfileCompletion.title')}</h5>
                  <h2>{t('ProfileCompletion.athlete')}</h2>
                </div>
              </div>
              <div className="uk-width-xlarge-1-2 uk-width-large-1-2 uk-width-medium-1-1  uk-width-small-1-1">
                {short === false && (
                  <div className="processProgress">
                    <ul>
                      {
                        steps.map(i => {
                          const className = i === index ? 'processing' : i > index ? 'upcoming' : 'complete';
                          return (
                            <li key={i} className={className}>
                              <span>
                                {className === 'complete' &&
                                <svg className="tick-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 8">
                                  <path fill="none" fillRule="evenodd" stroke="#FFFFFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 3.793l2.095 2.794L9.38 1"/>
                                </svg>
                                }
                              </span>
                              <p>{t('ProfileCompletion.steps.' + i + '.text')}<br/> {t('ProfileCompletion.steps.' + i + '.text2')}</p>
                            </li>
                          );
                        })
                      }
                    </ul>
                  </div>
                )
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  static get propTypes() {
    return {
      index: PropTypes.number.isRequired,
      short: PropTypes.bool,
      p: PropTypes.shape({t: PropTypes.func}).isRequired
    };
  }
}

Completion.defaultProps = {
  short: false
};

const mapStateToProps = state => {
  const {sport} = state;
  return {
    sport
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

const ProfileCompletion = connect(mapStateToProps, mapDispatchToProps)(Completion);
export default translate(ProfileCompletion);
