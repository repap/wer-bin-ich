import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducer/rootReducer';
import logger from '../middleware/logger';
import websockets from '../middleware/websockets/websockets';
import apiCalls from '../middleware/apiCalls';

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

export default initialState => {
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(logger, apiCalls, websockets)),
  );
};
