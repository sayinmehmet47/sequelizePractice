import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';
import Captain from './captain.js';

const Ship = sequelize.define(
  'Ship',
  {
    name: DataTypes.TEXT,
    crewCapacity: DataTypes.INTEGER,
    amountOfSails: DataTypes.INTEGER,
  },
  { timestamps: false }
);

export default Ship;
