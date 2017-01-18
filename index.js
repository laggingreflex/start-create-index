module.exports = (files = [], config = {}) => (input) => function createIndex(log, reporter) {
  return new Promise((resolve, reject) => {
    const writeIndexCli = require('create-index/dist/utilities/writeIndexCli').default;
    try {
      writeIndexCli(files, config);
      resolve();
    } catch (err) {
      reject(err);
    }
  })
}
