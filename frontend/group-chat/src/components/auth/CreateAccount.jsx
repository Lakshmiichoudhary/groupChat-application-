import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Validaion } from '../utils/Validation';

const CreateAccount = () => {
  const [isError, setIsError] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const phoneNo = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();

  const handleSignup = async () => {
    const message = Validaion(
      name.current.value,
      email.current.value,
      phoneNo.current.value,
      password.current.value
    );
    //console.log(message)
    setIsError(message);

    if (message) return;

    try {
      const response = await fetch("http://localhost:4040/user/signup", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.current.value,
          email: email.current.value,
          phoneNo: phoneNo.current.value,
          password: password.current.value
        })
      });

      if (!response.ok) {
        const errordata = await response.json();
        //console.error("Error response:", errordata);
        setIsError(errordata.message);
        return;
      }

      const data = await response.json();
      //console.log("Signup successful:", data);
      navigate("/chat");
    } catch (error) {
      console.error("Unexpected error occurred:", error); 
      setIsError('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <div className='lg:flex md:flex h-screen'>
      <div className='lg:w-6/12 bg-gradient-to-b from-cyan-700 to-cyan-500'>
        <div className='p-2 lg:my-36 text-center'>
          <h1 className='p-2 text-white text-5xl font-bold'>Bridge</h1>
          <p className='p-2 text-white mt-2 text-3xl'>Connecting people across distances</p>
          <Link to="/"><button className='p-2 mt-36 text-white text-2xl'>Already a member? Log in</button></Link>
        </div>
      </div>
      <div className='lg:w-6/12 p-2 font-bold'>
        <form className='p-2 m-4 lg:mx-28 lg:my-24 border-4 shadow-2xl from-cyan-800' onSubmit={e => e.preventDefault()}>
          <h1 className='p-2 mx-3 text-center font-semibold text-2xl text-cyan-700'>Signup</h1>
          <input className='w-full p-3 my-2 outline-none bg-gray-200' type='text' placeholder='Name' ref={name} />
          <input className='w-full p-3 my-2 outline-none bg-gray-200' type='email' placeholder='xyz@gmail.com' ref={email} />
          <input className='w-full p-3 my-2 outline-none bg-gray-200' type='tel' placeholder='Phone No' ref={phoneNo} />
          <input className='w-full p-3 my-2 outline-none bg-gray-200' type='password' placeholder='*********' ref={password} />
          <p className='p-2 text-red-700 font-semibold'>{isError}</p>
          <button className='p-3 bg-cyan-500 w-full text-white rounded-md mt-4' onClick={handleSignup}>
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
