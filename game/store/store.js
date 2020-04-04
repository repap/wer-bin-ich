const { createStore, applyMiddleware } = require('redux');
const rootReducer = require('../reducer/rootReducer');
const game = require('../reducer/gameReducer');
const {
  socketListner,
  socketDispatcher,
} = require('../middleware/socketHandler');
const logger = require('../middleware/logger');

const gameStore = initialState => {
  return createStore(
    game,
    initialState,
    applyMiddleware(
      logger,
      socketListner,
      socketDispatcher
    ),
  );
};

module.exports = gameStore;
