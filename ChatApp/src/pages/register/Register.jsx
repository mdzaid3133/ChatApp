import React from 'react'


function Register() {
  return (
   
    <div className='formContainer'>
       <div className='formWrapper'>
           <h1 className='heading'>Register</h1>
          <form>
               <input type='text' placeholder='Name' name='name'/>
               <input type='email' placeholder='Email' name='email'/>
               <input type='password' placeholder='Password' name='password'/>
               <input type='file' placeholder='Select your avatar' name='avatar'/>
               <button type='button'>Sign Up</button>
               <span>Do you have an account Please? Login</span>
          </form>
       </div>
    </div>
  )
}

export default Register