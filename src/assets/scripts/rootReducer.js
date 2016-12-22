import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { homeReducers } from './modules/home/home.reducers';

const rootReducer = combineReducers({
  home: homeReducers,
  routing: routerReducer
});

export default rootReducer;