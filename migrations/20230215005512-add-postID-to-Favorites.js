'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn('Favorites', 'postid', {   type: Sequelize.INTEGER,
      onDelete: 'NO ACTION',
      references: {
              model: 'Post',
              key: 'id',
              as: 'postid'
      }});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
