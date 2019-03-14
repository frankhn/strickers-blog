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
  user: {
    type: Sequelize.STRING,
    required: true,
    references: {
      model: 'user',
      key: 'id'
    }
  } ,
  date: {
    type: Sequelize.DATE,
    required: true
  } ,
  category: {
    type: Sequelize.INTEGER,
    required: true,
    references: {
      model: 'category',
      key: 'id'
    }
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
Article.sync({force: false }).then((articleModel) => {
  dbLog(`Article table is created`)
})
.catch((error) => {
  dbLog(`Failled to create Article table : ${error}`);
});
export default Article;