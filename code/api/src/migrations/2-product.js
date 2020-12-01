module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('products', {
      //  yeah, all of this is what the migrations are.  We will likely have to add a column here for 'style'
      // It will probably look like what I've got below, commented out
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
      // style: {
      //   style: Sequelize.STRING
      // },
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
