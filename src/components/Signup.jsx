import React from 'react'
import { SignUp } from "@clerk/clerk-react";
 
export default function SignUpPage() {
  return (
    <div className='bg-[#0D1321] w-[100%] h-screen absolute top-0 left-0 flex justify-center items-center'>
      <SignUp afterSignUpUrl='/dashboard' redirectUrl='/dashboard'/>
    </div>
    );
}