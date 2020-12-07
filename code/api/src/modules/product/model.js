'use strict'

// Product
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('products', {
    name: {
      type: DataTypes.STRING
    },
    slug: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    },
    type: {
      type: DataTypes.INTEGER
    },
    // styleType {
    // type: DataTypes.INTEGER
    // },
    gender: {
      type: DataTypes.INTEGER
    },
    image: {
      type: DataTypes.TEXT
    }
  })
}

// If we add styleType as an array, we'll have to change that here.  But since I have no idea how to create an array in Javascript (YET!) we are going with an integer that represents different styles.

// This model has the following queries:
// getAll
// getBySlug
// getById
// getRelated
// getTypes

// we will be adding a getStyle within the query and resolvers.

// This model holds a name as string, slug as string, description as text, type as integer, styleType as integer we will add, gender as an integer, image as text.
