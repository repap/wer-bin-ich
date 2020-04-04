import { createStore, applyMiddleware } from "redux";
import { game } from "../reducer/gameReducer";
import logger from "../middleware/logger";

export default (initialState) => {
  return createStore(game, initialState, applyMiddleware(logger));
};
