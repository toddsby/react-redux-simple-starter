import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import { routerMiddleware } from 'react-router-redux';

/*
const configureStore = ( initialState = {}, history ) => {
  const middlewares = [
    routerMiddleware( history )
  ];
  return createStore( 
    initialState, 
    rootReducer, 
    applyMiddleware(...middlewares) );
};
*/

const configureStore = ( initialState ) => {
  const middlewares = [];
  const enhancers = [];
  // order matters!! createStore params must be ordered: reducer, preloadedState, enhancers 
  return createStore( 
    rootReducer, 
    initialState,
    compose(
      applyMiddleware(...middlewares),
      ...enhancers
    )
  );
};

export default configureStore;