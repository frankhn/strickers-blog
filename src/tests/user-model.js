import User from '../models/user';
import mocha from 'mocha';
import chai from 'chai';
import '@babel/polyfill';
import debug from 'debug'
const debugLogger = debug('app:*');

chai.should();

describe('Test User Model', () => {
  it('It should create user model', async (done) => {
      User.sync({force: true}).then((userModel) => {
        console.log(userModel);
        userModel.should.be.a('object');
        userModel.should.have.property('rawAttributes');
      });
      done();
  });
});
