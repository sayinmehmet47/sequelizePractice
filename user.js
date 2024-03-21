import { Op } from 'sequelize';
import User from './models/user.js';

export async function userQuery() {
  await User.sync({ force: true });
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
  console.log('All users', JSON.stringify(users, null, 2));
  const findUser = await User.findOne({
    where: { age: 35, firstName: 'Ada' },
  });
  console.log('Finded person', JSON.stringify(findUser, null, 2));

  const olderUser = await User.max('age');
  console.log('Older person', JSON.stringify(olderUser, null, 2));

  // older then 32
  const peopleOverThirtyTwo = await User.findAll({
    where: {
      age: {
        [Op.gt]: 32,
      },
    },
  });
  console.log('Over 35', JSON.stringify(peopleOverThirtyTwo, null, 2));

  // paranoid delete
  await User.destroy({
    where: {
      id: 1,
    },
  });
}
