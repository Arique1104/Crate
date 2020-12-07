module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('subscriptions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        },
        allowNull: false
      },
      crateId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'crates',
          key: 'id'
        },
        allowNull: false
      },
      // primaryUserStyle: {
      // type: Sequalize.INTEGER
      // },
      // secondaryUserStyle: {
      // type: Sequalize.INTEGER
      // },
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
    return queryInterface.dropTable('subscriptions');
  }
}
// Because this Subscriptions page is a JOINS TABLE where the user is referenced and the crateId is referenced, this made the most strategic sense to include the primary and secondary user styles be added to this table.

// Subscription has an id as an integer, userId as a foreign key, crateID as a foreign key, and createdAt/updatedAt as a time object and it is NOT allowed to be null.
