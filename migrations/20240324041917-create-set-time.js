'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('set_times', {
      set_time_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      set_start_time: {
        allowNull: false,
        type: Sequelize.DATE
      },
      set_end_time: {
        allowNull: false,
        type: Sequelize.DATE
      },
      event_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'events',
          key: "event_id"
        }
      },
      stage_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'stages',
          key: "stage_id"
        }
      },
      band_id: {
        allowNull: false,
        type: Sequelize.INTEGER.UNSIGNED,
        references: {
          model: 'bands',
          key: "band_id"
        }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('set_times');
  }
};