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
      // styles: {
      // {...style: Sequalize.STRING}
      // }
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

// This looks like the most strategic place to add the style update.  I do wonder if one product can have multiple styles, which is why I believe it should be an array of sorts.

// Here's a doc I found that might help us figure out how to list multiple styles: https://typeofnan.dev/an-approach-to-js-object-schema-migration/

// id is an integer, name is a string, slug is a string (and this is used to develop additional info in a URI that matches with the name, this is processed autmatically with code that is available in the codebase), description is text, type is integer, styles I would want it to be an array, but right now we are accepting that it can be a string, gender is an integer, image is in text, createdAt/updatedAt as a time object and it is NOT allowed to be null.
