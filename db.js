import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('postgres', 'postgres', 'test', {
  host: 'localhost',
  dialect: 'postgres',
});

export { sequelize };
