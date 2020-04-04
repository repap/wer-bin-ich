/* eslint-disable no-undef */
import { addSocket, removeSocket } from '../../actions/actions';

const getWebSocketUrl = gameId =>
  `ws://${window.location.host}/api/socket/${gameId}`;

export default (dispatch, gameId) =>
  new Promise((resolve, reject) => {
    // eslint-disable-next-line no-undef
    const socket = new WebSocket(getWebSocketUrl(gameId));

    socket.addEventListener('open', () => {
      dispatch(addSocket(socket));
      resolve(socket);
    });

    socket.addEventListener('message', e =>
      console.log('recieved message:', e),
    );

    socket.addEventListener('close', () => {
      console.log('Connection closed');
      dispatch(removeSocket());
    });

    socket.addEventListener('error', e => {
      reject(e);
    });
  });
