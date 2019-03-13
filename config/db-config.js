import Sequelize from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();
import config from 'config';
import debug from 'debug';

const debugLogger = debug('app:*');

// create database connection using sequelize class
const sequelize = new Sequelize({
  username: config.get('username'),
  host: config.get('hostname'),
  database: config.get('database-name'),
  password: process.env.DBPASSWORD,
  dialect: config.get('dialect'),
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  operatorsAliases: false,

});

// test database connection

sequelize.authenticate()
.then(() => debugLogger('Connection is established'))
.catch((error) => debugLogger(`Failled to connect to the database  : ${error}`));

export default sequelize;