'use strict';

module.exports = {
    up(queryInterface, Sequelize) {
      return Promise.all([
        queryInterface.addColumn(
          'users',
          'secondaryStyle',
          {
            type: Sequelize.STRING,
            allowNull: true,
          },
        ),
      ]);
    },
    down(queryInterface, Sequelize) {
      // logic for reverting the changes
      return Promise.all([
        queryInterface.removeColumn('users', 'secondaryStyle'),
      ]);
    },
  };
