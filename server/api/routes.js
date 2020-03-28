module.exports = (app) => {
  app.use('/api/createGame', require('./createGame/createGameRouter'));
};
