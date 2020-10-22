export const CREATE_PLAYER = "CREATE_PLAYER";
export const REMOVE_PLAYER = "REMOVE_PLAYER";

export interface Players {
  name: string;
  room: string;
}

export interface GameState {
  players: Players[];
}

interface CreatePlayerAction {
  type: typeof CREATE_PLAYER;
  payload: Players;
}

interface RemovePlayerAction {
  type: typeof REMOVE_PLAYER;
  meta: {
    name: string;
  };
}

export type PlayerActionTypes = CreatePlayerAction | RemovePlayerAction;
