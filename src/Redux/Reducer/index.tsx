import {combineReducers} from 'redux';
import {registerReducer} from './auth';
import {globalReducer} from './global';
import {userReducer} from './user';
import {bankReducer} from './bank';
import {providerReducer} from './provider';
import {transactionReducer} from './transaction';
import {tipsReducer} from './tips';

const reducer = combineReducers({
  registerReducer,
  globalReducer,
  userReducer,
  bankReducer,
  providerReducer,
  transactionReducer,
  tipsReducer,
});

export default reducer;
