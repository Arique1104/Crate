// I made anotations here.
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('crates', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
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
    return queryInterface.dropTable('crates');
  }
}

// I still believe we should have multiple crates that are representative of multiple styles so that the products can be present in multiple places that they fit in.  But I'm not sure how we would go about that.  It could be a graphql request that searches all product style arrays that match the style ids represented in the crates.

// But as for now, we are leaving these crates alone.

// Crates have an id as an integer, a name as a string, a description as text, and createdAt/updatedAt as a time object and it is NOT allowed to be null.
