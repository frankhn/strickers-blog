import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();


let validateToken = (req, res, next) => {
let token = req.headers['x-access-token'] || req.headers['authorization']; 
  if(!token){
    return res.status(401).send({
      status:401,
      error:"Unauthorized access"
    })
  }  
if (token.startsWith('Bearer ')) {

    token = token.slice(7, token.length);
  }

  if (token) {
    jwt.verify(token, process.env.secret, (err, decode) => {
      if (err) {
        return res.send({
          success: false,
          message: 'Token is not valid'
        });
    
      } else {
        req.decode = decode;
        next();
      }
    });
  } else {
    return res.send({
      success: false,
      message: 'Auth token is not supplied'
    });
  }
};


export default validateToken;
