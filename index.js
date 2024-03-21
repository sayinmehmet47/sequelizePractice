import { DataTypes, Sequelize } from 'sequelize';
import { userQuery } from './user.js';
import { readFileSync } from 'fs';
import { captainAndShipQuery } from './captainShip.js';

export const sequelize = new Sequelize('postgres', 'postgres', 'test', {
  host: 'localhost',
  dialect: 'postgres',
});

export const User = sequelize.define(
  'User',
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  // for soft delete(paranoid)
  {
    paranoid: true,
    deletedAt: 'deleted_at',
  }
);

const File = sequelize.define('File', {
  data: {
    type: DataTypes.BLOB,
    allowNull: false,
  },
});

export const Ship = sequelize.define(
  'ship',
  {
    name: DataTypes.TEXT,
    crewCapacity: DataTypes.INTEGER,
    amountOfSails: DataTypes.INTEGER,
  },
  { timestamps: false }
);
export const Captain = sequelize.define(
  'captain',
  {
    name: DataTypes.TEXT,
    skillLevel: {
      type: DataTypes.INTEGER,
      validate: { min: 1, max: 10 },
    },
  },
  { timestamps: false }
);

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
