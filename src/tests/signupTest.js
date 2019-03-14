import chai from "chai";
import chaiHttp from "chai-http"; 
import app from "../index";   //entry point.

chai.should();
chai.use(chaiHttp);

let token;

describe('Signing up a user' , ()=>{
  
  const user = {
    
       firstName: "Yvan",
       middleName: "",
       lastName: "Cyuzuzo",
       email: "yvancyuz@gmail.com",
       username: "Yvano",
       password: "Google23!"
 
  }
  
  it("/api/v1/auth/signup --Signing up an new user", (done)=>{
     
    chai.request(app)
       .post('/api/v1/auth/signup')
       .send(user)
       .end((res)=>{
          
         token = res.body.data[0].token; 
         res.body.should.be.a('object');
         res.body.should.have.property('status').eql(201);
         res.body.data[0].should.have.property('token');
         res.body.data[0].should.have.property('username').eql('Yvano');
         res.body.data[0].should.have.property('email').eql('yvancyuz@gmail.com');
         res.body.data[0].should.have.propert('firstName').eql('Clet');
         res.body.data[0].should.have.property('otherName').eql('');
         res.should.data[0].should.have.property('lastName').eql('Cyuzuzo');
         done();
  
  })
  
     })





})