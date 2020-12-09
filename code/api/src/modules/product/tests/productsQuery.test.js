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

  it('returns all products', async (done) => {
    const response = await request(server)
      .post('/graphql')
      .send({query: `{products { name } }`})
      .expect(200)
      expect(response.body.data.products.length).toBe(10);
    done();
  })

  it('returns a product based on id and only has style info', async(done) => {
    const response = await request(server)
      .post('/graphql')
      .send({query: `{productById(productId:1) { style } }`})
      .expect(200)
    expect(response.body).toMatchObject({
      data:{
        productById: {
          style: 'Classy'
        }
      }
    })
    expect(response.body.data.productById.style).toBe('Classy')
    done();
  })
})
