import Sequelize from 'sequelize';
import sequelize from '../config/db-config';

// create article model

const Article = sequelize.define('article', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: Sequelize.TEXT,
    required: true,
  },
  content: {
    type: Sequelize.TEXT,
    required: true,
  },
  user: {
    type: Sequelize.INTEGER,
    required: true,
  },
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
  category: {
    type: Sequelize.INTEGER,
  },
  tags: {
    type: Sequelize.ARRAY(Sequelize.TEXT),
    defaultValue: [],
  },
  agelimit: {
    type: Sequelize.INTEGER,
    required: true,
  },
  reviewed: {
    type: Sequelize.TEXT,
    defaultValue: 'Pending',
  },
  deleted: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
});
Article.sync({ force: false }).then(() => {
// dbLog(`User table is created`)
});
export default Article;
