const logger = () => next => action => {
  console.group(action.type);
  console.info('dispatching', action);
  const result = next(action);
  console.groupEnd();
  return result;
};

module.exports = logger;
