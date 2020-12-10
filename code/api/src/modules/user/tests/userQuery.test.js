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

  it('returns a user based on id and only has style info', async(done) => {
    const response = await request(server)
      .post('/graphql')
      .send({query: `{user(id:1) { primaryStyle secondaryStyle } }`})
      .expect(200)
    expect(response.body).toMatchObject({
      data:{
        user: {
          primaryStyle: 'Classy',
          secondaryStyle: 'Lumbersexual'
        }
      }
    })
    expect(response.body.data.user.primaryStyle).toBe('Classy')
    expect(response.body.data.user.secondaryStyle).toBe('Lumbersexual')
    done();
  })

  it('updates a users styles', async (done) => {
    const response = await request(server)
      .post('/graphql')
      .send({query: `mutation {userUpdate { name:id  } }`})
      console.log(response.body)
      .expect(200)
      expect(response.body.data.users.length).toBe(2);
    done();
  })

})
