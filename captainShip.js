import { Captain, Ship } from './index.js';

export async function captainAndShipQuery() {
  Captain.hasOne(Ship, {
    foreignKey: 'captainId',
  });
  Ship.belongsTo(Captain, { as: 'leader' });
  await Captain.sync({ force: true });
  await Ship.sync({ force: true });

  const captain = await Captain.create({
    name: 'Jack Sparrow',
    skillLevel: 7,
  });
  const ship = await Ship.create({
    name: 'Tytanic',
    crewCapacity: 2500,
    amountOfSails: 23,
  });

  captain.setShip(ship);

  const awesomeCaptain = await Captain.findOne({
    where: {
      name: 'Jack Sparrow',
    },
  });

  console.log('Name:', awesomeCaptain.name);
  console.log((await captain.getShip()).toJSON());
  console.log(
    (await Ship.findAll({ include: 'leader' })).map((ship) => ship.toJSON())
  );
}
