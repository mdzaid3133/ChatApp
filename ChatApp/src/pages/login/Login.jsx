import React from 'react'
function Login() {
  return (
    <div className='formContainer'>
       <div className='formWrapper'>
           <h1 className='heading'>LogIn</h1>
          <form>
               <input type='email' placeholder='Email' name='email'/>
               <input type='password' placeholder='Password' name='password'/>
               <button type='button'>Sign In</button>
               <span>You don't have an account Please? Register</span>
          </form>
       </div>
    </div>
  )
}

export default Login