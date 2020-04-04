import React from 'react';
import { useDispatch } from 'react-redux';
import { addPlayer } from '../../actions/actions';

const App = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <header>
        <h1>App</h1>
      </header>
      <section>
        {/* eslint-disable-next-line react/button-has-type */}
        <button onClick={() => dispatch(addPlayer())}>Button</button>
      </section>
    </div>
  );
};

export default App;
