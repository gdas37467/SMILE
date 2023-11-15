import React from 'react'
import DatePicker from "react-datepicker";
import { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";

function Homepage() {

  const [dateValue, onDateChange] = useState(new Date());
  return (
    <div className='mt-48'>
      <div className='min-h-screen shadow-2xl border-2'>
      <div className='text-2xl mt-5'>
        Blood Recipient Form
        
      </div>

      <div className='flex gap-5 '>
        <div  className='flex flex-col'>
          <label htmlFor="firstName">First Name</label>
          <input type="text" name = "firstName" className='ml-28 border-2 w-full' />

        </div>
        <div className='flex flex-col'>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" name = "lastName" className='ml-28 border-2 w-full'/>

        </div>
        <div className='flex flex-col'>
          <label htmlFor="guardianName" className='ml-8'>Guardian Name</label>
          <input type="text" name = "guardianName" className='ml-28 border-2 w-full'/>

        </div>


      </div>
      <div className='mt-10 flex gap-5'>
      <div  className='flex flex-col'>
          <label htmlFor="dob" className='ml-3'> Date of Birth</label>
          {/* <input type="text" name = "firstName" className='ml-28 border-2 w-full' /> */}
          <DatePicker className="w-full ml-28 border-2" name="dob" autoFocus={true} onChange={(date)=>{onDateChange(date)}} selected={dateValue}/>

        </div>
        <div className='flex flex-col'>
          <label htmlFor="lastName">Gender</label>
          <input type="dropdown" name = "lastName"  className='ml-28 border-2 w-full'/>

        </div>
        <div className='flex flex-col'>
          <label htmlFor="guardianName" className='ml-8'>Guardian Name</label>
          <input type="text" name = "guardianName" className='ml-28 border-2 w-full'/>

        </div>
      </div>
      </div>
      
    </div>
  )
}

export default Homepage
