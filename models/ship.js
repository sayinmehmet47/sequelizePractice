import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';

const Ship = sequelize.define(
  'ship',
  {
    name: DataTypes.TEXT,
    crewCapacity: DataTypes.INTEGER,
    amountOfSails: DataTypes.INTEGER,
  },
  { timestamps: false }
);

export default Ship;
