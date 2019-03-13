import Sequelize from 'sequelize';
import dotenv from 'dotenv';
import debug from 'debug';

dotenv.config();
let dbname;
if (process.env.NODE_ENV === 'test') {
  dbname = process.env.TESTDBNAME;
} else {
  dbname = process.env.DBNAME;
}
const debugLogger = debug('app:*');

// create database connection using sequelize class
const sequelize = new Sequelize({
  username: process.env.DBUSERNAME,
  host: process.env.DBHOST,
  database: dbname,
  password: process.env.DBPASSWORD,
  dialect: 'postgres',
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