'use strict'

// User
module.exports = function(sequelize, DataTypes) {
  let User = sequelize.define('users', {
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.TEXT
    },
    password: {
      type: DataTypes.TEXT
    },
    role: {
      type: DataTypes.TEXT
    }
    // Maybe we add something like this to this table:

    // personal_style: {
    //   type: DataTypes.STRING
    // }

    // But somehow make it so that when the user first signs up, or just hasn't taken the quiz, that this by default will read "Undetermined, please take our style quiz!", with a link to the quiz.
  })

  User.associate = function(models) {
    User.hasMany(models.Subscription)
  }

  return User
}
