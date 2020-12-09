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

  it('returns all users', async (done) => {
    const response = await request(server)
      .post('/graphql')
      .send({query: `{users { email } }`})
      .expect(200)
      expect(response.body.data.users.length).toBe(2);
    done();
  })

  
})
