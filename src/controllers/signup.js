import validateRecords from "../helpers/joiValidations";
import User from "../models/user";
import key from "../helpers/tokenGener"


function signUp(req, res){

const { error } = validateRecords(req.body);
if(error){
    return res.status(400).send({
        status: 400,
        error: error.details[0].message

    });  
}



const {firstname, lastname, email, username, password} = req.body;
const user = {
    firstname: firstname.trim(),
    lastname: lastname.trim(),
    email: email.trim(),
    username: username.trim(),
    password
}



User.create(user)
.then(result => {
    key.sign(req, res, {firstname, lastname}, 201);
})
.catch((error)=> {
    return res.status(409).send({
        status: 409,
        error: error.errors[0].message,
    })
})


}

export default signUp;

