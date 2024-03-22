import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';

const Captain = sequelize.define(
  'Captain',
  {
    name: DataTypes.TEXT,
    skillLevel: {
      type: DataTypes.INTEGER,
      validate: { min: 1, max: 10 },
    },
  },
  { timestamps: false }
);

export default Captain;
