'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('blog_posts', 'user_id', { 
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: 'users', 
        after: 'content',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
     
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('blog_posts', 'user_id');
  }
};