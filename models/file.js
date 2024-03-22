import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';

const File = sequelize.define('File', {
  data: {
    type: DataTypes.BLOB,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
  },
  createdAt: {
    type: DataTypes.DATE,
  },
});

export default File;
