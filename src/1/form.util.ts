import { FormValidation } from "./form.props"

const mailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const passwordRegex = /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{6,20})/;

const isValidForm = (email:string, password:string) =>{
    var validation :FormValidation = {}
    if(!email.match(mailRegex)){
        validation.email = "Please type a valid email";
    }
    if(!password.match(passwordRegex)){
        validation.password = "Please make sure to have letters with capital and lower case, also to include numbers and special charachters";
    }
    return validation;
}

export {isValidForm}