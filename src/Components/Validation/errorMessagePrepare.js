import { validateInputs } from "./ValidationTypeCheck";

export const customValidation = (name, value, validationCheck, maxlength, minlength) => {
    let getError = false, fieldNameErr = name + 'Err', errorMsg = '', fieldCls = name + 'Cls';
    if (validateInputs(value, validationCheck) === 'empty') {
        errorMsg = `Please enter ${name}.`;
        getError = true;
    }
    else if (validateInputs(value, validationCheck) === false) {
        errorMsg = `Please enter valid ${name}.`;
        getError = true;

    }
    if (maxlength != null) {
        if (value.trim().length > maxlength) {
            errorMsg = `Maximum ${maxlength} length allowed.`;
            getError = true;
        }
    }
    if (minlength != null) {
        if (value.trim().length < minlength) {
            errorMsg = `Minimum ${minlength} length allowed.`;
            getError = true;
        }
    }
    return ({ getError, fieldNameErr, errorMsg, fieldCls, setClassName: getError ? 'error' : '' })


}