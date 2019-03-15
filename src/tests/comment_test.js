/* eslint-disable no-undef */
import chai from 'chai';
import chaiHttp from 'chai-http';
import index from '../../index';
import sequelize from '../config/db-config';

chai.use(chaiHttp);

describe('Test for comments', () => {
  it('It should return comment by their id', (done) => {
    const comment = {
      comment: 'This article is good',
      articleid: 5,
      userid: 7,
    };
    chai.request(index)
      .get('/comment/1')
      .send(comment)
      .then((res) => {
        res.body.should.be.a('object');
        res.body.should.have.property('data');
        res.body.should.have.property('comment').eql('This article is good');
        res.body.data.should.have.property('article').eql('5');
        res.body.data.should.have.property('user').eql('7');
      })
      .catch((err) => {
        // console.log(err);
      });
    done();
  });
});
