import { validateInputs } from "./ValidationTypeCheck";

export const customValidation = (name, value, validationCheck, maxLength, minLength) => {
    let getError = false, fieldNameErr = name + 'Err', errorMsg = '', fieldCls = name + 'Cls';
    if(validationCheck === "password" ||validationCheck === "Password" )
    {
        if (maxLength != null) {
            if (value.trim().length > maxLength) {
                errorMsg = `Maximum ${maxLength} length allowed.`;
                getError = true;
            }
        }
        if (minLength != null) {
            if (value.trim().length < minLength) {
                errorMsg = `Minimum ${minLength} length allowed.`;
                getError = true;
            }
        }
        if (validateInputs(value, validationCheck) === 'empty') {
            errorMsg = `Please enter ${name}.`;
            getError = true;
        }
        else if (validateInputs(value, validationCheck) === false) {

            
            if (maxLength !== null && ((value.trim()).length > maxLength)) {
                errorMsg = `Maximum ${maxLength} ${validationCheck === 'string' || validationCheck === 'required' || validationCheck === 'Alphanumeric' || validationCheck === 'password' ? 'characters' : 'digits'} are allowed.`;
                getError = true;
            }
            if (minLength !== null && ((value.trim()).length < minLength)) {
                errorMsg = `Minimum ${minLength} ${validationCheck === 'string' || validationCheck === 'required' || validationCheck === 'Alphanumeric' || validationCheck === 'password' ? 'characters' : 'digits'} are required.`;
                getError = true;
            }
            // if ((value.trim()).length >= minLength && (value.trim()).length <= maxLength) {
                if (/[a-z]/.test((value.trim())) === false) {
                    errorMsg = `A Lowercase ${validationCheck === 'string' || validationCheck === 'required' || validationCheck === 'Alphanumeric' || validationCheck === 'password' ? 'letter' : 'digit'} is required.`;
                    getError = true;
                }
                 if (/[A-Z]/.test((value.trim())) === false) {
                    errorMsg = `A Uppercase ${validationCheck === 'string' || validationCheck === 'required' || validationCheck === 'Alphanumeric' || validationCheck === 'password' ? 'letter' : 'digit'} is required.`;
                    getError = true;
                }
                 if (/[0-9]/.test((value.trim())) === false) {
                    errorMsg = `A  ${validationCheck === 'string' || validationCheck === 'required' || validationCheck === 'Alphanumeric' ? 'characters' : 'digit'} is    required.`;
                    getError = true;
                }
                 if (/^(?=.*[~`!@#$%^&*()--+={}[\]|\\:;"'<>,.?/_₹]).*$/.test((value.trim())) === false) {
                    errorMsg = `A Special Character is required.`;
                    getError = true;
                }
                 if (/^\S*$/.test(value) === false) {
                    errorMsg = `Password must not contain Whitespaces.`;
                    getError = true;
                }
            // }
    
        }
    }
    else{
        if (validateInputs(value, validationCheck) === 'empty') {
            errorMsg = `Please enter ${name}.`;
            getError = true;
        }
        else if (validateInputs(value, validationCheck) === false) {
            errorMsg = `Please enter valid ${name}.`;
            getError = true;
    
        }
        if (maxLength != null) {
            if (value.trim().length > maxLength) {
                errorMsg = `Maximum ${maxLength} length allowed.`;
                getError = true;
            }
        }
        if (minLength != null) {
            if (value.trim().length < minLength) {
                errorMsg = `Minimum ${minLength} length allowed.`;
                getError = true;
            }
        }
    }
   
    return ({ getError, fieldNameErr, errorMsg, fieldCls, setClassName: getError ? 'error' : '' })


}