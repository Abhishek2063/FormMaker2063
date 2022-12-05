import React from 'react'
import CustomForm from './CustomForm'

const FrontendForm = () => {
  return (
    <div className="container">
      <h1 className='formHeading'>Form Maker</h1>
      <div className='row  FrontendForm'>
        {/* First Name */}
        <div className="col-lg-4 col-md-4 col-12 formfields w-100">
          <label className='formLabel' >First Name</label>
          <CustomForm
            name="Name"
            type="text"
            placeholder="Enter name."
            validationCheck="alphabetics"
            maxlength="50"
            minlength="2"
          />
        </div>

        {/* User Name */}
        <div className="col-lg-4 col-md-4 col-12 formfields w-100">
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
        <div className="col-lg-4 col-md-4 col-12 formfields w-100">
          <label className='formLabel' >Email</label>
          <CustomForm
            name="Email"
            type="email"
            placeholder="Enter email."
            validationCheck="email"
          />
        </div>

        {/* Phone Number */}
        <div className="col-lg-4 col-md-4 col-12 formfields w-100">
          <label className='formLabel' >Contact Number</label>
          <CustomForm
            name="contactNumber"
            type="tel"
            placeholder="Enter contact number."
            validationCheck="onlyNumber"
            maxlength="10"
            minlength="10"
          />
        </div>

        {/* Age */}
        <div className="col-lg-4 col-md-4 col-12 formfields w-100">
          <label className='formLabel' >Age</label>
          <CustomForm
            name="age"
            type="number"
            placeholder="Enter your age."
            validationCheck="onlyNumber"
            maxlength="2"
            minlength="1"
          />
        </div>

        {/* Linkdin URL */}
        <div className="col-lg-4 col-md-4 col-12 formfields w-100">
          <label className='formLabel' >Linkdin URL</label>
          <CustomForm
            name="linkdinURL"
            type="url"
            placeholder="Enter your linkdin url."
            validationCheck="urlCheck"
          />
        </div>

        {/* Password */}
        <div className="col-lg-4 col-md-4 col-12 formfields w-100">
          <label className='formLabel' >Password</label>
          <CustomForm
            name="password"
            type="password"
            placeholder="Enter your password."
            validationCheck="password"
            maxlength="30"
            minlength="8"
          />
        </div>

        {/* Page Rating */}
        <div className="col-lg-8 col-md-8 col-12 formfields w-100">
          <label className='formLabel' >Site Like Points</label>
          <div className="row">
            <div className="col">
              <CustomForm
                name="design"
                type="checkbox"
                placeholder="Click atleast one checkbox."
              />
            </div>
            <div className="col">
              <CustomForm
                name="functionality"
                type="checkbox"
                placeholder="Click atleast one checkbox."
              />
            </div>
            <div className="col">
              <CustomForm
                name="overAllGood"
                type="checkbox"
                placeholder="Click atleast one checkbox."
              />
            </div>
          </div>
        </div>

         {/* Page Rating */}
         <div className="col-lg-12 col-md-12 col-12 formfields w-100">
          <label className='formLabel' >Site Rating</label>
          <div className="row">
            <div className="col">
              <CustomForm
                name="bad"
                type="radio"
                placeholder="Click atleast one radio."
              />
            </div>
            <div className="col">
              <CustomForm
                name="medium"
                type="radio"
                placeholder="Click atleast one radio."
              />
            </div>
            <div className="col">
              <CustomForm
                name="Good"
                type="radio"
                placeholder="Click atleast one radio."
              />
            </div>
            <div className="col">
              <CustomForm
                name="Best"
                type="radio"
                placeholder="Click atleast one radio."
              />
            </div>
          </div>
        </div>



      </div>
    </div>

  )
}

export default FrontendForm
