export default async (store, action) => {
  const { socket } = store.getState().game;
  socket.send(JSON.stringify(action));
};
