'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn('Favorites', 'postid', {   type: Sequelize.INTEGER,
      onDelete: 'CASCADE',
      references: {
              model: 'Posts',
              key: 'id',
              as: 'postid'

            }});

  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeColumn('Favorites', 'postId');
  }
};
