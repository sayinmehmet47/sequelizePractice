import Captain from './models/captain.js';
import Ship from './models/ship.js';

export async function captainAndShipQuery() {
  Captain.hasOne(Ship, { as: 'ship', foreignKey: 'captainId' });
  Ship.belongsTo(Captain, { as: 'captain', foreignKey: 'captainId' });

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
    include: {
      model: Ship,
      as: 'ship',
    },
  });

  console.log('awesomeCaptain', JSON.stringify(awesomeCaptain, null, 2));
  console.log((await captain.getShip()).toJSON());
  console.log(
    await Ship.findAll({
      include: {
        model: Captain,
        as: 'captain',
        where: { name: 'Jack Sparrow' },
      },
    })
  );
}
