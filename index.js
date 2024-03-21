import { userQuery } from './user.js';
import { readFileSync } from 'fs';
import { captainAndShipQuery } from './captainShip.js';
import User from './models/user.js';
import File from './models/file.js';
import { sequelize } from './db.js';

async function createConnection() {
  try {
    await sequelize.authenticate();
    await User.sync({ force: true });
    await userQuery();
    await fileQuery();
    await captainAndShipQuery();
    await getDatabaseSize();
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

createConnection();

async function fileQuery() {
  await File.sync({ force: true });

  const fileData = readFileSync('./hero.png');
  await File.create({
    data: fileData,
  });
}

async function getDatabaseSize() {
  try {
    const result = await sequelize.query("SELECT pg_database_size('postgres')");
    console.log(`Database size: ${result[0][0].pg_database_size} bytes`);
  } catch (error) {
    console.error('Unable to execute the query:', error);
  }
}
