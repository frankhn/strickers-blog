import mocha from 'mocha';
import chai from 'chai';
import '@babel/polyfill';
import sequelize from '../../config/db-config';

chai.should();

describe('Test database connection', () => {
  it('Should be able to connect to the database' ,(done) => {
    sequelize.should.be.a('object');
    sequelize.config.should.have.property('username').eql('strickers_blog');
    sequelize.config.should.have.property('database').eql('strickers_blog_test');
    sequelize.config.should.have.property('port').eql(5432);
    done();
  });
});
