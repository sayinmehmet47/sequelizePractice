'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Ships', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      crewCapacity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      amountOfSails: {
        type: Sequelize.INTEGER, // Assuming amountOfSails is not a typo
        allowNull: false,
      },
      captainId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Captains',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Ships');
  },
};
