const { createStore, applyMiddleware } = require('redux');
const game = require('../reducer/gameReducer');
const {
  socketListner,
  socketDispatcher,
} = require('../middleware/socketHandler');
const logger = require('../middleware/logger');

const gameStore = initialState =>
  createStore(
    game,
    initialState,
    applyMiddleware(logger, socketListner, socketDispatcher),
  );

module.exports = gameStore;
