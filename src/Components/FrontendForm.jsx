import React from 'react'
import CustomForm from './CustomForm'

const FrontendForm = () => {
  return (
    <div className="container">
      <h1 className='formHeading'>Form Maker</h1>
      <div className='row  FrontendForm'>
        {/* First Name */}
        <div className="col-4 formfields w-100">
          <label className='formLabel' >First Name</label>
          <CustomForm
            name="FirstName"
            type="text"
            placeholder="Enter first name."
            validationCheck="alphabetics"
            maxlength="50"
            minlength="2"
          />
        </div>

         {/* User Name */}
         <div className="col-4 formfields w-100">
          <label className='formLabel' >Username</label>
          <CustomForm
            name="Username"
            type="text"
            placeholder="Enter username."
            validationCheck="string"
            maxlength="50"
            minlength="6"
          />
        </div>

         {/* Email */}
         <div className="col-4 formfields w-100">
          <label className='formLabel' >Email</label>
          <CustomForm
            name="Email"
            type="email"
            placeholder="Enter email."
            validationCheck="email"
          />
        </div>

      </div>
    </div>

  )
}

export default FrontendForm