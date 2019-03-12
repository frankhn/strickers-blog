import mocha from 'mocha';
import chai from 'chai';
import 'babel-polyfill';
import sequelize from '../config/db-config';

chai.should();

describe('Test database connection', () => {
  it('Should be able to connect to the database' ,(done) => {
    sequelize.should.be.a('object');
  });
});
