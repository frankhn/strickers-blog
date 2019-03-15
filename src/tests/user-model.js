import mocha from 'mocha';
import chai from 'chai';
import '@babel/polyfill';
import debug from 'debug'
import User from '../models/user';
const debugLogger = debug('app:dbtest');

chai.should();

describe('Test User Model', () => {
  it('It should create user model', async (done) => {
    User.sync({ force: true }).then((userModel) => {
      userModel.should.be.a('object');
      userModel.should.have.property('rawAttributes');
    });
    done();
  });
});
