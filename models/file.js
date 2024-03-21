import { DataTypes } from 'sequelize';
import { sequelize } from '../db.js';

const File = sequelize.define('File', {
  data: {
    type: DataTypes.BLOB,
    allowNull: false,
  },
});

export default File;
