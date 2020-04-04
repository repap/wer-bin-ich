const { combineReducers } = require("redux");
const game = require("./gameReducer");

const rootReducer = combineReducers({
  game,
});

module.exports = rootReducer;
