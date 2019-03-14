'use strict';

export default  {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('articles',{
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
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('articles');
  }
};
