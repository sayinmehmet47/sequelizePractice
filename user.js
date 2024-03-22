import { Op } from 'sequelize';
import User from './models/user.js';

export async function userQuery() {
  // await User.sync({ force: true });
  const john = await User.create({
    firstName: 'John',
    lastName: 'Doe',
    age: 33,
  });
  const jane = await User.create({
    firstName: 'Jane',
    lastName: 'Doe',
    age: 23,
  });
  john.firstName = 'Ada';
  await john.save();
  // await john.destroy();
  await john.increment({
    age: 2,
  });

  const users = await User.findAll();
  const findUser = await User.findOne({
    where: { age: 35, firstName: 'Ada' },
  });

  const olderUser = await User.max('age');

  // older then 32
  const peopleOverThirtyTwo = await User.findAll({
    where: {
      age: {
        [Op.gt]: 32,
      },
    },
  });

  // paranoid delete
  await User.destroy({
    where: {
      id: 1,
    },
  });
}
