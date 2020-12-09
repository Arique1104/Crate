import request from 'supertest';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from '../../../setup/schema';

describe('test the truth', () => {
  let server;
  beforeAll(() => {
    server = express();
    server.use(
      "/",
      graphqlHTTP({
        schema: schema,
        graphiql: false
      })
    )
  })

  
})
