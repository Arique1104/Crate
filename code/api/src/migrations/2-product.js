module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      slug: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      type: {
        type: Sequelize.INTEGER
      },
      gender: {
        type: Sequelize.INTEGER
      },
      image: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('products');
  }
}

// Need to add column to this with style type
// Should be integer from the params file
// npm install --save sequelize
// Perhaps a migration that looks something like:
// npx sequelize-cli migration:create --name modify_products_add_style
// In that migration file, something like this?

// module.exports = {
//   up(queryInterface, Sequelize) {
//     return Promise.all([
//       queryInterface.addColumn(
//         'Products',
//         'style',
//         {
//           type: Sequelize.INTEGER,
//           allowNull: false,
//         },
//       ),
//     ]);
//   },

//   down(queryInterface, Sequelize) {
//     // logic for reverting the changes
//     return Promise.all([
//       queryInterface.removeColumn('Products', 'style'),
//     ]);
//   },
// };
