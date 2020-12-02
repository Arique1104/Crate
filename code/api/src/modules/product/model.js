'use strict'

// Product
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('products', {
    // We will likely have to change this too
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
    // style: {
    //   type: DataTypes.INTEGER
    // },
    gender: {
      type: DataTypes.INTEGER
    },
    image: {
      type: DataTypes.TEXT
    }
  })
}
