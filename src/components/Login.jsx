import  {useState} from 'react'
import { useNavigate } from 'react-router'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()


  console.log(email);
  console.log(password);

  const onSubmit = (event) => {
    event.preventDefault()
    navigate('/')
  }

  return (
    <section className='w-full flex justify-center scale-up-center'>

<form onSubmit={onSubmit} className='w-[50%] mt-5 border-[1px] font-poppins p-5 rounded-lg border-[#33bbcf]'>
  <div className="mb-6">
    <h1 className='text-2xl tracking-wider text-gradient text-center m-3'>Log in to Your Account</h1>
    <label htmlFor="email" className="block mb-2 text-sm  font-medium text-gray-900 dark:text-white ">Your email</label>
    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ezzahir@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} required/>
  </div>
  <div className="mb-6">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => setPassword(e.target.value)} value={password} required/>
  </div>
  <div className="flex items-start mb-6">
    <div className="flex items-center h-5">
      <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"  required/>
    </div>
    <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
  </div>
  <button type="submit" className="text-primary bg-blue-gradient hover:bg-blue-gradient focus:ring-4 focus:outline-none focus:ring-blue-gradient-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-gradient dark:hover:bg-blue-gradient dark:focus:ring-blue-gradient">Submit</button>
</form>

    </section>
  )
}

export default Login
