import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

module.exports={
    sign:(req,res,payload,status)=>{
        jwt.sign(payload,process.env.secret,{expiresIn:'1d'},(err,token)=>{
            if(err){
                return res.send({
                    status:400,
                    error:err
                })
            }
            return res.send({
                status,
                data: [{
                    token,
                    user: req.body
                
                 } ]
            });   
        })
    }
}