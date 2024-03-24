'use strict';


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.removeColumn('bands', 'available_start_time')
    await queryInterface.removeColumn('bands', 'end_time')
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.addColumn('bands', 'available_start_time', 
    { type: Sequelize.DataTypes.DATE });
    await queryInterface.addColumn('bands', 'end_time', 
    { type: Sequelize.DataTypes.DATE });
  }
};
