import {
  Players,
  CREATE_PLAYER,
  REMOVE_PLAYER,
  PlayerActionTypes,
} from "./types";

// TypeScript infers that this function is returning CreatePlayerAction
export function sendMessage(player: Players): PlayerActionTypes {
  return {
    type: CREATE_PLAYER,
    payload: player,
  };
}

// TypeScript infers that this function is returning RemovePlayerAction
export function deleteMessage(timestamp: number): PlayerActionTypes {
  return {
    type: REMOVE_PLAYER,
    meta: {
      timestamp,
    },
  };
}
