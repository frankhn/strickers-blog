import Sequelize from 'sequelize';
import sequelize from '../config/db-config';
import debug from 'debug';
const dbLog = debug('app:db');
import User from './user'

// create user model

const Article = sequelize.define('user', {
  id : {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: Sequelize.STRING,
    required: true
  } ,
  date: {
    type: Sequelize.DATE,
    required: true
  } ,
  tags: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    required: true
  } ,
  agelimit: {
    type: Sequelize.INTEGER,
    required: true
  } ,
  reviewed: {
    type: Sequelize.BOOLEAN,
    required: true,
    defaultValue: false
  } ,
  usertype: {
    type: Sequelize.STRING(50),
    required: true
  } ,
  deleted: {
    type: Sequelize.BOOLEAN,
    required: true,
    defaultValue: false
  } 
});
export default Article;