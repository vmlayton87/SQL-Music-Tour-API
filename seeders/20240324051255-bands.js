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
    await queryInterface.bulkInsert('bands', [
      { name: 'Paramore', genre: 'rock, punk'},
      { name: 'Ed Sheeran', genre: 'pop, rap, folk'},
      { name: 'Taylor Swift', genre: 'country, pop'},
      { name: 'Melanie Martinez', genre: 'new age'},
      { name: 'Linkin Park', genre: 'rock, punk'},
      { name: 'Shania Twain', genre: 'country'}
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('bands', null, {});
  }
};
