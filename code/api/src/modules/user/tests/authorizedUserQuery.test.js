import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from '../../../setup/schema/index';
import request from 'supertest';
import models from "../../../setup/models"
const bcrypt = require('bcrypt');
const config = require('../../../config/server.json');
const User = require('../../../modules/user/model');

describe('user queries', () => {
  let server;

  beforeAll(() => {
    server = express();

    server.use(
      '/',
      graphqlHTTP({
        schema: schema,
        graphiql: false
      })
    )
  });

  beforeEach(async () => {
    const user1 = {
      name: "Queen BEE",
      email: "queenBee@crate.com",
      password: bcrypt.hashSync('123456', config.saltRounds),
      role: "user",
    }

    await models.User.create(user1)
  });

  afterEach(async () => {
    await models.User.destroy({ where: {}});
  });

  afterAll(() => {
    server.close();
  });


  it('updates a users styles', async(done) => {
    const tokenResponse = await request(server)
      .post('/')
      .send({query: `query { userLogin(email: "queenBee@crate.com", password: "123456", role: "user") { token user {id} }`})
console.log(tokenResponse.body.data)
    const token = tokenResponse.body.data.userLogin.token

    const response = await request(server)
      .post('/graphql')
      // .set('Content-Type', 'application/json')
      // .set('Accept', 'application/json')
      .send({query: `mutation { userUpdate(primaryStyle: "Racecar Driver", secondaryStyle: "Punk" ) { token: ${token} primaryStyle secondaryStyle } }`})
      console.log(response.body)
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

  // it('updates a users styles', async (done) => {
  //   const response = await request(server)
  //     .post('/graphql')
  //     .send({query: `mutation { userUpdate( id: 2, primaryStyle: "Racecar Driver", secondaryStyle: "Punk" ) { id primaryStyle secondaryStyle } }`})
  //     .expect(200)
  //     expect(response.body.data.userUpdate.primaryStyle).toBe('Racecar Driver');
  //     expect(response.body.data.userUpdate.secondaryStyle).toBe('Punk');
  //   done();
  // })

})
