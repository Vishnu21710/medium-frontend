import Quote from '../components/Auth/Quote'
import Auth from '../components/Auth/Auth'


const Login = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 '>
        <Auth type='signin'/>
        <Quote/>
    </div>
  )
}

export default Login