import React, { useState } from 'react'
import Axios from 'axios'




const Register = () => {

    const [name,setname] = useState('')
    const [surname,setsurname] = useState('')
    const [email,setemail]= useState('')
    const [password, setpassword] =useState('')


    const registerbutton= (e)=>{
        e.preventDefault()
        const data= {name,surname,email,password}
        Axios.post('http://localhost:4000/register' ,data)
            .then(response=>{
                console.log(response)
            })
    
    }

  return (
    <div className='register'>
        <h1>Registration</h1>
        <label>name</label>
        <input type='text' value={name} onChange={(e)=>{setname(e.target.value)}} />
        <label>surname</label>
        <input type='text' value={surname} onChange={(e)=>{setsurname(e.target.value)}}/>
        <label>email</label>
        <input type='email' value={email} onChange={(e)=>{setemail(e.target.value)}} />
        <label>password</label>
        <input type='text' value={password} onChange={(e)=>{setpassword(e.target.value)}}/>

        <button onClick={registerbutton}>register</button>

    </div>
  )
}

export default Register