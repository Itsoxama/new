import React from 'react'
import { useState } from 'react'
import ss from './images/ss.png'
import axios from 'axios'
import { tz } from './Components/apis'
const Login = () => {
    const [email, setemail] = useState('')
    const [pass, setpass] = useState('')
    function login() {
        axios.post(`${tz}/user/login`,{
            email:email,
            pass:pass
        }).then((res)=>{
            console.log(res)
            if(res.data==='error'){
                alert('Invalid Credentials')
            }
            else{
                localStorage.setItem('userid',res.data.User._id)
                localStorage.setItem('username',res.data.User.username)
                if(email==='john@gmail.com'){
                    
                localStorage.setItem('emptype','admin')
                    window.location.pathname=''
                }
                else{
                    localStorage.setItem('emptype','ain')
                    window.location.pathname='/user' 

                }
            }
          
        })
        
    }
  return (
    <div className="login">
        <div className="sublogin">
            <img src={ss} alt="" />
            <h1>WELCOME</h1>
            <h2>
                Email
            </h2>
            <input onChange={e=>setemail(e.target.value)} type="text"  />
            <h2>Password</h2>
            <input type="password"  onChange={e=>setpass(e.target.value)} />
<button onClick={e=>login()}>Login</button>

        </div>
    </div>
  )
}

export default Login