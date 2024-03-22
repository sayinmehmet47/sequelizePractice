import { userQuery } from './user.js';
import { readFileSync } from 'fs';
import { captainAndShipQuery } from './captainShip.js';

import File from './models/file.js';
import { sequelize } from './db.js';

async function createConnection() {
  try {
    await sequelize.authenticate();

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
  const fileData = readFileSync('./hero.png');
  await File.create({
    data: fileData,
  });
}

async function getDatabaseSize() {
  try {
    const result = await sequelize.query("SELECT pg_database_size('postgres')");
  } catch (error) {
    console.error('Unable to execute the query:', error);
  }
}
