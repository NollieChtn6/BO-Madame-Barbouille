const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    define: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
      underscored: false,
    },
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: (...msg: []) => console.log(msg),
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log('DATABASE CONNECTED');
  })
  .catch((err: string) => {
    console.log(err);
  });

export default sequelize;
