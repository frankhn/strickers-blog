import joi from 'joi';

function validateRecords (records){

    const schema = {

        firstname: joi.string().min(2).trim().required(),
        lastname: joi.string().min(2).trim().required(),
        username: joi.string().min(2).trim().required(),
        password: joi.string().alphanum().min(8).max(18).required(),
        email: joi.string().email().required()
       
    } ;

    return joi.validate(records, schema);
}


export default validateRecords;
