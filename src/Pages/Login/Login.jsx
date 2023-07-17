import React, { useState } from 'react'
import phones from './img/phones.png'
import logo from './img/logo.png'
import google from './img/google.png'
import links from './img/links.png'
import { Link } from 'react-router-dom'


const Login = () => {

  const [emoil, setEmoil] = useState("")
  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  return (
    <div className='bg-[#EFEFEF] py-[50px]'>
      <div className="container">
        <div className='flex md:w-[80%] m-auto'>
          <div className='sm:hidden lg:block lg:w-[50%]'>
            <img src={phones} alt="" />
          </div>
          <div className='sm:w-[100%] lg:w-[50%] xl:w-[35%]'>
            <div className='bg-[white] py-[30px] m-auto'>
              <div className='w-[80%] m-auto'>
                <div>
                  <img className='m-auto' src={logo} alt="" />
                </div>
                {/* <p className='text-center text-[#8E8E8E] text-[20px]'> Sign up to see photos and videos of your friends. </p> */}
                <div className='mt-[15px]'>
                  <div>
                    <input value={emoil} onChange={(event) => setEmoil(event.target.value)} placeholder='Username, or mail' className='pl-[20px] w-[100%] py-[8px] rounded-[5px] bg-[#FAFAFA] border-[#DBDBDB] border-[2px]' type="text" />
                  </div>
                  <div className='mt-[10px]'>
                    <input value={password} onChange={(event) => setPassword(event.target.value)} placeholder='Password' className='pl-[20px] w-[100%] py-[8px] rounded-[5px] bg-[#FAFAFA] border-[#DBDBDB] border-[2px]' type="text" />
                  </div>
                  <div className='mt-[20px]'>
                    
                    <button className='w-[100%] py-[8px] rounded-[5px] bg-[#0095F6] text-[white]'> Sign Up </button>
                    
                  </div>
                  <p className='text-center mt-[15px]'> or </p>
                  <div className='relative flex items-center mt-[10px]'>
                    <div className='absolute sm:left-4 md:left-[30px]'>
                      <img src={google} alt="" />
                    </div>
                    <button className='bg-[#EFEFEF] border-2 w-[100%] py-[5px] rounded-[20px] '> Continue with google </button>
                  </div>
                  <p className='text-[#0095F6] text-center mt-[20px]'> You forgot the password? </p>
                </div>
              </div>
            </div>
            <div className='bg-[white] py-[30px] m-auto mt-[20px]'>
              <div className='flex justify-center gap-[5px]'>
                <p> You don’t have an account? </p>
                <Link to={"/signup"}>
                <p className='text-[#0095F6] font-bold'> Join </p>
                </Link>
              </div>
            </div>
            <p className='text-center mt-[20px] font-bold'> Download the application. </p>
            <div>
              <img className='m-auto mt-[20px]' src={links} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login