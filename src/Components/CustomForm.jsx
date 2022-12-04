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
            error: returnedvalues.errorMsg,
            // [returnedvalues.fieldCls]: returnedvalues.setClassName,
            errorCls: returnedvalues.setClassName
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
            error: returnedvalues.errorMsg,
            // [returnedvalues.fieldCls]: returnedvalues.setClassName,
            errorCls: returnedvalues.setClassName
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
            error: returnedvalues.errorMsg,
            // [returnedvalues.fieldCls]: returnedvalues.setClassName,
            errorCls: returnedvalues.setClassName
        })
    }



    const setInputValuesCheck = (name, value) => {
        let values = customValidation(name, value, props.validationCheck, props.maxlength, props.minlength)
        return values;
    }


    // handleCustomCheckboxChange
    const handleCustomCheckboxChange = (e) => {
    //     let obj = customState.props?.name;
    //    let  value = e.target.name
    //     if (e.target.checked) {
    //         obj.push(value)
    //     }
    //     else {
    //         obj.splice(obj.findIndex(e => e.value === { value }), 1);
    //     }
    //     setCustomState({
    //         ...customState,
    //         siteDetails: obj,
    //         // [returnedvalues.fieldNameErr]: returnedvalues.errorMsg,
    //     })
     setCustomState({
            ...customState,
            [e.target.name]: [e.target.checked],
            // [returnedvalues.fieldNameErr]: returnedvalues.errorMsg,
        })

    }
    // handleCustomCheckboxBlur
    const handleCustomCheckboxBlur = (e) => {
        // let obj = customState.props?.name;
        // let  value = e.target.name
        //  if (e.target.checked) {
        //      obj.push(value)
        //  }
        //  else {
        //      obj.splice(obj.findIndex(e => e.value === { value }), 1);
        //  }
        //  setCustomState({
        //      ...customState,
        //      siteDetails: obj,
        //      // [returnedvalues.fieldNameErr]: returnedvalues.errorMsg,
        //  })
        setCustomState({
            ...customState,
            [e.target.name]: [e.target.checked],
            // [returnedvalues.fieldNameErr]: returnedvalues.errorMsg,
        })

    }
    // handleCustomCheckboxFocus
    const handleCustomCheckboxFocus = (e) => {
        // let obj = customState.props?.name;
        // let  value = e.target.name
        //  if (e.target.checked) {
        //      obj.push(value)
        //  }
        //  else {
        //      obj.splice(obj.findIndex(e => e.value === { value }), 1);
        //  }
        //  setCustomState({
        //      ...customState,
        //      siteDetails: obj,
        //      // [returnedvalues.fieldNameErr]: returnedvalues.errorMsg,
        //  })
        setCustomState({
            ...customState,
            [e.target.name]: [e.target.checked],
            // [returnedvalues.fieldNameErr]: returnedvalues.errorMsg,
        })

    }

    // handleCustomRadioChange
    const handleCustomRadioChange = (e) => {
        // setCustomState({
        //     ...customState,
        //     [e.target.name]: e.target.checked,
        //     // [returnedvalues.fieldNameErr]: returnedvalues.errorMsg,
        // })
        console.log(e, "e kjndfafdafad");
        console.log(e.target.checked, "e checked kjndfafdafad");
        console.log(e.target.name, "e name kjndfafdafad");
        console.log(e.target.value, "e value kjndfafdafad");



    }
    // handleCustomRadioBlur
    const handleCustomRadioBlur = (e) => {
        // setCustomState({
        //     ...customState,
        //     [e.target.name]: e.target.checked,
        //     // [returnedvalues.fieldNameErr]: returnedvalues.errorMsg,
        // })


    }
    // handleCustomRadioFocus
    const handleCustomRadioFocus = (e) => {
        // setCustomState({
        //     ...customState,
        //     [e.target.name]: e.target.checked,
        //     // [returnedvalues.fieldNameErr]: returnedvalues.errorMsg,
        // })


    }

    console.log(customState, "customState");



    return (
        <div>
            {(props.type !== "checkbox" && props.type !== "radio") && <span>
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
            </span>
            }

            {props.type === "checkbox" && <span>
                <input
                    name={props.name}
                    type={props.type}
                    className={props.name}
                    placeholder={props.placeholder}
                    value={customState.props?.name}
                    checked={customState.props?.name}
                    onChange={(e) => handleCustomCheckboxChange(e)}
                    onBlur={(e) => handleCustomCheckboxBlur(e)}
                    onFocus={(e) => handleCustomCheckboxFocus(e)}

                    autoComplete="off"
                ></input>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    {props.name.replace(/^\w/, c => c.toUpperCase())}
                </label>
            </span>
            }

            {props.type === "radio" && <span>
                <input
                    name={props.name}
                    type={props.type}
                    className={props.name}
                    placeholder={props.placeholder}
                    checked={customState.props?.name === true}
                    value={customState.props?.name}
                    onChange={(e) => handleCustomRadioChange(e)}
                    onBlur={(e) => handleCustomRadioBlur(e)}
                    onFocus={(e) => handleCustomRadioFocus(e)}

                    autoComplete="off"
                ></input>
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    {props.name.replace(/^\w/, c => c.toUpperCase())}
                </label>
            </span>
            }

        </div>



    )
}

export default CustomForm