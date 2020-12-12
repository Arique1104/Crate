'use strict';

const params = require('../config/params');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('products', [
      {
        name: 'T-Shirt for Women - Black',
        slug: 't-shirt-for-women-black',
        description: 'A very nice black t-shirt for women.',
        type: params.product.types.top.id,
        style: "Classy",
        gender: params.user.gender.female.id,
        image: '/images/stock/survey/survey-classictop.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'T-Shirt for men - Grey',
        slug: 't-shirt-for-men-grey',
        description: 'A very nice grey t-shirt for men.',
        type: params.product.types.top.id,
        style: "Classy",
        gender: params.user.gender.male.id,
        image: '/images/stock/survey/survey-classictop.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pants for women - White',
        slug: 'pants-for-women-white',
        description: 'A very nice white pants for women.',
        type: params.product.types.bottom.id,
        style: "Classy",
        gender: params.user.gender.female.id,
        image: '/images/stock/survey/survey-classicbottom.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pants for Men',
        slug: 'pants-for-men',
        description: 'A very nice pants for men.',
        type: params.product.types.bottom.id,
        style: "Classy",
        gender: params.user.gender.male.id,
        image: '/images/stock/survey/survey-classicbottom.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Shoes for Women',
        slug: 'shoes-for-women',
        description: 'A very nice shoes for women.',
        type: params.product.types.shoe.id,
        style: "Classy",
        gender: params.user.gender.female.id,
        image: '/images/stock/survey/survey-classicshoes.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Shoes for Men',
        slug: 'shoes-for-men',
        description: 'A very nice shoes for men.',
        type: params.product.types.shoes.id,
        style: "Classy",
        gender: params.user.gender.male.id,
        image: '/images/stock/survey/survey-classicshoes.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Belt for Women',
        slug: 'belt-for-women',
        description: 'A very nice belt for women.',
        type: params.product.types.accessory.id,
        style: "Classy",
        gender: params.user.gender.female.id,
        image: '/images/stock/survey/survey-classicaccessory-female.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Belt for Men',
        slug: 'belt-for-men',
        description: 'A very nice belt for men.',
        type: params.product.types.accessory.id,
        style: "Sporty",
        gender: params.user.gender.male.id,
        image: '/images/stock/survey/survey-classicaccessory-male.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Underpant for Women',
        slug: 'underpant-for-women',
        description: 'A very nice underpant for women.',
        type: params.product.types.underpant.id,
        style: "Classy",
        gender: params.user.gender.female.id,
        image: '/images/stock/survey/survey-classicunderpants-female.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Underpant for Men',
        slug: 'underpant-for-men',
        description: 'A very nice underpant for men.',
        type: params.product.types.underpant.id,
        style: "Classy",
        gender: params.user.gender.male.id,
        image: '/images/stock/survey/survey-classicunderpants-male.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'T-Shirt for Women - Black',
        slug: 't-shirt-for-women-black',
        description: 'A very nice black t-shirt for women.',
        type: params.product.types.top.id,
        style: "Punk",
        gender: params.user.gender.female.id,
        image: '/images/stock/survey/survey-punktop.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'T-Shirt for men - Grey',
        slug: 't-shirt-for-men-grey',
        description: 'A very nice grey t-shirt for men.',
        type: params.product.types.top.id,
        style: "Punk",
        gender: params.user.gender.male.id,
        image: '/images/stock/survey/survey-punktop-male.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pants for women - White',
        slug: 'pants-for-women-white',
        description: 'A very nice white pants for women.',
        type: params.product.types.bottom.id,
        style: "Punk",
        gender: params.user.gender.female.id,
        image: '/images/stock/survey/survey-punkbottom.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pants for Men',
        slug: 'pants-for-men',
        description: 'A very nice pants for men.',
        type: params.product.types.bottom.id,
        style: "Punk",
        gender: params.user.gender.male.id,
        image: '/images/stock/survey/survey-punkbottom.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Shoes for Women',
        slug: 'shoes-for-women',
        description: 'A very nice shoes for women.',
        type: params.product.types.shoe.id,
        style: "Punk",
        gender: params.user.gender.female.id,
        image: '/images/stock/survey/survey-punkshoes.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Shoes for Men',
        slug: 'shoes-for-men',
        description: 'A very nice shoes for men.',
        type: params.product.types.shoes.id,
        style: "Punk",
        gender: params.user.gender.male.id,
        image: '/images/stock/survey/survey-punkshoes.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Belt for Women',
        slug: 'belt-for-women',
        description: 'A very nice belt for women.',
        type: params.product.types.accessory.id,
        style: "Punk",
        gender: params.user.gender.female.id,
        image: '/images/stock/survey/survey-classicaccessory-female.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Belt for Men',
        slug: 'belt-for-men',
        description: 'A very nice belt for men.',
        type: params.product.types.accessory.id,
        style: "Punk",
        gender: params.user.gender.male.id,
        image: '/images/stock/survey/survey-classicaccessory-male.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Underpant for Women',
        slug: 'underpant-for-women',
        description: 'A very nice underpant for women.',
        type: params.product.types.underpant.id,
        style: "Punk",
        gender: params.user.gender.female.id,
        image: '/images/stock/survey/survey-classicunderpants-female.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Underpant for Men',
        slug: 'underpant-for-men',
        description: 'A very nice underpant for men.',
        type: params.product.types.underpant.id,
        style: "Punk",
        gender: params.user.gender.male.id,
        image: '/images/stock/survey/survey-classicunderpants-male.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'T-Shirt for Women - Black',
        slug: 't-shirt-for-women-black',
        description: 'A very nice black t-shirt for women.',
        type: params.product.types.top.id,
        style: "Sporty",
        gender: params.user.gender.female.id,
        image: '/images/stock/survey/survey-sportytop.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'T-Shirt for men - Grey',
        slug: 't-shirt-for-men-grey',
        description: 'A very nice grey t-shirt for men.',
        type: params.product.types.top.id,
        style: "Sporty",
        gender: params.user.gender.male.id,
        image: '/images/stock/survey/survey-sportytop-male.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pants for women - White',
        slug: 'pants-for-women-white',
        description: 'A very nice white pants for women.',
        type: params.product.types.bottom.id,
        style: "Sporty",
        gender: params.user.gender.female.id,
        image: '/images/stock/survey/survey-sportybottom.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Pants for Men',
        slug: 'pants-for-men',
        description: 'A very nice pants for men.',
        type: params.product.types.bottom.id,
        style: "Sporty",
        gender: params.user.gender.male.id,
        image: '/images/stock/survey/survey-sportybottom.png',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Shoes for Women',
        slug: 'shoes-for-women',
        description: 'A very nice shoes for women.',
        type: params.product.types.shoe.id,
        style: "Sporty",
        gender: params.user.gender.female.id,
        image: '/images/stock/survey/survey-sportyshoes.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Shoes for Men',
        slug: 'shoes-for-men',
        description: 'A very nice shoes for men.',
        type: params.product.types.shoes.id,
        style: "Sporty",
        gender: params.user.gender.male.id,
        image: '/images/stock/survey/survey-sportyshoes.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Belt for Women',
        slug: 'belt-for-women',
        description: 'A very nice belt for women.',
        type: params.product.types.accessory.id,
        style: "Sporty",
        gender: params.user.gender.female.id,
        image: '/images/stock/survey/survey-sportyaccessory-female.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Belt for Men',
        slug: 'belt-for-men',
        description: 'A very nice belt for men.',
        type: params.product.types.accessory.id,
        style: "Sporty",
        gender: params.user.gender.male.id,
        image: '/images/stock/survey/survey-sportyaccessory-male.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Underpant for Women',
        slug: 'underpant-for-women',
        description: 'A very nice underpant for women.',
        type: params.product.types.underpant.id,
        style: "Sporty",
        gender: params.user.gender.female.id,
        image: '/images/stock/survey/survey-classicunderpants-female.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Underpant for Men',
        slug: 'underpant-for-men',
        description: 'A very nice underpant for men.',
        type: params.product.types.underpant.id,
        style: "Sporty",
        gender: params.user.gender.male.id,
        image: '/images/stock/survey/survey-classicunderpants-male.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('products', null, {});
  }
}
