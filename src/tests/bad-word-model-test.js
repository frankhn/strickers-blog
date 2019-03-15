import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../index';
import BadWord from '../models/bad-word';

chai.use(chaiHttp);
chai.should();

describe('BAD WORD MODEL TESTS', () => {
  before((done) => {
    chai.request(app);
    BadWord.BadWordModel.sync({ force: true });
    BadWord.create('hell');
    done();
  });
  describe('GET /bad-words', () => {
    it('Should get all bad words', (done) => {
      chai.request(app).get('/bad-word').then((res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('data');
        res.body.data[0].should.eql('hell');
      }).catch(error => console.log(error));
      done();
    });
    // test create word
    describe('POST /bad-word/new-word', () => {
      it('Should create new word', (done) => {
        chai.request(app).post('/bad-word/new-word').send({ word: 'badword' })
          .then((res) => {
            res.should.have.status(201);
            res.body.should.be.a('object');
            res.body.should.have.property('data');
            res.body.data.should.be.a('array');
            res.body.data[1].shoud.eql('badword');
          })
          .catch(error => console.log(error));
        done();
      });
    });
    // test update word
    describe('PUT /bad-word/id', () => {
      it('should update word', (done) => {
        chai.request(app).put('/bad-word/1').send({ word: 'updated' }).then((res) => {
          res.should.have.status(204);
          res.body.shoudl.have.property('data');
          res.body.data.shoudl.be.a('array');
          res.body.data[0].shoud.eql('updated');
        })
          .catch(error => console.log(error));
        done();
      });
    });

    // test delete word
    describe('DELETE /bad-word/', () => {
      it('Shoudld delete word', (done) => {
        chai.request(app).delete('/bad-word/2').send().then((res) => {
          res.should.have.status(204);
          res.body.should.be.a('object');
          res.body.data.should.be.a('array');
          res.body.data[0].deleted.should.be.eql(true);
        })
          .catch(error => console.log(error));
        done();
      });
    });
  });
});
