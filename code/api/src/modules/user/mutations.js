// Imports
import { GraphQLString, GraphQLInt } from 'graphql'

// App Imports
import { UserType } from './types'
import { create, update, remove } from './resolvers'

// Create
export const userSignup = {
  type: UserType,
  args: {
    name: {
      name: 'name',
      type: GraphQLString
    },

    email: {
      name: 'email',
      type: GraphQLString
    },

    password: {
      name: 'password',
      type: GraphQLString
    }
  },
  resolve: create
}

// User Update
export const userUpdate = {
  type: UserType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    },
    //
    // name: {
    //   name: 'name',
    //   type: GraphQLString
    // },
    //
    // email: {
    //   name: 'email',
    //   type: GraphQLString
    // },
    //
    // password: {
    //   name: 'password',
    //   type: GraphQLString
    // },

    primaryStyle: {
      name: 'primaryStyle',
      type: GraphQLString
    },

    secondaryStyle: {
      name: 'secondaryStyle',
      type: GraphQLString
    }
  },
  resolve: update
}

// Remove
export const userRemove = {
  type: UserType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}
