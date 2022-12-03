import React, { useState } from 'react'
import { customValidation } from './Validation/errorMessagePrepare'
const CustomForm = (
    props
) => {

    // Common State

     const [customState, setCustomState] = useState({
                [props.name]: "",
                error: "",
                errorCls: "",
            })

    console.log(customState);
    /**
     * 
     * @param {event} e
     * event target the value and name at the time of change in the field. 
     */

    const handleCustomChange = (e) => {
        const { name, value } = e.target
        // setCustomState({ ...customState, [name]: value })
        let returnedvalues = setInputValuesCheck(name, value);
        setCustomState({
            ...customState,
            [e.target.name]: e.target.value,
            // [returnedvalues.fieldNameErr]: returnedvalues.errorMsg,
            error : returnedvalues.errorMsg,
            // [returnedvalues.fieldCls]: returnedvalues.setClassName,
            errorCls : returnedvalues.setClassName
        })
    }

    const handleCustomBlur = (e) => {
        const { name, value } = e.target
        // setCustomState({ ...customState, [name]: value })
        let returnedvalues = setInputValuesCheck(name, value);
        setCustomState({
            ...customState,
            [e.target.name]: e.target.value,
            // [returnedvalues.fieldNameErr]: returnedvalues.errorMsg,
            error : returnedvalues.errorMsg,
            // [returnedvalues.fieldCls]: returnedvalues.setClassName,
            errorCls : returnedvalues.setClassName
        })
    }

    const handleCustomFocus = (e) => {
        const { name, value } = e.target
        // setCustomState({ ...customState, [name]: value })
        let returnedvalues = setInputValuesCheck(name, value);
        setCustomState({
            ...customState,
            [e.target.name]: e.target.value,
            // [returnedvalues.fieldNameErr]: returnedvalues.errorMsg,
            error : returnedvalues.errorMsg,
            // [returnedvalues.fieldCls]: returnedvalues.setClassName,
            errorCls : returnedvalues.setClassName
        })
    }



    const setInputValuesCheck = (name, value) => {
        let values = customValidation(name, value, props.validationCheck, props.maxlength, props.minlength)
        return values;
    }





    return (
        <div>
            {/* First Name Field */}
            <div className="">
                <div className="form-group">
                    <input
                        name={props.name}
                        type={props.type}
                        className={props.name}
                        placeholder={props.placeholder}
                        value={customState.props?.name}
                        onChange={(e) => handleCustomChange(e)}
                        onBlur={(e) => handleCustomBlur(e)}
                        onFocus={(e) => handleCustomFocus(e)}

                        autoComplete="off"
                    ></input>
                </div>
                {customState.error && customState.errorCls ? <span className='text-danger'>{customState.error}</span> : ""}

            </div>

            <div>


            </div>

        </div>
    )
}

export default CustomForm