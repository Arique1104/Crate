// Imports
import { GraphQLString, GraphQLInt, GraphQLList } from 'graphql'

// App Imports
import { ProductType, ProductTypesType } from './types'
import { getAll, getBySlug, getById, getRelated, getTypes } from './resolvers'

// Products All
export const products = {
  type: new GraphQLList(ProductType),
  resolve: getAll
}

// Product By slug
export const product = {
  type: ProductType,
  args: {
    slug: { type: GraphQLString }
  },
  resolve: getBySlug
}

// Product By ID
export const productById = {
  type: ProductType,
  args: {
    productId: { type: GraphQLInt }
  },
  resolve: getById
}

// Products Related
export const productsRelated = {
  type: new GraphQLList(ProductType),
  args: {
    productId: { type: GraphQLInt }
  },
  resolve: getRelated
}

// Product Types
export const productTypes = {
  type: new GraphQLList(ProductTypesType),
  resolve: getTypes
}

// Need to add a product styles query
// Will likely be very similar to the above product types query above

// We need to figure out how the FE wants to pull in these products for the survey
// If they want to do the sorting on their end, they could use the products all query since they can get the style IDs
// Another option is we could make a productByStyleId query, where they can pull in all clothes for a specific style
// We could probably even go even deeper, and make a query that pulls a random clothing item from the db that fits the FE description
// For example, we could make a query that can take in a type ID and a style ID, so if for the FE survey, the team needs a "Lumbersexual top" we could just grab a random item that is a lumbersexual top
