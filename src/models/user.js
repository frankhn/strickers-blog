import Sequelize from 'sequelize';
import debug from 'debug';
import sequelize from '../config/db-config';

const dbLog = debug('app:db');

// create user model

const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  firstname: {
    type: Sequelize.STRING(50),
    required: true,
  },
  lastname: {
    type: Sequelize.STRING(50),
    required: true
  } ,
  username:{
    type: Sequelize.STRING(10),
    required: true,
    unique: true
    required: true,
  },
  gender: {
    type: Sequelize.STRING(6),
    required: true,
  },
  dob: {
    type: Sequelize.DATE,
    required: true,
  },
  email: {
    type: Sequelize.STRING(125),
    required: true,
    unique: true
  } ,
  },
  password: {
    type: Sequelize.STRING,
    required: true,
  },
  joiningdate: {
    type: Sequelize.DATE,
    required: true,
    defaultValue: new Date(),
  },
  usertype: {
    type: Sequelize.STRING(50),
    defaultValue: false
  } ,
  trustedbadge: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
    required: true,
  },
  trustedbadge: {
    type: Sequelize.BOOLEAN,
  },
  deleted: {
    type: Sequelize.BOOLEAN,
    required: true,
    defaultValue: false,
  },
});
User.sync({force: false })

export default User;
User.sync({ force: false }).then((userModel) => {
  dbLog('User table is created');
})
  .catch((error) => {
    dbLog(`Failled to create user table : ${error}`);
  });
export default User;
