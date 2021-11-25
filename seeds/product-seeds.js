const { Product } = require('../models');

const productData = [
  {
    product_name: 'Shirt',
    price: 23.99,
    stock: 14,
    category_id: 1,
  },
  {
    product_name: 'Branded Sneakers',
    price: 80.0,
    stock: 32,
    category_id: 5,
  },
  {
    product_name: 'Baseball Hat',
    price: 32.99,
    stock: 12,
    category_id: 4,
  },
  {
    product_name: 'Guinness world Record',
    price: 12.99,
    stock: 50,
    category_id: 3,
  },
  {
    product_name: 'Cargo tshirt',
    price: 29.99,
    stock: 22,
    category_id: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;