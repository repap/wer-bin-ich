import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducer/rootReducer';
import logger from '../middleware/logger';
import websockets from '../middleware/websockets/websockets';

export default initialState => {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(logger, websockets),
  );
};
