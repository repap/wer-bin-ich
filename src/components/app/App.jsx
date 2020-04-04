import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Chat from '../chat/Chat';
import { createSocket, requestNewGame } from '../../actions/actions';

const App = () => {
  const dispatch = useDispatch();
  const { gameId, socket } = useSelector(s => s.game);

  useEffect(() => {
    if (gameId && !socket) {
      dispatch(createSocket(gameId));
    }
  }, [gameId, dispatch, socket]);

  return (
    <div className="container">
      <div className="jumbotron text-center">
        <h1 className="display-4">Wer bin ich?!?</h1>
        <p className="lead">...</p>
        <hr className="my-4" />
        <p>...</p>
        <div className="row justify-content-md-center">
          <button
            className="btn btn-primary btn-lg"
            type="button"
            onClick={() => dispatch(requestNewGame())}
          >
            Neues Spiel erstellen
          </button>
        </div>
      </div>
      <div className="row">
        <Chat />
      </div>
    </div>
  );
};

export default App;
