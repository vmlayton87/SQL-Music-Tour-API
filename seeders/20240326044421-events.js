'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('events', [
      { name:'Battle of the Bands', 
        date: '2022-05-14', 
        event_start_time: '2022-05-14T17:00:00', 
        event_end_time: '2022-05-14T23:30:00'},
      { name:'Fun House', 
        date: '2025-09-28', 
        event_start_time: '2025-09-28T17:00:00', 
        event_end_time: '2025-09-28T23:30:00'},
      { name:'Old School Night', 
        date: '2015-07-22', 
        event_start_time: '2015-07-22T17:00:00', 
        event_end_time: '2015-07-22T23:30:00'},
      { name:'New School Night', 
        date: '2015-08-22', 
        event_start_time: '2015-08-22T17:00:00', 
        event_end_time: '2015-08-22T23:30:00'}     
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('events', null, {});
  }
};
