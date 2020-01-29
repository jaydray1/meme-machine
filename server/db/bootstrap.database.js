import massive from 'massive';
import path from 'path';

let dbPromise;

const connectToDb = () => {
  if (dbPromise) return dbPromise;

  dbPromise = massive(process.env.DB_CONNECTION_STRING, { scripts: path.join(__dirname, '/scripts') })
    .then((dbInstance) => dbInstance)
    .catch((error) => {
      dbPromise = null;
      throw new Error(error);
    });

  return dbPromise;
};

module.exports = { connectToDb };
