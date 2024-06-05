import React, { useRef } from 'react'

const Signup = () => {
  const name = useRef(null)
  const email = useRef(null)
  const phoneNo = useRef(null)
  const Password = useRef(null)

  return (
    <div>
      <form className='p-2 bg-black'>
            <input type='text' placeholder='Name' ref={name} />
            <input type='email'placeholder='xyz@gmail.com' ref={email}/>
            <input type='tel' placeholder='Phone No' ref={phoneNo}/>
            <input type='text' placeholder='*********' ref={Password}/>
            <button>Signup</button>
      </form>
    </div>
  )
}

export default Signup
