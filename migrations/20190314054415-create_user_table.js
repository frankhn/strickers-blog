'use strict';

export default {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id : {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      firstname: {
        type: Sequelize.STRING(50),
        required: true
      } ,
      lastname: {
        type: Sequelize.STRING(50),
        required: true
      } ,
      gender: {
        type: Sequelize.STRING(6),
        required: true
      } ,
      dob: {
        type: Sequelize.DATE,
        required: true
      } ,
      email: {
        type: Sequelize.STRING(125),
        required: true
      } ,
      password: {
        type: Sequelize.STRING,
        required: true
      } ,
      joiningdate: {
        type: Sequelize.DATE,
        required: true,
        defaultValue: new Date() 
      } ,
      usertype: {
        type: Sequelize.STRING(50),
        required: true
      } ,
      trustedbadge: {
        type: Sequelize.BOOLEAN
      },
      deleted: {
        type: Sequelize.BOOLEAN,
        required: true,
        defaultValue: false
      } 
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};
