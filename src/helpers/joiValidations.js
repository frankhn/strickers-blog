import joi from 'joi';

validateRecords = (records) =>{

    const schema = {

        firstName: joi.string().min(2).regex(/\S+/).trim().required(),
        lastName: joi.string().min(2).regex(/\S+/).trim().required(),
        username: joi.string().min(2).regex(/\S+/).trim().required(),
        password: joi.string().regex(/^[a-zA-Z0-9]{8,30}$/).required(),
        email: joi.string().email().required()


       
    } ;
}
