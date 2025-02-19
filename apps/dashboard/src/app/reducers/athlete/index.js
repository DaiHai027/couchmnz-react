import {combineReducers} from 'redux';
import common from './common';
import dashboard from './dashboard';
import registration from './registration';

const athlete = combineReducers({
  ...common,
  ...dashboard,
  ...registration
});

export default athlete;
