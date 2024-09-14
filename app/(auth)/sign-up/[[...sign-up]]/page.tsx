// import { SignedIn } from '@clerk/clerk-react'
import { SignUp } from '@clerk/nextjs';
import React from 'react'

const SignUpPage = () => {
  return (
    <main className='w-full h-screen flex-center  '>
      <SignUp/>
    </main>
  )
}

export default SignUpPage;