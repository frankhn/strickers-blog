import Sequelize from 'sequelize';
import config from 'config';
import dotenv from 'dotenv';
import debug from 'debug';

dotenv.config();
const debugLogger = debug('app:*');

// create database connection using sequelize class
const sequelize = new Sequelize({
  username: config.get('username'),
  host: config.get('hostname'),
  database: config.get('database-name'),
  password: process.env.DBPASSWORD,
  dialect: config.get('dialect'),
  define: {
    timestamps: false
  },
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }

});

// test database connection

sequelize.authenticate()
.then(() => debugLogger('Connection is established'))
.catch((error) => debugLogger(`Failled to connect to the database  : ${error}`));

export default sequelize;