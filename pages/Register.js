import Head from 'next/head'
import {FaFacebookF, FaLinkedinIn, FaGoogle, FaRegEnvelope} from "react-icons/fa"
import{MdLockOutline} from "react-icons/md"

export default function Home() {
  return (
    <div className= "flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-r from-blue-400 via-red-500 to-pink-500">
      <Head>
        <title>Create register page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className='bg-white rounded-2xl shadow-2xl  max-w-4xl'>
        <div className='items-center p-5'>
          <div className='text-left font-bold'>
            <span className='text-blue-500'>Menu</span>RecipeApp</div>
            <div className='py-10'>
              <h2 className='text-3xl font-bold text-blue-500 mb-2'>Account Registration</h2>
              <div className='border-2 w-32 border-blue-500 inline-block mb-2'></div>
              <div className='flex justify-center my-2'>
              </div>
              
              <div className='flex flex-col items-center '>
                <div className=' '>
                <p className='flex mb-2'>First Name</p>
              <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                <input type="String"  name="firstName" placeholder= "FirstName" 
                className='bg-gray-100 outline-none text-sm flex-1'/>
                 </div>
                 <p className='flex'> Last Name</p>
                <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                <input type="String"  name="lastName" placeholder= "LastName" 
                className='bg-gray-100 outline-none text-sm flex-1'/>
                </div>
                
                <p className='flex'>Email Address</p>
                <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                  <FaRegEnvelope className='text-gray-500 m-2'/>
                <input type="email"  name="email" placeholder= "Email" 
                className='bg-gray-100 outline-none text-sm flex-1'/>
                </div>
               <p className='flex'> Password</p>
                <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                  
                  <MdLockOutline className='text-gray-500 m-2'/>
                <input type="password"  name="password" placeholder= "Password" 
                className='bg-gray-100 outline-none text-sm flex-1'/>
                </div>
                <p className='flex'> Confirm Password</p>
                <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                <MdLockOutline className='text-gray-500 m-2'/>
                <input type="password"  name="password" placeholder= " Confirm Password" 
                className='bg-gray-100 outline-none text-sm flex-1'/>
                </div>
                </div>
                <a href="#" className='border-2 border-blue text-blue-500 rounded-full px-12 
                py-2 inline-block font-semibold hover:bg-blue-400 hover:text-white'>Sign Up</a>
        
              </div>
            </div>
          </div>    
          {/*Sign in Section Section  */}

       </div>
      </main>
    </div>
  )
}