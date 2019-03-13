import mocha from 'mocha';
import chai from 'chai';
import '@babel/polyfill';
import dotenv from 'dotenv';
dotenv.config();
import sequelize from '../config/db-config';

chai.should();

describe('Test database connection', () => {
  it('Should be able to connect to the database' ,(done) => {
    sequelize.should.be.a('object');
    sequelize.config.should.have.property('username').eql(process.env.DBUSERNAME);
    sequelize.config.should.have.property('database').eql(process.env.TESTDBNAME);
    sequelize.config.should.have.property('port').eql(parseInt(process.env.DBPORT));
    done();
  });
});
