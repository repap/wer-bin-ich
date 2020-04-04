import { addSocket, removeSocket } from '../../actions/actions';

const getWebSocketUrl = gameId => `/api/socket/${gameId}`;

export default (dispatch, gameId) =>
  new Promise((resolve, reject) => {
    // eslint-disable-next-line no-undef
    const socket = new WebSocket(getWebSocketUrl(gameId));

    socket.addEventListener('open', () => {
      dispatch(addSocket(socket));
      resolve(socket);
    });

    socket.addEventListener('message', e => dispatch(JSON.parse(e.data, null)));

    socket.addEventListener('close', () => {
      console.log('Connection closed');
      dispatch(removeSocket());
    });

    socket.addEventListener('error', e => {
      reject(e);
    });
  });
