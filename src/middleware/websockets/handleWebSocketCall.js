export default async (store, action) => {
  const { socket } = store.getState();
  socket.send(JSON.stringify(action));
};
