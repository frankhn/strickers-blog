
import chai from 'chai';
import chaHttp from 'chai-http'
import index from '../../index'

chai.use(chaHttp);


describe('it should be able to return all the catgories', () => {
    it('return all categories as an array', (done) => {
        chai.request(index)
        .get('/categories')
        .end((err, res) => {
            res.should.have.status(200)
            // res.body.should.be.Object
            done();
        });
    })
}) 

describe('this should return a single category', () => {
    it('it should return a category', (done) => {
        chai.request(index)
        .get('/categories/1')
        .end((err, res) => {
            res.should.have.status(200)
            // res.body.should.be.Object
            done();
        })
    })
}) 

describe('this should create a record i the database', () => {
    it('it should create a category', (done) => {
        const name = {name:'mining'}
        chai.request(index)
        .post('/categories')
        .send(name)
        .end((err, res) => {
            res.should.have.status(200)
            // res.body.should.be.Object
            done();
        })
    })
}) 

describe('this should be able to delete a category', () => {
    it('it should delete a category', (done) => {
        chai.request(index)
        .delete('/categories/1')
        .end((err, res) => {
            res.should.have.status(202)
            // res.body.should.be.Object
            done();
        })
    })
}) 
