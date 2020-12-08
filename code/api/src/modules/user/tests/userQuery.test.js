// describe('User Queries', () => {
//   it('tests the truth', () => {
//     expect(true).toBe(true);
//   })
// })
import request from 'supertest';
import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from '../../../setup/schema';

describe('User Queries', () => {
  beforeAll(() => {
    server = express();
    server.use(
    "/",
      graphqlHTTP({
        schema:schema,
        graphiql: false
      })
    )
  })
  it('returns all users', async (done) => {
    const response = await request(server)
    .post('/graphql')
    .send({ query: `{users { email } }`})
    .expect(200)
    console.log(response.body);
    expect(response.body.data.users.length).toBe(2)
    done();
  });
  it.only('returns a user based on id', async(done) => {
    const response = await request(server)
    .post('/graphql')
    .send({query: `{user(id:1) { email name role createdAt } }`})
    .expect(200)
    console.log(response.body.data);
    expect(response.body).toMatchObject({
      data:{
        user:{
          email: 'admin@crate.com',
          name: 'The Admin',
          role: 'ADMIN',
          createdAt: '1607445458849'
        }
      }
    })
    done();
  })


})
