'use strict';

module.exports = {
    up(queryInterface, Sequelize) {
      return Promise.all([
        queryInterface.addColumn(
          'products',
          'style',
          {
            type: Sequelize.STRING,
            allowNull: false,
          },
        ),
      ]);
    },
    down(queryInterface, Sequelize) {
      // logic for reverting the changes
      return Promise.all([
        queryInterface.removeColumn('products', 'style'),
      ]);
    },
  };
