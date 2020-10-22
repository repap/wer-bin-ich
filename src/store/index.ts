import { combineReducers } from "redux";
import { gameReducers } from "./game/reducers";

const rootReducer = combineReducers({
  game: gameReducers,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
